$(document).ready ->

  clickedTimers = {}
  timeout = 0

  # Runs functions on page load
  initialize = ->
    allTodos = getAllTodos()
    showTodos(allTodos)
    $("#new-todo").focus()

  # Creates a new todo object
  createToDo = (name) ->
    todo =
      isDone: false
      name: name

  # Pulls what we have in localStorage
  getAllTodos = ->
    allTodos = localStorage.getItem("todo")
    # allTodos = JSON.parse(allTodos) || []
    allTodos = JSON.parse(allTodos) || [{"isDone":false,"name":"Add a new task above"},
                                        {"isDone":false,"name":"Refresh and see your task is still here"},
                                        {"isDone":false,"name":"Click a task to complete it"},
                                        {"isDone":false,"name":"Follow <a href='http://twitter.com/humphreybc' target='_blank'>@humphreybc</a> on Twitter"}]
    allTodos

  # Gets whatever is in the input and saves it
  setNewTodo = ->
    name = $("#new-todo").val()
    unless name == ''
      newTodo = createToDo(name)
      allTodos = getAllTodos()
      allTodos.push newTodo
      setAllTodos(allTodos)

  # Updates the localStorage and runs showTodos again to update the list
  setAllTodos = (allTodos) ->
    localStorage.setItem("todo", JSON.stringify(allTodos))
    showTodos(allTodos)
    $("#new-todo").val('')
    
  # Finds the input id, strips 'todo' from it, and converts the string to an int
  getId = (li) ->
    id = $(li).find('input').attr('id').replace('todo', '')
    parseInt(id)

  # Removes the selected todo from the list and parses that to setAllTodos to update localStorage
  # Then fades in the undo option at the top of the page and starts a timer to fade it out
  # If the timer isn't interuppted by undoLast() then fade it out after 5 seconds and remove the todo item from 'undo'
  markDone = (id) ->
    allTodos = getAllTodos()
    toDelete = allTodos[id]
    toDelete['position'] = id
    localStorage.setItem("undo", JSON.stringify(toDelete))
    $("#undo").fadeIn(150)

    timeout = setTimeout(->
      $("#undo").fadeOut(250)
      localStorage.removeItem("undo")
    , 5000)

    allTodos = getAllTodos()
    allTodos.splice(id,1)
    setAllTodos(allTodos)

  # Clears localStorage
  markAllDone = ->
    setAllTodos([])

  # Grab everything from the key 'name' out of the object
  getNames = (allTodos) ->
    names = [] # create a new array for our names
    for todo in allTodos # iterate on each
      names.push todo['name'] # append the value to our new array called names
    names # return them so allTodos() can use it

  # Gives us the list formatted nicely
  generateHTML = (allTodos) ->
    names = getNames(allTodos)
    for name, i in names
      names[i] = '<li><label><input type="checkbox" id="todo' + i + '" />' + name + '</label></li>'
    names

  # Inserts that nicely formatted list into ul #todo-list
  showTodos = (allTodos) ->
    html = generateHTML(allTodos)
    $("#todo-list").html(html)

  # Grab the last todo from localStorage 'undo' and add it back to localStorage 'todo' using setAllTodos()
  # Then remove that entry from localStorage 'undo' 
  undoLast = ->
    redo = localStorage.getItem("undo")
    redo = JSON.parse(redo)
    allTodos = getAllTodos()
    position = redo.position
    delete redo['position']
    allTodos.splice(position, 0, redo)
    setAllTodos(allTodos)
    localStorage.removeItem("undo")
    undoUX(allTodos)

  # Update the page and stop the fadeOut timer and hide it straight away
  undoUX = (allTodos) ->
    showTodos(allTodos)
    clearTimeout(timeout)
    $("#undo").hide()

  # Runs the initialize function when the page loads
  initialize()

  # Triggers the setting of the new todo when clicking the button
  $("#todo-submit").click (e) ->
    e.preventDefault()
    setNewTodo()

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
  $(document).on "click", "#todo-list li", (e) ->
    e.stopPropagation()
    self = this

    $(self).fadeOut(500, ->
      markDone(getId(self))
    ) 
