# Mainly DOM manipulation
$(document).ready ->

  new_task_input = $('#new-task')

  # Runs functions on page load
  initialize = ->
    allTasks = Task.getAllTasks()
    Views.showTasks(allTasks)
    new_task_input.focus()

  # Triggers the setting of the new task when clicking the button
  $('#task-submit').click (e) ->
    e.preventDefault()
    name = new_task_input.val()
    Task.setNewTask(name)
    $('#new-task').val('')

  # Click Mark all done
  $('#mark-all-done').click (e) ->
    e.preventDefault()
    if confirm 'Are you sure you want to mark all tasks as done?'
      Task.markAllDone()
    else
      return

  # If the user clicks on the undo thing
  $('#undo').click (e) ->
    Task.undoLast()

  # When you click an li, fade it out and run markDone()
  $(document).on 'click', '#task-list li label input', (e) ->
    self = $(this).closest('li')

    $(self).fadeOut 500, ->
      Task.markDone(Views.getId(self))

  # Click on .priority or .duedate
  # Depending on what it is, run the changeAttr() function and pass parameter
  $(document).on 'click', '.priority, .duedate', (e) ->
    type_attr = $(e.currentTarget).attr('type')
    value = $(this).attr(type_attr)

    li = $(this).closest('li')
    
    Task.changeAttr(li, type_attr, value)

  # Runs the initialize function when the page loads
  initialize()

