class Remote

  constructor: () ->
    @local = null
    @remote = null


  merge: (callback) ->
    if @local and @remote

      if @local.default == true || @remote.default == true
        data = @getOnce()
      else
        data = if @local.timestamp > @remote.timestamp then @local else @remote

      SST.storage.set 'everything', data, () ->
      callback(data.tasks)


  sync: (callback) ->

    SST.storage.get 'everything', (data) =>
      @local = data || 1

      @merge(callback)

    SST.remoteFirebase.on 'value', ((data) =>
      @remote = data.val()

      @merge(callback)

    ), (errorObject) ->
      console.log 'The read failed: ' + errorObject.code


  getOnce: () ->
    data = null

    SST.remoteFirebase.once 'value', (value) ->
      data = value.val()

    data


  set: (callback) ->
    SST.storage.get 'everything', (data, callback) ->
      SST.remoteFirebase.set data, (callback) ->

