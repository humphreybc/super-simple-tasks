class Remote

  merge: (local, remote, callback) ->
    if local.timestamp > remote.timestamp
      data = local
    else if local.timestamp == remote.timestamp
      data = local
    else
      data = remote

    SST.storage.set 'everything', data, () ->
      SST.storage.get 'everything', (data, callback) ->
        SST.remoteFirebase.set data, (callback) ->
    callback(data.tasks)


  sync: (callback) ->
    d1 = $.Deferred()
    d2 = $.Deferred()

    setTimeout (->
      SST.storage.get 'everything', (data) ->
        local = data || {}
        d1.resolve(local)
    ), 250

    SST.remoteFirebase.once 'value', (value) ->
      remote = value.val() || {timestamp: 0}
      d2.resolve(remote)

    $.when(d1, d2).done (local, remote) =>
      @merge(local, remote, callback)