# DOM manipulation

class Views

  # Variable that we can clear if the timeout has to be stopped early
  timeout = 0


  # Useful function that takes a given task li and returns its id
  # Finds the input id, strips 'task' from it, and converts the string to an int
  # Destined to be replaced by the attribute / property 'id' on each object in allTasks
  @getId: (li) ->
    id = $(li).find('input').attr('id').replace('task', '')
    parseInt(id)


  # If there are no tasks, shows the #all-done blank state div
  # Runs two methods to show the two lists of tasks in the DOM
  @showTasks: (allTasks) ->

    # Update task IDs
    Task.updateTaskId(allTasks)

    # Remove tasks that have the attribute isDone: true
    Task.removeDoneTasks(allTasks)

    # Show the trophy if there's nothing in allTasks
    @showEmptyState(allTasks)

    # Generate HTML
    task_list = @generateHTML(allTasks)

    # Puts the generated HTML into #task-list
    $('#task-list').html(task_list)


  # Creates the task list in HTML
  @generateHTML: (allTasks) ->

    # Creates an empty array
    task_list = []

    # For each task in allTasks
    # Create the HTML markup and add it to the array
    for task, i in allTasks
      task_list[i] = '<li class="task"><label><input type="checkbox" id="task' + i + '" />' + task.name + '</label>' + '<span class="right drag-handle"></span><span class="priority right" type="priority" priority="' + task.priority + '">' + task.priority + '</span></li>'
    
    # Return the now full task list
    task_list


  # Show the 'cup of tea' empty state if there aren't any tasks
  # Also focus the new task field
  @showEmptyState: (allTasks) ->
    if allTasks.length == 0
      $('#all-done').show()
      $('#new-task').focus()
    else
      $('#all-done').hide()


  # Fades in the undo toast notification
  @undoFade: ->
    $('#undo').fadeIn()

    # Sets a 5 second timeout, after which time it will fade out and remove the item from localStorage
    timeout = setTimeout(->
      $('#undo').fadeOut()
      localStorage.removeItem('undo')
    , 5000)


  # When the user clicks on the undo tooltip
  @undoUX: ->

    # Update the page, stop the fade out timer and hide it straight away
    clearTimeout(timeout) 
    $('#undo').fadeOut()


  # Saves a state in storage when the tour is over
  @finishTour: ->
    localStorage.setItem('sst-tour', 1)


  # Saves a state in storage when the user has closed the What's new dialog
  @closeWhatsNew: ->
    localStorage.setItem('whats-new', 1)

