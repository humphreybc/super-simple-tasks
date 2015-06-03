class Remote

  constructor: () ->
    @local = null
    @remote = null


  sync: (callback) ->

    if @local and @remote

      if @local.default == true || @remote.default == true
        console.log 'handling default data'
        data = @getOnce()
        console.log data
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

    SST.storage.get 'everything', (value) =>
      console.log 'getting from local'
      @local = value || 1

      @sync(callback)

    SST.remoteFirebase.on 'value', ((value) =>
      console.log 'getting using on'
      @remote = value.val()

      @sync(callback)

    ), (errorObject) ->
      console.log 'The read failed: ' + errorObject.code
      return


  getOnce: () ->
    console.log 'getting once'
    data = null

    SST.remoteFirebase.once 'value', (value) ->
      data = value.val()

    data


  set: (callback) ->
    SST.storage.get 'everything', (data, callback) ->
      console.log 'setting'
      SST.remoteFirebase.set data, (callback) ->

