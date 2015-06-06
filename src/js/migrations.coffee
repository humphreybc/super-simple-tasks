# Migration when the data structure changes

class Migrations

  @run: (data) ->

    data = @moveToLocalStorage(data)
    data = @updateStorageModel(data)

  data.tasks

  @moveToLocalStorage: (oldData) ->
    debugger

  # Migrate storage model to object
  @updateStorageModel: (oldTasks) ->

    data =
    {
      'name': '',
      'timestamp': null,
      'tour': 1,
      'version': '3.0.0',
      'tasks': oldTasks
    }

    SST.storage.set 'everything', data, () ->
      return data.tasks