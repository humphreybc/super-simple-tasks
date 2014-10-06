# DOM manipulation

class Views

  # Variable that we can clear if the timeout has to be stopped early
  timeout = 0

  # Finds the input id, strips 'task' from it, and converts the string to an int
  @getId: (li) ->
    id = $(li).find('input').attr('id').replace('task', '')
    parseInt(id)

  # Creates the task list in HTML
  @generateTasksHTML: (tasks) ->
    task_list = []
    for task, i in tasks
      task_list[i] = '<li class="task"><label><input type="checkbox" id="task' + task.id + '" />' + task.name + '</label><span class="duedate" type="duedate" duedate="' + task.duedate + '">' + task.duedate + '</span>' + '<span class="priority" type="priority" priority="' + task.priority + '">' + task.priority + '</span></li>'
    task_list

  # Creates the task list in HTML
  @generateCompletedTasksHTML: (completedTasks) ->
    task_list = []
    for task, i in completedTasks
      task_list[i] = '<li class="task"><label><input type="checkbox" id="task' + task.id + '" />' + task.name + '</label></li>'
    task_list

  # If there are no tasks, shows the #all-done blank state div
  # Runs two methods to show the two lists of tasks in the DOM
  @showTasks: (allTasks) ->

    @showUnCompleted(allTasks)
    @showCompleted(allTasks)

  @showUnCompleted: (allTasks) ->

    tasks = allTasks

    # Add attribute 'id' to all objects in allTasks
    # Set id to object's current index (position in the array)
    index = 0
    while index < tasks.length
      tasks[index].id = index
      ++index

    # Remove tasks with isDone: true from the array
    i = tasks.length - 1
    while i >= 0
      if tasks[i].isDone
        tasks.splice(i, 1)
      i--

    # Show the trophy if there's nothing in tasks
    @showEmptyState(tasks)

    # Generate html
    task_list = @generateTasksHTML(tasks)

    # Puts the generated HTML into #task-list
    $('#task-list').html(task_list)

  @showCompleted: (allTasks) ->

    completedTasks = allTasks

    # Add attribute 'id' to all objects in allTasks
    # Set id to object's current index (position in the array)
    index = 0
    while index < completedTasks.length
      completedTasks[index].id = index
      ++index

    # Remove completedTasks with isDone: false from the array
    i = completedTasks.length - 1
    while i >= 0
      if completedTasks[i].isDone is false
        completedTasks.splice(i, 1)
      i--

    # Show the completed tasks section
    if completedTasks.length != 0
      $('#completed-tasks').show()

    # Only generates HTML for completedTasks with isDone:true
    task_list = @generateCompletedTasksHTML(completedTasks)

    # Puts the generated HTML into #completed-task-list
    $('#completed-task-list').html(task_list)

  @showEmptyState: (tasks) ->
    if tasks.length == 0
      $('#all-done').show()
      $('#new-task').focus()
    else
      $('#all-done').hide()

  # Fades in the undo thing
  @undoFade: ->
    $('#undo').fadeIn()

    timeout = setTimeout(->
      $('#undo').fadeOut()
      localStorage.removeItem('undo')
    , 5000)

  # When the user clicks on the undo tooltip
  # Update the page, stop the fade out timer and hide it straight away
  @undoUX: (allTasks) ->
    @showTasks(allTasks)
    clearTimeout(timeout) 
    $('#undo').fadeOut()

  # Saves a state in storage when the tour is over
  @finishTour: ->
    localStorage.setItem('sst-tour', 1)

