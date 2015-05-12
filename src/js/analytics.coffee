# Analytics events

sendPageView = ->
  url = window.location.href.split('://')

  if url[0] == 'chrome-extension'
    ga('send', 'pageview', 'chrome-extension')
  else
    ga('send', 'pageview', url[1])

# Because this code is set as background code for the extension, we
# don't want the pageviews firing all the time. So instead we
# only send the pageview when the new task input has focus.
# The new task input is focused by default when the page loads.
$(window).focus ->
  sendPageView()

# Click on Add link button
$(document).on 'click', '#add-link', ->
  ga 'send', 'event', 'Add link button', 'click'

# Click on Add task button
$(document).on 'click', '#task-submit', ->
  ga 'send', 'event', 'Add task button', 'click'

# Click on Clear completed in navigation
$(document).on 'click', '#clear-completed', ->
  ga 'send', 'event', 'Clear completed', 'click'

$(document).on 'click', '#link-devices', (e) ->
  ga 'send', 'event', 'Link devices', 'click'

# Click on Export tasks in footer
$(document).on 'click', '#export-tasks', ->
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
$(document).on 'mousedown', '#whats-new-close', ->
  ga 'send', 'event', 'Close Whats New', 'click'

# Tourbus stuff
$(document).on 'mousedown', '#tour-bus-1', ->
  ga 'send', 'event', 'Onboarding', 'click', 'Step 1', 33

$(document).on 'mousedown', '#tour-bus-2', ->
  ga 'send', 'event', 'Onboarding', 'click', 'Step 2', 66

$(document).on 'mousedown', '#tour-bus-3', ->
  ga 'send', 'event', 'Onboarding', 'click', 'Step 3', 100

