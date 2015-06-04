class Remote

  constructor: () ->
    @local = null
    @remote = null


  sync: (callback) ->

    if @local and @remote

      if @local.default == true || @remote.default == true
        data = @getOnce()
        SST.storage.set 'everything', data, () ->
        callback(data.tasks)
        return

      else if @local.timestamp > @remote.timestamp
        data = @local

      else
        data = @remote
        SST.storage.set 'everything', data, () ->

      callback(data.tasks)


  get: (callback) ->

    SST.storage.get 'everything', (data) =>
      @local = data || 1

      @sync(callback)

    SST.remoteFirebase.on 'value', ((data) =>
      @remote = data.val()

      @sync(callback)

    ), (errorObject) ->
      console.log 'The read failed: ' + errorObject.code
      return


  getOnce: () ->
    data = null

    SST.remoteFirebase.once 'value', (value) ->
      data = value.val()

    data


  set: (callback) ->
    SST.storage.get 'everything', (data, callback) ->
      SST.remoteFirebase.set data, (callback) ->

