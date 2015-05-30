class LocalStorage

  @get: (key, property, callback) ->
    value = localStorage.getItem(key)

    if value == null
      callback(value)
      return

    value = JSON.parse(value)

    if property == 'everything'
      callback(value)
    else
      callback(value[property])


  @set: (key, property, value, callback) ->

    data = JSON.parse(localStorage.getItem(key)) || {}

    if property == 'everything'
      data = value
    else
      data[property] = value

    data = JSON.stringify(data)
    localStorage.setItem(key, data)

    if callback
      callback()


class ChromeStorage

  @get: (key, property, callback) ->
    chrome.storage.sync.get key, (value) ->

      value = value[key] || null

      if value == null
        callback(value)
        return

      callback(value[property])
 

  @set: (key, property, value, callback) ->
    chrome.storage.sync.get key, (data) ->
      
      if data == null
        data = {}

      data[property] = value

      chrome.storage.sync.set data, () ->

        if callback
          callback()


  # Listen for changes and run ListView.showTasks when a change happens
  
  if !!window.chrome and chrome.storage
    chrome.storage.onChanged.addListener (changes, namespace) ->
      for key of changes
        if key == SST.storage.dbKey
          storageChange = changes[key]
          ListView.showTasks(storageChange.newValue)


class Storage

  constructor: () ->
    if !!window.chrome and chrome.storage
      @storageType = ChromeStorage
      console.log 'Using chrome.storage.sync to save'
    else
      @storageType = LocalStorage
      console.log 'Using localStorage to save'

    @syncKey = localStorage.getItem('sync_key')

    if @syncKey == null
      @syncEnabled = false
    else
      @syncEnabled = true

    shareCode = Utils.getUrlParameter('share')
    
    unless shareCode == undefined
      @dbKey = shareCode
      localStorage.setItem('sync_key', shareCode)
      @syncEnabled = true

    @createFirebase()
    @setSyncKey()


  get: (property, callback) ->
    @storageType.get(@dbKey, property, callback)


  set: (property, value, callback) ->
    @storageType.set(@dbKey, property, value, callback)


  getTasks: (callback) ->
    @storageType.get(@dbKey, 'tasks', callback)


  setTasks: (value, callback) ->

    @set('tasks', value, callback)
    @set('timestamp', Date.now(), callback)


  linkDevices: ->
    unless @syncEnabled
      @syncEnabled = true
      @createFirebase()
      @setSyncKey()
      # @reSaveTasks()

    Views.toggleModalDialog()

  
  createFirebase: ->
    if @syncEnabled
      @remote_ref = new Firebase('https://supersimpletasks.firebaseio.com/data/')


  migrateKey: (new_key) ->
    @get 'everything', (everything) ->
      @dbKey = new_key
      SST.storage.set everything, () ->

      @dbKey


  reSaveTasks: ->
    @getTasks (allTasks) ->
      @setTasks (allTasks) ->


  setSyncKey: ->
    if @syncEnabled
      @dbKey = localStorage.getItem('sync_key')

      if @dbKey == null
        @dbKey = 'todo'

        new_key = Utils.generateID()

        @dbKey = @migrateKey(new_key)

        localStorage.setItem('sync_key', @dbKey)

        console.log 'Your sync key has been set to: ' + @dbKey

    else
      @dbKey = 'todo'


    console.log 'Your sync code is: ' + @dbKey


  disconnectDevices: ->
    localStorage.removeItem('sync_enabled')
    localStorage.removeItem('sync_key')

    @migrateKey('todo')
