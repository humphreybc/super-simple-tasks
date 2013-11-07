# DOM manipulation

class Views

  timeout = 0

  # Finds the input id, strips 'task' from it, and converts the string to an int
  @getId: (li) ->
    id = $(li).find('input').attr('id').replace('task', '')
    parseInt(id)

  # Gives us the list formatted nicely
  @generateHTML: (tasks) ->
    html = []
    for task, i in tasks
      html[i] = '<li><label><input type="checkbox" id="task' + i + '" />' + task.name + '</label><a class="duedate" type="duedate" duedate="' + task.duedate + '">' + task.duedate + '</a>' + '<a class="priority" type="priority" priority="' + task.priority + '">' + task.priority + '</a></li>'
    html

  # Inserts that nicely formatted list into ul #task-list
  @showTasks: (allTasks) ->
    html = @generateHTML(allTasks)
    $('#task-list').html(html)

  @undoFade: ->
    $('#undo').fadeIn(150)

    timeout = setTimeout(->
      $('#undo').fadeOut(250)
      localStorage.removeItem('undo')
    , 5000)

  # Update the page and stop the fadeOut timer and hide it straight away
  @undoUX: (allTasks) ->
    @showTasks(allTasks)
    clearTimeout(timeout)
    $('#undo').hide()

    