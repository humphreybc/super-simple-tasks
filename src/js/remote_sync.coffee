class Remote

  merge: (local, remote) ->
    if local.default == true || remote.default == true
      data = @getTasks()
      data.default = false
    else
      data = if local.timestamp > remote.timestamp then local else remote
      console.log("Local " + local.timestamp)
      console.log("Remot " + remote.timestamp)

    SST.storage.set 'everything', data, ->
      data.timestamp = Date.now()
      SST.remoteFirebase.set data, () ->
    data


  sync: (callback) ->
    d1 = $.Deferred()
    d2 = $.Deferred()
    local = null
    remote = null

    SST.storage.get 'everything', (data) =>
      local = data || 1
      d1.resolve()

    SST.remoteFirebase.on 'value', ((data) =>
      remote = data.val()
      d2.resolve()
    ), (errorObject) ->
      console.log 'The read failed: ' + errorObject.code
      return

    $.when(d1, d2).done =>
      data = @merge(local, remote)
      callback(data)


  getTasks: () ->
    data = null

    SST.remoteFirebase.once 'value', (value) ->
      data = value.val()

    data
