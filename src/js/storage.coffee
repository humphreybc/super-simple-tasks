class LocalStorage

  @get: (key, callback) ->

    value = localStorage.getItem(key)
    value = JSON.parse(value)

    callback(value)


  @getSync: (key) ->
    value = localStorage.getItem(key)
    JSON.parse(value)


  @set: (key, value, callback) ->

    value = JSON.stringify(value)
    localStorage.setItem(key, value)

    if callback
      callback()


  @remove: (key) ->
    localStorage.removeItem(key)


class ChromeStorage

  @get: (key, callback) ->
    chrome.storage.sync.get key, (value) ->
      value = value[key] || null || LocalStorage.getSync(key)

      callback(value)
 

  @set: (key, value, callback) ->

    params = {}
    params[key] = value

    chrome.storage.sync.set params, () ->

      if callback
        callback()


  @remove: (key) ->
    chrome.storage.sync.remove key, () ->


  # Listen for changes and run ListView.showTasks when a change happens
  
  if !!window.chrome and chrome.storage
    chrome.storage.onChanged.addListener (changes, namespace) ->
      for key of changes
        if key == SST.storage.db_key
          storageChange = changes[key]
          ListView.showTasks(storageChange.newValue)


class FirebaseSync

  @get: (key, callback) ->

    if key == SST.storage.db_key and @sync_enabled
      ref = SST.storage.remote_ref
      child = ref.child(key)
      child.once 'value', (value) ->
        allTasks = value.val()
        callback(allTasks)


  @set: (key, value, callback) ->

    if key == SST.storage.db_key and @sync_enabled
      ref = SST.storage.remote_ref
      child = ref.child(key)
      child.set value, () ->


  @on: (key, callback) ->
    ref = SST.storage.remote_ref

    ref.on 'value', ((value) ->
      allTasks = value.val()
      callback(allTasks.todo)

    ), (errorObject) ->
      console.log 'The read failed: ' + errorObject.code
      return


  @update: (key, value, callback) ->
    ref = SST.storage.remote_ref
    child = ref.child(key)
    child.update value, () ->


  @remove: ->
    console.log 'remove'


class Storage

  constructor: () ->
    if !!window.chrome and chrome.storage
      @storage_type = ChromeStorage
      console.log 'Using chrome.storage.sync to save'
    else
      @storage_type = LocalStorage
      console.log 'Using localStorage to save'

    share_code = Utils.getUrlParameter('share')
    @sync_enabled = false
    
    unless share_code == undefined
      @db_key = share_code
      localStorage.setItem('sync_key', share_code)
      @sync_enabled = true

    @createFirebase()
    @setSyncKey()

  # Primary storage stuff

  get: (key, callback) ->
    @storage_type.get(key, callback)

  
  getSync: (key) ->
    @storage_type.getSync(key)


  set: (key, value, callback) ->
    @storage_type.set(key, value, callback)

  remove: (key) ->
    @storage_type.remove(key)

  # Fetching tasks

  getTasks: (callback) ->
    @get(@db_key, callback)

  setTasks: (value, callback) ->
    @set(@db_key, value, callback)

  linkDevices: ->
    unless @sync_enabled
      @sync_enabled = true
      @createFirebase()
      @setSyncKey()
      @reSaveTasks()

    Views.toggleModalDialog()

  
  createFirebase: ->
    if @sync_enabled
      @remote_ref = new Firebase('https://supersimpletasks.firebaseio.com/data')


  migrateKey: (new_key) ->
    SST.storage.get @db_key, (allTasks) ->
      @db_key = new_key
      SST.storage.set(@db_key, allTasks)

      @db_key


  reSaveTasks: ->
    SST.storage.get @db_key, (allTasks) ->
      SST.storage.set(@db_key, allTasks)


  setSyncKey: ->
    if @sync_enabled
      @db_key = localStorage.getItem('sync_key')

      if @db_key == null
        @db_key = 'todo'

        new_key = Utils.generateID()

        @db_key = @migrateKey(new_key)

        localStorage.setItem('sync_key', @db_key)

        console.log 'Your sync key has been set to: ' + @db_key

    else
      @db_key = 'todo'


    console.log 'Your sync is: ' + @db_key


  disconnectDevices: ->
    localStorage.removeItem('sync_enabled')
    localStorage.removeItem('sync_key')

    @migrateKey('todo')
