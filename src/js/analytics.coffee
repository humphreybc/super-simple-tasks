# Analytics events

class Analytics

  @sendPageView: ->
    url = window.location.href.split('://')

    if url[0] == 'chrome-extension'
      ga('send', 'pageview', 'chrome-extension')
    else
      ga('send', 'pageview', url[1])


  @sendTaskCount: (allTasks) ->
    SST.storage.getTasks (allTasks) ->
      ga 'send',
        'hitType': 'event'
        'eventCategory': 'Data'
        'eventAction': 'Task count'
        'eventValue': allTasks.length

      haveLinks = _.filter(allTasks, 'link')
      linkRatio = haveLinks.length / allTasks.length

      ga 'send',
        'hitType': 'event'
        'eventCategory': 'Data'
        'eventAction': 'Link ratio'
        'eventValue': linkRatio


  @sendTagClickEvent: ->
    window.clearTimeout(window.timeout)

    window.timeout = setTimeout (->
      ga 'send', 'event', 'Tag color', 'click'
    ), 1000


# Because this code is set as background code for the extension, we
# don't want the pageviews firing all the time. So instead we
# only send the pageview when the window has focus.
$(window).focus ->
  Analytics.sendPageView()

$(document).on 'blur', '#list-name', (e) ->
  ga 'send', 'event', 'Name task list', 'click'

# Click on Add link button
$(document).on 'click', '#add-link', ->
  ga 'send', 'event', 'Add link button', 'click'

# Click on Add task button
$(document).on 'click', '#task-submit', ->
  ga 'send', 'event', 'Add task button', 'click'

# Click on Clear completed in navigation
$(document).on 'click', '#clear-completed', ->
  ga 'send', 'event', 'Clear completed', 'click'

# Click on Share list icon
$(document).on 'click', '#link-devices', (e) ->
  ga 'send', 'event', 'Share list', 'click'

# Click to open as a tab
$(document).on 'click', '#expand', ->
  ga 'send', 'event', 'Open as tab', 'click'

# Click on disconnect from shared list
$(document).on 'click', '#copy', (e) ->
  ga 'send', 'event', 'Copy share URL', 'click'

# Click on disconnect from shared list
$(document).on 'click', '#disconnect-devices', (e) ->
  ga 'send', 'event', 'Disconnect shared list', 'click'

# Click on Print tasks in footer
$(document).on 'click', '#print-tasks', ->
  ga 'send', 'event', 'Print tasks', 'click'

# Reorder a task
document.querySelector('#task-list').addEventListener 'slip:reorder', (e) ->
  ga 'send', 'event', 'Reorder', 'click'

# Reorder with the drag handle
$(document).on 'click', '.drag-handle', ->
  ga 'send', 'event', 'Reorder with handle', 'click'

# Click on edit task
$(document).on 'click', '.edit', ->
  ga 'send', 'event', 'Edit task', 'click'

# Click a tag color
$(document).on 'click', '.tag', ->
  Analytics.sendTagClickEvent()

# Click a task to complete / uncomplete it
$(document).on 'mousedown', '.task > tag', ->
  ga 'send', 'event', 'Complete task', 'click'

# Click a task link
$(document).on 'click', '.task-link', ->
  ga 'send', 'event', 'Task link', 'click'

# Close What's New dialog
$(document).on 'mousedown', '#whats-new-close', ->
  ga 'send', 'event', 'Close Whats New', 'click'

