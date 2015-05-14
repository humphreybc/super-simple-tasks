# Migration when the data structure changes

class Migrations

  # List of migrations to run
  @run: (allTasks) ->
    @addLinkProperty(allTasks)
    @changePrioritiesToColor(allTasks)


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

    if allTasks[1].priority == undefined
      return

    for task, i in allTasks

      task =
        isDone: task.isDone
        name: task.name
        tag: ''
        link: task.link

      if task.priority == 'none'
        task.tag = 'gray'
      if task.priority == 'minor'
        task.tag = 'green'
      if task.priority == 'major'
        task.tag = 'yellow'
      if task.priority == 'blocker'
        task.tag = 'red'

    window.storageType.set(DB.db_key, allTasks)

