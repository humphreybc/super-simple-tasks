# Saving and manipulating tasks

class DB

  # DO NOT CHANGE

  # This is the key used to save tasks in localStorage
  # If this is changed, tasks will be lost on upgrade

  @db_key = 'todo'


class Arrays

  # This class contains default arrays

  # Arrays for priorities
  @priorities = ['none', 'minor', 'major', 'blocker']

  # Default task data for new users
  @default_data = [{
                      'isDone':false,
                      'name':'Add a new task above', 
                      'priority':'major'
                    },
                    {
                      'isDone':false,
                      'name':'Perhaps give it a priority', 
                      'priority':'minor'
                    },
                    {
                      'isDone':false,
                      'name':'Or even click and hold to reorder it', 
                      'priority':'minor'
                    },
                    {
                      'isDone':false,
                      'name':'Refresh to see that your task is still here', 
                      'priority':'minor'
                    },
                    {
                      'isDone':false,
                      'name':'Follow <a href="http://twitter.com/humphreybc" target="_blank">@humphreybc</a> on Twitter', 
                      'priority':'major'
                    },
                    {
                      'isDone':false,
                      'name':'Click a task’s name to complete it', 
                      'priority':'minor'
                    }]


class Task

  # This class contains most of the logic for manipulating tasks and saving them


  # Returns what we have in storage
  @getAllTasks: ->

    # Get the tasks from localStorage using the db_key
    allTasks = localStorage.getItem(DB.db_key)

    # Parse it as JSON, or if there's nothing there, use the default data
    allTasks = JSON.parse(allTasks) || Arrays.default_data

    # Return allTasks
    allTasks


  # Updates the storage and runs Views.showTasks() again to update the HTML list
  # DB.db_key is a variable set at the top of this file for the storage key
  @setAllTasks: (allTasks) ->
    localStorage.setItem(DB.db_key, JSON.stringify(allTasks))
    Views.showTasks(allTasks)


  # Creates a new task object with some defaults if they're not set
  @createTask: (name) ->
    task =
      isDone: false
      name: name
      priority: 'none'


  # Sets a new task
  # Receives name which is in the input
  @setNewTask: (name) ->

    # Only do this stuff if the input isn't blank
    unless name == ''

      # Sends the task to @createTask() to make a new task
      newTask = @createTask(name)

      # Get all the tasks
      allTasks = @getAllTasks()

      # Adds that new task to the end of the array
      allTasks.push newTask

      # Save all the tasks
      @setAllTasks(allTasks)


  # Removes the selected task from the list
  @markDone: (id) ->

    # Get all the tasks
    allTasks = @getAllTasks()

    # Identify the one we want to remove / complete
    toComplete = allTasks[id]

    # Sets the item we're removing in localStorage as 'undo' just in case
    localStorage.setItem('undo', JSON.stringify(toComplete))

    # Fades in the undo toast notification
    Views.undoFade()

    # TODO: Instead of removing completed tasks entirely, we want to update the attribute
    # 'isDone' to be true, so completed tasks can still be shown in the UI

    # @updateAttr(id, 'isDone', true)

    # Removes the task from the allTasks array
    allTasks.splice(id, 1)

    # Save all the tasks
    @setAllTasks(allTasks)


  # Updates the order upon drag and drop
  # Takes oldLocation and newLocation from dragdrop.coffee
  @updateOrder: (oldLocation, newLocation) ->

    # If the old and new locations are the same, return
    if oldLocation == newLocation
      return

    # Get the tasks
    allTasks = @getAllTasks()

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
    @setAllTasks(allTasks)


  # Add attribute 'id' to all objects in allTasks
  @updateTaskId: (allTasks) ->

    # Set id to object's current index (position in the array)
    index = 0

    # Update the ID
    while index < allTasks.length
      allTasks[index].id = index
      ++index

    # Return allTasks, now with an ID for each task
    allTasks


  # Remove tasks with isDone: true from the array
  @removeDoneTasks: (allTasks) ->

    # Start from the bottom
    index = allTasks.length - 1

    # For each task, if the task's attribute 'isDone' is equal to true
    # remove that task from the array allTasks
    while index >= 0
      if allTasks[index].isDone
        allTasks.splice(index, 1)
      index--

    # Return allTasks, except now without tasks with isDone: true
    allTasks


  # Change the attribute (in the DOM) and run updateAttr to change it in storage
  # Takes three parameters: the task (li), the attribute to change, and the current value
  @changeAttr: (li, attr, value) ->

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


  # Updates the attribute in storage
  @updateAttr: (id, attr, value) ->

    # Get all the tasks
    allTasks = @getAllTasks()

    # Find the particular task to update
    task = allTasks[id]

    # Set the new attribute
    task[attr] = value

    # Save all the tasks
    @setAllTasks(allTasks)


  # Grab the last task from storage 'undo' and add it back to storage using @setAllTasks()
  # Then remove that entry from storage 'undo' 
  @undoLast: ->
    redo = localStorage.getItem('undo')
    redo = JSON.parse(redo)

    # Get all the tasks
    allTasks = @getAllTasks()

    # For now, set the new position to the end of the array (bottom of the list)
    position = allTasks.length

    # Add the task back in at the bottom
    allTasks.splice(position, 0, redo)

    # Save all the tasks
    @setAllTasks(allTasks)

    # Remove the 'undo' item from localStorage
    localStorage.removeItem('undo')

    # Show the tasks
    Views.showTasks(allTasks)

    # Remove the undo toast notification
    Views.undoUX()


  # Clears storage and then runs Views.showTasks() to show the blank state message
  @markAllDone: ->

    # Save all the tasks with an empty array
    @setAllTasks([])

    # Gets the (now empty) list of tasks
    allTasks = @getAllTasks()

    # Shows the (now empty) list of tasks
    Views.showTasks(allTasks)

    