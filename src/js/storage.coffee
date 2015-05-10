# Saving tasks using either localStorage or chrome.storage.sync

class LocalStorage

  # Gets a generic value from localStorage given a particular key
  # Parses the JSON so it's an object instead of a string
  @get: (key, callback) ->

    if key == DB.db_key
      value = FirebaseSync.get(key)

    value = localStorage.getItem(key)

    value = JSON.parse(value)

    callback(value)


  # Synchronously gets the stuff from localStorage
  @getSync: (key) ->

    value = localStorage.getItem(key)

    JSON.parse(value)


  # Sets something to localStorage given a key and value
  @set: (key, value) ->

    if key == DB.db_key
      FirebaseSync.set(key, value)

    value = JSON.stringify(value)

    localStorage.setItem(key, value)


  # Removes something from localStorage given a key
  @remove: (key) ->
    localStorage.removeItem(key)


class ChromeStorage

  # Return all the tasks given the key
  # At the moment the key is 'todo' for most calls
  @get: (key, callback) ->
    
    chrome.storage.sync.get key, (value) ->
      value = value[key] || null || LocalStorage.getSync(key)

      callback(value)
 

  # Set all the tasks given the key 'todo' and the thing we're setting
  # Usually a JSON array of all the tasks
  @set: (key, value, callback) ->

    if key == DB.db_key
      FirebaseSync.set(key, value)

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

  ref = new Firebase('https://supersimpletasks.firebaseio.com/data')

  @get: (key, callback) ->

    child = ref.child(key)

    child.once 'value', (value) ->

      allTasks = value.val()

      callback(allTasks)


  @on: (key, callback) ->
    ref.on 'value', ((value) ->
      
      allTasks = value.val()

      callback(allTasks.todo)

    ), (errorObject) ->
      console.log 'The read failed: ' + errorObject.code
      return


  @update: (key, value, callback) ->

    child = ref.child(key)

    child.update value, () ->


  @set: (key, value, callback) ->

    child = ref.child(key)

    child.set value, () ->


  @remove: ->
    console.log 'remove'


class DB

  # DO NOT CHANGE

  # This is the key used to save tasks in localStorage
  # If this is changed, tasks will be lost on upgrade

  @saveSyncKey: ->

    @db_key = localStorage.getItem('sync_key')

    if @db_key == null
      @db_key = Utils.generateID()

      localStorage.setItem('sync_key', @db_key)

      console.log 'Your sync key has been set to: ' + @db_key

    console.log 'Your sync key is: ' + @db_key



