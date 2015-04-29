# Analytics events

ga('send', 'pageview', '/index.html')

# Basic click events
$(document).ready ->

  # Focus new task input
  $('#new-task').on 'click', (e) ->
    ga 'send', 'event', 'New task focused', 'click'

  # Click on Add link button
  $('#add-link').on 'click', (e) ->
    ga 'send', 'event', 'Add link button', 'click'

  # Click on Add task button
  $('#task-submit').on 'click', (e) ->
    ga 'send', 'event', 'Add task button', 'click'

  # Click on Clear completed in navigation
  $('#clear-completed').on 'click', (e) ->
    ga 'send', 'event', 'Clear completed', 'click'

  # Click on Export tasks in footer
  $('#export-tasks').on 'click', (e) ->
    ga 'send', 'event', 'Export tasks', 'click'


# Reorder a task
document.querySelector('#task-list').addEventListener 'slip:reorder', (e) ->
  ga 'send', 'event', 'Reorder', 'click'

# Reorder with the drag handle
$(document).on 'click', '.drag-handle', ->
  ga 'send', 'event', 'Reorder with handle', 'click'

# Click a priority lozenge
$(document).on 'click', '.priority', ->
  ga 'send', 'event', 'Priority', 'click'


# Keyboard shortcuts
KeyPress = (e) ->
  evtobj = if window.event then event else e

  if evtobj.keyCode == 13
    ga 'send', 'event', 'Add task shortcut', 'click'
  if evtobj.ctrlKey && evtobj.keyCode == 76
    ga 'send', 'event', 'Add link shortcut', 'click'

document.onkeydown = KeyPress
