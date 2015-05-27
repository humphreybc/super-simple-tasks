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
        if key == SST.storage.dbKey
          storageChange = changes[key]
          ListView.showTasks(storageChange.newValue)


class RemoteSync

  @get: () ->

    # Only do this stuff if sync is enabled (needs refactor)
    if SST.storage.syncEnabled

      # Create these outside the scope so everyone has access
      localTasks = null
      remoteTasks = null

      key = SST.storage.dbKey
      ref = SST.storage.remote_ref
      child = ref.child(key)


      # Runs when both the get methods return with local and remote tasks
      # Checks for equality
      # Merges and sets tasks if remote and local are different
      mergeTasks = () ->
        if localTasks and remoteTasks
          equalTasks = _.isEqual(remoteTasks, localTasks)

          console.log 'Tasks are equal: ' + equalTasks
          
          if equalTasks
            return
          else
            # Overwrites local tasks with remote tasks, instead
            # we should do a merge
            SST.storage.setTasks(remoteTasks)


      SST.storage.getTasks (value) ->
        localTasks = value

        console.log 'Local tasks: '
        console.log localTasks

        mergeTasks()


      child.once 'value', (value) ->
        remoteTasks = value.val()

        console.log 'Remote tasks: '
        console.log remoteTasks

        mergeTasks()


  @set: () ->

    if SST.storage.syncEnabled

      key = SST.storage.dbKey

      SST.storage.getTasks (localTasks) ->

        ref = SST.storage.remote_ref
        child = ref.child(key)
        child.set localTasks, () ->


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


  # Primary storage stuff

  get: (key, callback) ->
    @storageType.get(key, callback)

  
  getSync: (key) ->
    @storageType.getSync(key)


  set: (key, value, callback) ->
    @storageType.set(key, value, callback)


  remove: (key) ->
    @storageType.remove(key)


  # Fetching tasks

  getTasks: (callback) ->
    @get(@dbKey, callback)


  setTasks: (value, callback) ->
    @set(@dbKey, value, callback)


  linkDevices: ->
    unless @syncEnabled
      @syncEnabled = true
      @createFirebase()
      @setSyncKey()
      @reSaveTasks()

    Views.toggleModalDialog()

  
  createFirebase: ->
    if @syncEnabled
      @remote_ref = new Firebase('https://supersimpletasks.firebaseio.com/data')


  migrateKey: (new_key) ->
    SST.storage.get @dbKey, (allTasks) ->
      @dbKey = new_key
      SST.storage.set(@dbKey, allTasks)

      @dbKey


  reSaveTasks: ->
    SST.storage.get @dbKey, (allTasks) ->
      SST.storage.set(@dbKey, allTasks)


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
