class Arrays

  # This class contains default arrays

  # Colors for the tags
  @tags = ['gray', 'green', 'red', 'yellow', 'pink', 'purple', 'blue']

  # Default task data for new users
  @default_data = [{
                      'id':Utils.generateID(),
                      'isDone':false,
                      'name':'Add a new task above',
                      'tag':'red',
                      'link':''
                    },
                    {
                      'id':Utils.generateID(),
                      'isDone':false,
                      'name':'Perhaps give it a tag or reorder it',
                      'tag':'green',
                      'link':''
                    },
                    {
                      'id':Utils.generateID(),
                      'isDone':false,
                      'name':'Refresh to see that your task is still here',
                      'tag':'pink',
                      'link':''
                    },
                    {
                      'id':Utils.generateID(),
                      'isDone':false,
                      'name':'Reference things by attaching a URL to tasks',
                      'tag':'blue',
                      'link':'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    },
                    {
                      'id':Utils.generateID(),
                      'isDone':false,
                      'name':'Follow @humphreybc on Twitter',
                      'tag':'yellow',
                      'link':'http://twitter.com/humphreybc'
                    }]


class Task

  @createTask: (name, link) ->

    # Regex to add http:// if it's missing from the user input
    if link != ''
      if !link.match(/^[a-zA-Z]+:\/\//)
        link = 'http://' + link

    # Actually create the task
    task =
      id: Utils.generateID()
      isDone: false
      name: name
      tag: 'gray'
      link: link


  @setNewTask: (name, link) ->

    newTask = @createTask(name, link)

    SST.storage.getTasks (allTasks) ->

      # Adds that new task to the end of the array
      allTasks.unshift newTask
      SST.storage.setTasks(allTasks)
      ListView.showTasks(allTasks)

      Analytics.sendTaskCount(allTasks)

      # Hack city
      RemoteSync.set()


  @updateTask: (name, link, id) ->

    SST.storage.getTasks (allTasks) ->

      allTasks[id].name = name
      allTasks[id].link = link

      SST.storage.setTasks allTasks, () ->
        ListView.showTasks(allTasks)
        TaskView.taskEditedAnimation(id)


  # Updates the order upon drag and drop
  # Takes oldLocation and newLocation from dragdrop.coffee
  @updateOrder: (oldLocation, newLocation) ->

    # If the old and new locations are the same, return
    if oldLocation == newLocation
      return

    SST.storage.getTasks (allTasks) ->

      toMove = allTasks[oldLocation]

      # If the current position (oldLocation) is above (rendered on the screen) the new location
      # the splice needs to take into account the existing toMove object and "jump" over it
      if oldLocation < newLocation
        newLocation += 1
      allTasks.splice(newLocation, 0, toMove)

      # If the newLocation is above (rendered on the screen) the old location
      # the splice needs to take into account the new toMove object and "jump" over it
      if newLocation < oldLocation
        oldLocation += 1
      allTasks.splice(oldLocation, 1)
      
      SST.storage.setTasks(allTasks)
      ListView.showTasks(allTasks)


  @cycleAttr: (li, attr, value) ->

    if attr == 'tag'
      array = Arrays.tags

    # Get the current position in the attribute array
    currentIndex = $.inArray(value, array)

    id = TaskView.getId(li)

    # Handle the current attribute if it's at the end of the attribute array
    if currentIndex == array.length - 1
      currentIndex = -1

    value = array[currentIndex + 1]
    @updateAttr(id, attr, value)


  @updateAttr: (id, attr, value) ->

    SST.storage.getTasks (allTasks) ->
      task = allTasks[id]
      task[attr] = value
      SST.storage.setTasks(allTasks)
      ListView.showTasks(allTasks)


  @clearCompleted: ->

    SST.storage.getTasks (allTasks) ->

      if allTasks == null
        return

      # Start from the bottom
      index = allTasks.length - 1

      # For each task, if the task's attribute 'isDone' is equal to true
      # remove that task from the array allTasks
      while index >= 0
        if allTasks[index].isDone
          allTasks.splice(index, 1)
        index--

      SST.storage.setTasks(allTasks)
      ListView.showTasks(allTasks)


  @handleNoTasks: (allTasks) ->
    if allTasks == null
      allTasks = Arrays.default_data
      SST.storage.setTasks(allTasks)

    return allTasks


  @exportTasks: ->
    SST.storage.getTasks (allTasks) ->
      Exporter(allTasks, 'super simple tasks backup')




    