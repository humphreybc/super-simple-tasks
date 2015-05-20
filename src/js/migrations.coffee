# Migration when the data structure changes

class Migrations

  # List of migrations to run
  @run: (allTasks) ->
    @addLinkProperty(allTasks)
    @changePrioritiesToColor(allTasks)
    @addTaskID(allTasks)


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

  # Go from priority to color tag when migrating to 2.2
  @changePrioritiesToColor: (allTasks) ->

    if allTasks.length > 0
      unless allTasks[0].hasOwnProperty('tag')

        for task, i in allTasks
          task['tag'] = switch task.priority
            when 'none' then 'gray'
            when 'minor' then 'green'
            when 'major' then 'yellow'
            when 'blocker' then 'red'

          delete task.priority

        window.storageType.set(DB.db_key, allTasks)


  @addTaskID: (allTasks) ->

    if allTasks.length > 0
      unless allTasks[0].hasOwnProperty('id')

        for task, i in allTasks
          task.id = Utils.generateID()

        window.storageType.set(DB.db_key, allTasks)




