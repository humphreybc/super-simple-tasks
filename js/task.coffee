# Stuff to do with saving tasks

class DB

  # DO NOT CHANGE
  @db_key = 'todo'

class Arrays

  # Arrays for priorities and due dates
  @priorities = ['minor', 'major', 'blocker']
  @duedates = ['today', 'tomorrow', 'this week', 'next week', 'this month']

  @default_data = [{
                      'isDone':false,
                      'name':'Add a new task above', 
                      'priority':'major', 
                      'duedate':'today'
                    },
                    {
                      'isDone':false,
                      'name':'Refresh and see your task is still here', 
                      'priority':'minor', 
                      'duedate':'today'
                    },
                    {
                      'isDone':false,
                      'name':'Click a task to complete it', 
                      'priority':'minor', 
                      'duedate':'tomorrow'
                    },
                    {
                      'isDone':false,
                      'name':'Follow <a href="http://twitter.com/humphreybc" target="_blank">@humphreybc</a> on Twitter', 
                      'priority':'major', 
                      'duedate':'today'
                    }]

class Task

  # Returns what we have in storage
  @getAllTasks: ->
    allTasks = localStorage.getItem(DB.db_key)
    allTasks = JSON.parse(allTasks) || Arrays.default_data
    allTasks

  # Creates a new task object with some defaults if they're not set
  @createTask: (name) ->
    task =
      isDone: false
      name: name
      priority: 'minor'
      duedate: 'today'

  # Gets whatever is in the input and saves it
  @setNewTask: (name) ->
    unless name == ''
      newTask = @createTask(name)
      allTasks = @getAllTasks()
      allTasks.push newTask
      @setAllTasks(allTasks)

  # Change the attribute (in the DOM) and run updateAttr to change it in localStorage
  @changeAttr: (li, attr, value) ->

    if attr == 'priority'
      array = Arrays.priorities
    else if attr == 'duedate'
      array = Arrays.duedates

    currentIndex = $.inArray(value, array)

    if currentIndex == array.length - 1
      currentIndex = -1
    value = array[currentIndex + 1]

    @updateAttr(li, attr, value)

  @updateAttr: (li, attr, value) ->
    id = Views.getId(li)
    allTasks = Task.getAllTasks()
    task = allTasks[id]
    task[attr] = value
    @setAllTasks(allTasks)

  # Updates the localStorage and runs showTasks again to update the list
  @setAllTasks: (allTasks) ->
    localStorage.setItem(DB.db_key, JSON.stringify(allTasks))
    Views.showTasks(allTasks)

  # Removes the selected task from the list and passes that to setAllTasks to update storage
  @markDone: (id) ->
    allTasks = Task.getAllTasks()
    toDelete = allTasks[id]
    toDelete['position'] = id
    localStorage.setItem('undo', JSON.stringify(toDelete))

    Views.undoFade()

    allTasks = Task.getAllTasks()
    allTasks.splice(id,1)
    @setAllTasks(allTasks)

  # Grab the last task from storage 'undo' and add it back to storage 'task' using Task.setAllTasks()
  # Then remove that entry from storage 'undo' 
  @undoLast: ->
    redo = localStorage.getItem('undo')
    redo = JSON.parse(redo)
    allTasks = @getAllTasks()
    position = redo.position
    delete redo['position']
    allTasks.splice(position, 0, redo)
    @setAllTasks(allTasks)
    localStorage.removeItem('undo')

    Views.undoUX(allTasks)

  # Clears localStorage
  @markAllDone: ->
    @setAllTasks([])

  # Grab everything from the key 'name' out of the object
  @getNames: (allTasks) ->
    names = [] # create a new array for our names
    for task in allTasks # iterate on each
      names.push task['name'] # append the value to our new array called names
    names # return them so allTasks() can use it

    