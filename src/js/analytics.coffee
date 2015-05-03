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

# Click a task to complete / uncomplete it
$(document).on 'mousedown', '.task > label', ->
  ga 'send', 'event', 'Complete task', 'click'

# Click a task link
$(document).on 'click', '.task-link', ->
  ga 'send', 'event', 'Task link', 'click'

# Close What's New dialog
$(document).on 'click', '#whats-new-close', ->
  ga 'send', 'event', 'Close Whats New', 'click'


# Tourbus stuff
$(document).on 'click', '#tour-bus-1', ->
  ga 'send', 'event', 'Onboarding', 'click', 'Step 1', 33

$(document).on 'click', '#tour-bus-2', ->
  ga 'send', 'event', 'Onboarding', 'click', 'Step 2', 33

$(document).on 'click', '#tour-bus-3', ->
  ga 'send', 'event', 'Onboarding', 'click', 'Step 3', 33

