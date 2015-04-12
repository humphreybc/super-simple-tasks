# Manipulating tasks

class Arrays

  # This class contains default arrays

  # Arrays for priorities
  @priorities = ['none', 'minor', 'major', 'blocker']

  # Default task data for new users
  @default_data = [{
                      'id':0,
                      'isDone':false,
                      'name':'Add a new task above', 
                      'priority':'blocker',
                      'link':''
                    },
                    {
                      'id':1,
                      'isDone':false,
                      'name':'Perhaps give it a priority or reorder it', 
                      'priority':'minor',
                      'link':''
                    },
                    {
                      'id':2,
                      'isDone':false,
                      'name':'Refresh to see that your task is still here', 
                      'priority':'minor',
                      'link':''
                    },
                    {
                      'id':3,
                      'isDone':false,
                      'name':'Reference things by attaching a URL to tasks', 
                      'priority':'minor',
                      'link':'http://wikipedia.org'
                    },
                    {
                      'id':4,
                      'isDone':false,
                      'name':'Follow @humphreybc on Twitter', 
                      'priority':'major',
                      'link':'http://twitter.com/humphreybc'
                    },
                    {
                      'id':5,
                      'isDone':false,
                      'name':'Lastly, check this task off!', 
                      'priority':'none',
                      'link':''
                    }]


class Task

  # This class contains most of the logic for manipulating tasks and saving them

  # Creates a new task object with some defaults if they're not set
  @createTask: (name, link) ->

    # Regex to add http:// if it's missing from the user input
    if link != ''
      if !link.match(/^[a-zA-Z]+:\/\//)
        link = 'http://' + link

    # Actually create the task
    task =
      id: null
      isDone: false
      name: name
      priority: 'none'
      link: link


  # Sets a new task
  # Receives name and link from the inputs
  @setNewTask: (name, link) ->

    # Sends the task to @createTask() to make a new task
    newTask = @createTask(name, link)

    # Get all the tasks
    window.storageType.get DB.db_key, (allTasks) ->

      # Adds that new task to the end of the array
      allTasks.push newTask

      # Save all the tasks
      window.storageType.set(DB.db_key, allTasks)

      # Show the tasks
      Views.showTasks(allTasks)


  # Updates the order upon drag and drop
  # Takes oldLocation and newLocation from dragdrop.coffee
  @updateOrder: (oldLocation, newLocation) ->

    # If the old and new locations are the same, return
    if oldLocation == newLocation
      return

    # Get the tasks
    window.storageType.get DB.db_key, (allTasks) ->

      # The task we want to move
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

      # Update the task id to reflect the new world order
      Task.updateTaskId(allTasks)
      
      # Save the tasks
      window.storageType.set(DB.db_key, allTasks)

      # Show the tasks again
      Views.showTasks(allTasks)


  # Add attribute 'id' to all objects in allTasks
  @updateTaskId: (allTasks) ->

    if allTasks == null
      return

    # Set id to object's current index (position in the array)
    index = 0

    # Update the ID
    while index < allTasks.length
      allTasks[index].id = index
      ++index

    # Return allTasks, now with an ID for each task
    allTasks


  # Change the attribute (in the DOM) and run updateAttr to change it in storage
  # Used for arrays of things like priorities
  # Takes three parameters: the task (li), the attribute to change, and the current value
  @cycleAttr: (li, attr, value) ->

    # Attribute is currently always priority
    if attr == 'priority'
      array = Arrays.priorities

    # Get the current position in the attribute array
    currentIndex = $.inArray(value, array)

    # Get the ID of the task given its li
    id = Views.getId(li)

    # Handle the current attribute if it's at the end of the attribute array
    if currentIndex == array.length - 1
      currentIndex = -1

    # Update attribute
    value = array[currentIndex + 1]

    @updateAttr(id, attr, value)


  # Updates a particular attribute in storage
  @updateAttr: (id, attr, value) ->

    # Get all the tasks
    window.storageType.get DB.db_key, (allTasks) ->

      # Find the particular task to update
      task = allTasks[id]

      # Set the new attribute
      task[attr] = value

      # Save all the tasks
      window.storageType.set(DB.db_key, allTasks)

      # Show the tasks!
      Views.showTasks(allTasks)



  # Clears storage and then runs Views.showTasks() to show the blank state message
  @clearCompleted: ->

    # Gets the list of tasks
    window.storageType.get DB.db_key, (allTasks) ->

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

      # Save all the tasks
      window.storageType.set(DB.db_key, allTasks)

      # Return allTasks, except now without tasks with isDone: true
      Views.showTasks(allTasks)




    