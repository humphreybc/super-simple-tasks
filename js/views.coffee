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
      task_list[i] = '<li><label><input type="checkbox" id="task' + i + '" />' + task.name + '</label><a class="duedate" type="duedate" duedate="' + task.duedate + '">' + task.duedate + '</a>' + '<a class="priority" type="priority" priority="' + task.priority + '">' + task.priority + '</a></li>'
    task_list

  # Inserts the task list into ul #task-list
  # If there are no tasks, shows the #all-done blank state div
  @showTasks: (allTasks) ->
    task_list = @generateHTML(allTasks)
    $('#task-list').html(task_list)

    if allTasks.length == 0
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
    , 5000000)

  # When the user click on the undo tooltip
  # Update the page, stop the fade out timer and hide it straight away
  @undoUX: (allTasks) ->
    @showTasks(allTasks)
    clearTimeout(timeout)
    $('#undo').fadeOut()

  # Saves a state in storage when the tour is over
  @finishTour: ->
    localStorage.setItem('sst-tour', 1)

