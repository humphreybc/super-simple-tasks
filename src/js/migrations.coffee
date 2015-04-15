# Migration when the data structure changes

class Migrations

  # List of migrations to run
  @run: (allTasks) ->
    @addLinkProperty(allTasks)


  # Add empty 'link' property to each task when migrating to 2.0.1
  @addLinkProperty: (allTasks) ->
    window.storageType.get 'whats-new-2-0-1', (whatsNew) ->
      if (whatsNew == null)

        # Add empty link to each
        for task, i in allTasks
          unless task.hasOwnProperty('link')
            task.link = ''

        # Save all the tasks
        window.storageType.set(DB.db_key, allTasks)