# Migration when the data structure changes

class Migrations

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