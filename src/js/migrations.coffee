class Migrations

  # Update the tasks to be the new object format
  @updateToObject: (oldTasks) ->
    data =
    {
      'name': '',
      'timestamp': null,
      'tour': 1,
      'version': 300,
      'tasks': oldTasks
    }

    SST.storage.set('everything', data)
    data.tasks


  # Migrate users from chrome.storage.sync
  @updateToLocalStorage: (everything) ->
    oldTasks = everything['todo']
    allTasks = @updateToObject(oldTasks)

    if allTasks == undefined
      allTasks = Task.seedDefaultTasks()

    allTasks