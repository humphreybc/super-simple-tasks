class RemoteSync

  @get: () ->

    if SST.storage.syncEnabled

      local = null
      remote = null

      ref = SST.storage.remote_ref
      child = ref.child(SST.storage.dbKey)

      # Runs when both the get methods return with local and remote tasks
      # Checks timestamp and preferences most recent set of tasks
      mergeTasks = () ->

        if local and remote

          localTimestamp = localTasks.timestamp
          remoteTimestamp = remoteTasks.timestamp

          # Overwrite local with remote since it's newer
          if localTimestamp > remoteTimestamp
            data = local
          else
            data = remote

          SST.storage.set 'everything', data, (data) ->
          ListView.showTasks(data.tasks)
          RemoteSync.set()


      SST.storage.get 'everything', (value) ->
        local = value

        console.log 'Local stuff: '
        console.log local

        mergeTasks()


      child.once 'value', (value) ->
        remote = value.val() || {}

        console.log 'Remote stuff: '
        console.log remote

        mergeTasks()


  @set: () ->

    if SST.storage.syncEnabled

      key = SST.storage.dbKey

      SST.storage.get 'everything', (data) ->

        ref = SST.storage.remote_ref
        child = ref.child(key)
        child.set data, () ->
