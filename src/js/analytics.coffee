# Analytics events

$(document).ready ->

  # Focus new task input
  $('#new-task').on 'click', (e) ->
    ga 'send', 'event', 'new-task-focused', 'click'

  # Click on Add link button
  $('#add-link').on 'click', (e) ->
    ga 'send', 'event', 'add-link', 'click'

  # Click on Add task button
  $('#task-submit').on 'click', (e) ->
    ga 'send', 'event', 'add-task', 'click'

  # Click on Clear completed in navigation
  $('#clear-completed').on 'click', (e) ->
    ga 'send', 'event', 'clear-completed', 'click'

  # Click on Export tasks in footer
  $('#export-tasks').on 'click', (e) ->
    ga 'send', 'event', 'clear-completed', 'click'

# Reorder a task
document.querySelector('#task-list').addEventListener 'slip:reorder', (e) ->
  ga 'send', 'event', 'reorder', 'click'

# Reorder with the drag handle
$(document).on 'click', '.drag-handle', ->
  ga 'send', 'event', 'reorder-handle', 'click'

# Click a priority lozenge
$(document).on 'click', '.priority', ->
  ga 'send', 'event', 'priority', 'click'


