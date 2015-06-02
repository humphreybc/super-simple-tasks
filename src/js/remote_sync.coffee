# Refactor
class Remote

  constructor: () ->
    @local = null
    @remote = null


  sync: (callback) ->

    local = SST.remote.local || 1
    remote = SST.remote.remote

    if local and remote

      localTimestamp = local.timestamp
      remoteTimestamp = remote.timestamp

      if localTimestamp > remoteTimestamp
        data = local
        console.log 'Keeping local'
      else
        data = remote
        console.log 'Overwriting local'

      SST.storage.set 'everything', data, (data) ->

      ListView.showTasks(data.tasks)

      callback(data.tasks)

    else
      return


  get: (callback) ->

    SST.storage.get 'everything', (value) ->
      SST.remote.local = value

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

