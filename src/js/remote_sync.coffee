# Refactor
class Remote

  constructor: () ->
    @local = null
    @remote = null


  sync: (callback) ->

    local = SST.remote.local
    remote = SST.remote.remote

    if local and remote

      localTimestamp = local.timestamp
      remoteTimestamp = remote.timestamp

      if localTimestamp == remoteTimestamp
        data = local
        console.log 'Keeping local'
      if localTimestamp > remoteTimestamp
        data = local
        pushToRemote = true
        console.log 'Pushing local to remote'
      else
        data = remote
        console.log 'Pull remote and overwriting local'

      SST.storage.set 'everything', data, (data) ->
        if pushToRemote == true
          SST.remote.set()

      ListView.showTasks(data.tasks)

      callback(data.tasks)

    else
      return


  get: (callback) ->

    SST.storage.get 'everything', (value) ->
      SST.remote.local = value || 1

      console.log 'Local stuff: '
      console.log SST.remote.local

      SST.remote.sync(callback)

    SST.remoteFirebase.on 'value', ((value) ->
      SST.remote.remote = value.val()

      console.log 'Remote stuff: '
      console.log SST.remote.remote

      SST.remote.sync(callback)

    ), (errorObject) ->
      console.log 'The read failed: ' + errorObject.code
      return


    # SST.remote.ref.once 'value', (value) ->
    #   SST.remote.remote = value.val()

    #   console.log 'Remote stuff: '
    #   console.log SST.remote.remote

    #   SST.remote.sync(callback)


  set: () ->

    SST.storage.get 'everything', (data) ->
      SST.remoteFirebase.set data, () ->

