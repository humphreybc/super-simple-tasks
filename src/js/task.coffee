# Manipulating tasks

class Arrays

  # This class contains default arrays

  # Colors for the tags
  @tags = ['gray', 'green', 'red', 'yellow', 'pink', 'purple', 'blue']

  # Default task data for new users
  @default_data = [{
                      'isDone':false,
                      'name':'Add a new task above',
                      'tag':'red',
                      'link':''
                    },
                    {
                      'isDone':false,
                      'name':'Perhaps give it a tag or reorder it',
                      'tag':'green',
                      'link':''
                    },
                    {
                      'isDone':false,
                      'name':'Refresh to see that your task is still here',
                      'tag':'pink',
                      'link':''
                    },
                    {
                      'isDone':false,
                      'name':'Reference things by attaching a URL to tasks',
                      'tag':'blue',
                      'link':'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    },
                    {
                      'isDone':false,
                      'name':'Follow @humphreybc on Twitter',
                      'tag':'yellow',
                      'link':'http://twitter.com/humphreybc'
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
      isDone: false
      name: name
      tag: 'gray'
      link: link


  # Sets a new task
  # Receives name and link from the inputs
  @setNewTask: (name, link) ->

    # Sends the task to @createTask() to make a new task
    newTask = @createTask(name, link)

    # Get all the tasks
    window.storageType.get DB.db_key, (allTasks) ->

      # Adds that new task to the end of the array
      allTasks.unshift newTask

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
      
      # Save the tasks
      window.storageType.set(DB.db_key, allTasks)

      # Show the tasks again
      Views.showTasks(allTasks)


  # Change the attribute (in the DOM) and run updateAttr to change it in storage
  # Used for arrays of things like tag colors
  # Takes three parameters: the task (li), the attribute to change, and the current value
  @cycleAttr: (li, attr, value) ->

    # Attribute is currently always tag
    if attr == 'tag'
      array = Arrays.tags

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




    