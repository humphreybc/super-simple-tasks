# DOM manipulation

class Views

  # Variable that we can clear if the timeout has to be stopped early
  timeout = 0

  # Finds the input id, strips 'task' from it, and converts the string to an int
  @getId: (li) ->
    id = $(li).find('input').attr('id').replace('task', '')
    parseInt(id)

  # Creates the task list in HTML
  @generateHTML: (allTasks) ->
    task_list = []
    for task, i in allTasks
      task_list[i] = '<li class="task"><label><input type="checkbox" id="task' + i + '" />' + task.name + '</label>' + '<span class="right drag-handle"></span><span class="priority right" type="priority" priority="' + task.priority + '">' + task.priority + '</span></li>'
    task_list

  # If there are no tasks, shows the #all-done blank state div
  # Runs two methods to show the two lists of tasks in the DOM
  @showTasks: (allTasks) ->

    # Add attribute 'id' to all objects in allTasks
    # Set id to object's current index (position in the array)
    index = 0
    while index < allTasks.length
      allTasks[index].id = index
      ++index

    # Remove allTasks with isDone: true from the array
    i = allTasks.length - 1
    while i >= 0
      if allTasks[i].isDone
        allTasks.splice(i, 1)
      i--

    # Show the trophy if there's nothing in allTasks
    @showEmptyState(allTasks)

    # Generate html
    task_list = @generateHTML(allTasks)

    # Puts the generated HTML into #task-list
    $('#task-list').html(task_list)

  @showEmptyState: (allTasks) ->
    if allTasks.length == 0
      $('#all-done').show()
      $('#new-task').focus()

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

  # Saves a state in storage when the user has closed the What's new dialog
  @closeWhatsNew: ->
    localStorage.setItem('whats-new', 1)

