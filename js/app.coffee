$(document).ready ->

  timeout = 0
  priorities = ['minor', 'major', 'blocker']

  # Runs functions on page load
  initialize = ->
    allTasks = getAllTasks()
    showTasks(allTasks)
    $("#new-task").focus()

  # Creates a new task object
  createTask = (name) ->
    task =
      isDone: false
      name: name
      priority: 'minor'

  # Pulls what we have in localStorage
  getAllTasks = ->
    allTasks = localStorage.getItem("todo")
    # allTasks = JSON.parse(allTasks) || []
    allTasks = JSON.parse(allTasks) || [{"isDone":false,"name":"Add a new task above", 'priority':'major'},
                                        {"isDone":false,"name":"Refresh and see your task is still here", 'priority':'minor'},
                                        {"isDone":false,"name":"Click a task to complete it", 'priority':'minor'},
                                        {"isDone":false,"name":"Follow <a href='http://twitter.com/humphreybc' target='_blank'>@humphreybc</a> on Twitter", 'priority':'minor'}]
    allTasks

  # Gets whatever is in the input and saves it
  setNewTask = ->
    name = $("#new-task").val()
    unless name == ''
      newTask = createTask(name)
      allTasks = getAllTasks()
      allTasks.push newTask
      setAllTasks(allTasks)

  updateAttr = (li, attr, value) ->
    id = getId(li)
    allTasks = getAllTasks()
    task = allTasks[id]
    task[attr] = value
    setAllTasks(allTasks)

  # Updates the localStorage and runs showTasks again to update the list
  setAllTasks = (allTasks) ->
    localStorage.setItem("todo", JSON.stringify(allTasks))
    showTasks(allTasks)
    $("#new-task").val('')
    
  # Finds the input id, strips 'task' from it, and converts the string to an int
  getId = (li) ->
    id = $(li).find('input').attr('id').replace('task', '')
    parseInt(id)

  # Removes the selected task from the list and parses that to setAllTasks to update localStorage
  # Then fades in the undo option at the top of the page and starts a timer to fade it out
  # If the timer isn't interuppted by undoLast() then fade it out after 5 seconds and remove the task item from 'undo'
  markDone = (id) ->
    allTasks = getAllTasks()
    toDelete = allTasks[id]
    toDelete['position'] = id
    localStorage.setItem("undo", JSON.stringify(toDelete))
    $("#undo").fadeIn(150)

    timeout = setTimeout(->
      $("#undo").fadeOut(250)
      localStorage.removeItem("undo")
    , 5000)

    allTasks = getAllTasks()
    allTasks.splice(id,1)
    setAllTasks(allTasks)

  # Clears localStorage
  markAllDone = ->
    setAllTasks([])

  # Grab everything from the key 'name' out of the object
  getNames = (allTasks) ->
    names = [] # create a new array for our names
    for task in allTasks # iterate on each
      names.push task['name'] # append the value to our new array called names
    names # return them so allTasks() can use it

  # Gives us the list formatted nicely
  generateHTML = (tasks) ->
    html = []
    for task, i in tasks
      html[i] = '<li><label><input type="checkbox" id="task' + i + '" />' + task.name + '</label><a class="priority" priority="' + task.priority + '">' + task.priority + '</a></li>'
    html

  # Inserts that nicely formatted list into ul #task-list
  showTasks = (allTasks) ->
    html = generateHTML(allTasks)
    $("#task-list").html(html)

  # Grab the last task from localStorage 'undo' and add it back to localStorage 'task' using setAllTasks()
  # Then remove that entry from localStorage 'undo' 
  undoLast = ->
    redo = localStorage.getItem("undo")
    redo = JSON.parse(redo)
    allTasks = getAllTasks()
    position = redo.position
    delete redo['position']
    allTasks.splice(position, 0, redo)
    setAllTasks(allTasks)
    localStorage.removeItem("undo")
    undoUX(allTasks)

  # Update the page and stop the fadeOut timer and hide it straight away
  undoUX = (allTasks) ->
    showTasks(allTasks)
    clearTimeout(timeout)
    $("#undo").hide()

  # Runs the initialize function when the page loads
  initialize()

  # Triggers the setting of the new task when clicking the button
  $("#task-submit").click (e) ->
    e.preventDefault()
    setNewTask()

  # Click Mark all done
  $("#mark-all-done").click (e) ->
    e.preventDefault()
    if confirm "Are you sure you want to mark all tasks as done?"
      markAllDone()
    else
      return

  # If the user clicks on the undo thing
  $("#undo").click (e) ->
    undoLast()

  # When you click an li, fade it out and run markDone()
  $(document).on "click", "#task-list li label input", (e) ->
    self = $(this).closest('li')

    $(self).fadeOut 500, ->
      markDone(getId(self))

  # Click on a priority lozenge to change priority
  $(document).on "click", ".priority", (e) ->
    self = $(this)

    currentPriority = self.attr('priority')

    currentIndex = $.inArray(currentPriority, priorities)
    if currentIndex == priorities.length - 1
      currentIndex = -1
    currentPriority = priorities[currentIndex + 1]
    self.attr('priority', currentPriority)
    self.text(currentPriority)

    li = $(this).closest('li')

    updateAttr(li, 'priority', currentPriority)

    # now we need to pass the new priority through to the function that saves stuff to localstorage

