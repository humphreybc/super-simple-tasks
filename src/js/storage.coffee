# Saving tasks using either localStorage or chrome.storage.sync

class LocalStorage

  # Gets a generic value from localStorage given a particular key
  # Parses the JSON so it's an object instead of a string
  @get: (key, callback) ->

    # if window.sync_enabled
    #   FirebaseSync.get key, (value) ->
    #     callback(value)

    value = localStorage.getItem(key)

    value = JSON.parse(value)

    callback(value)


  # Sets something to localStorage given a key and value
  @set: (key, value) ->

    FirebaseSync.set key, value, () ->

    value = JSON.stringify(value)

    localStorage.setItem(key, value)


  # Removes something from localStorage given a key
  @remove: (key) ->
    localStorage.removeItem(key)


class ChromeStorage

  # Return all the tasks given the key
  @get: (key, callback) ->
    
    chrome.storage.sync.get key, (value) ->
      value = value[key] || null || LocalStorage.getSync(key)

      callback(value)
 

  # Set all the tasks given the key
  # Usually a JSON array of all the tasks
  @set: (key, value, callback) ->

    FirebaseSync.set key, value, () ->

    params = {}
    params[key] = value

    chrome.storage.sync.set params, () ->


  # Remove a whole entry from chrome.storage.sync given its key
  @remove: (key) ->

    chrome.storage.sync.remove key, () ->


  # Listen for changes and run Views.showTasks when a change happens
  if !!window.chrome and chrome.storage

    chrome.storage.onChanged.addListener (changes, namespace) ->
      for key of changes
        if key == DB.db_key
          storageChange = changes[key]
          Views.showTasks(storageChange.newValue)


class FirebaseSync

  @get: (key, callback) ->

    if key == DB.db_key and window.sync_enabled

      ref = DB.remote_ref

      child = ref.child(key)

      child.once 'value', (value) ->

        allTasks = value.val()

        callback(allTasks)



  @set: (key, value, callback) ->

    if key == DB.db_key and window.sync_enabled

      ref = DB.remote_ref

      child = ref.child(key)

      child.set value, () ->


  @on: (key, callback) ->

    ref = DB.remote_ref

    ref.on 'value', ((value) ->
      
      allTasks = value.val()

      callback(allTasks.todo)

    ), (errorObject) ->
      console.log 'The read failed: ' + errorObject.code
      return


  @update: (key, value, callback) ->

    ref = DB.remote_ref

    child = ref.child(key)

    child.update value, () ->


  @remove: ->

    console.log 'remove'


class DB

  @linkDevices: ->

    unless window.sync_enabled

      @enableSync()

      @setSyncStatus()

      @createFirebase()

      @setSyncKey()

      @reSaveTasks()

    Views.toggleModalDialog()


  @enableSync: ->

    localStorage.setItem('sync_enabled', true)


  @setSyncStatus: ->

    window.sync_enabled = localStorage.getItem('sync_enabled')

    if window.sync_enabled == null
      window.sync_enabled = false
    else
      window.sync_enabled = true

  
  @createFirebase: ->

    @remote_ref = new Firebase('https://supersimpletasks.firebaseio.com/data')


  @migrateKey: (new_key) ->

    window.storageType.get @db_key, (allTasks) ->
      
      @db_key = new_key

      window.storageType.set(@db_key, allTasks)

      @db_key


  @reSaveTasks: ->

    window.storageType.get @db_key, (allTasks) ->

      window.storageType.set(@db_key, allTasks)


  @checkStorageMethod: ->

    if !!window.chrome and chrome.storage
      window.storageType = ChromeStorage
    else
      window.storageType = LocalStorage


  @setSyncKey: ->

    if window.sync_enabled
      @db_key = localStorage.getItem('sync_key')

      if @db_key == null
        @db_key = 'todo'

        new_key = Utils.generateID()

        @db_key = @migrateKey(new_key)

        localStorage.setItem('sync_key', @db_key)

        console.log 'Your sync key has been set to: ' + @db_key

    else
      @db_key = 'todo'

    console.log 'Your sync key is: ' + @db_key


  @disconnectDevices: ->
    localStorage.removeItem('sync_enabled')
    localStorage.removeItem('sync_key')

    @migrateKey('todo')



