class Remote

  merge: (local, remote, callback) ->
    data = if local.timestamp > remote.timestamp then local else remote

    SST.storage.set 'everything', data, () ->
      SST.storage.get 'everything', (data, callback) ->
        SST.remoteFirebase.set data, (callback) ->
    callback(data.tasks)


  sync: (callback) ->
    d1 = $.Deferred()
    d2 = $.Deferred()

    SST.storage.get 'everything', (data) =>
      local = data || 1
      d1.resolve(local)

    SST.remoteFirebase.once 'value', (value) ->
      remote = value.val()
      d2.resolve(remote)

    $.when(d1, d2).done (local, remote) =>
      @merge(local, remote, callback)
