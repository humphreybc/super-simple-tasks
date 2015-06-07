SST = SST || {}

# All the goodness
initialize = ->
  Views.standardLog()
  Extension.setPopupClass()

  SST.online = Utils.checkOnline()

  SST.storage = new Storage()
  SST.remote = new Remote()

  SST.tourRunning = false
  SST.tour = Tour.createTour()

  document.onkeyup = Views.keyboardShortcuts

  window.onfocus = onFocus
  window.onblur = onBlur

  SST.mobile = ($(window).width() < 499)

  ListView.changeEmptyStateImage()

  Views.getInitialTasks()

  unless SST.mobile
    $('#new-task').focus()


onFocus = ->
  if SST.storage.syncEnabled and SST.online
    SST.storage.goOnline()
    console.log 'Sync connected'
    SST.remote.sync (allTasks) ->
      Views.reload(allTasks)


onBlur = ->
  if SST.storage.syncEnabled
    setTimeout (->
      SST.storage.goOffline()
      console.log 'Sync disconnected'
    ), 500


# We'll manage checking the checkbox thank you very much
$(document).on 'click', '.task > label', (e) ->
  e.preventDefault()


# Clicking on the checkbox or label to mark a task as completed
$(document).on 'mousedown', '.task > label', ->
  
  holding = false
  
  # If they haven't released the mouse after 250 milliseconds,
  # then they're probably dragging and we don't want to (un)check
  setTimeout (->
    holding = true
  ), 250
  
  $(this).one 'mouseup', ->
    
    unless holding

      li = $(this).closest('li')
      TaskView.completeTask(li)
      Tour.nextTourBus(SST.tour)


$(document).on 'click', '.edit', (e) ->

  li = $(this).closest('li')

  TaskView.editTask(TaskView.getId(li))


$(document).on 'click', '.tag', (e) ->
  e.preventDefault()

  type_attr = 'tag'

  value = $(this).attr(type_attr)

  li = $(this).closest('li')
  
  Task.cycleAttr(li, type_attr, value)

  Tour.nextTourBus(SST.tour)


# When hovering over the drag handle, unfocus the new task input field
# This prevents people having to click twice, once to unfocus, the other to drag
$(document).on 'mouseenter', '.drag-handle', (e) ->
  $('#new-task').blur()


$(document).on 'blur', '#list-name', (e) ->
  Views.storeListName()


$(document).on 'click', '#whats-new-close', (e) ->
  $('.whats-new').hide()
  Views.closeWhatsNew()


$(document).on 'click', '#task-submit', (e) ->
  TaskView.addTaskTriggered()


$(document).on 'click', '#add-link', (e) ->
  Views.toggleAddLinkInput()


$(document).on 'click', '#clear-completed', (e) ->
  e.preventDefault()
  Task.clearCompleted()


$(document).on 'click', '#link-devices', (e) ->
  e.preventDefault()
  SST.storage.linkDevices()
  Views.toggleModalDialog()


$(document).on 'click', '#disconnect-devices', (e) ->
  e.preventDefault()
  SST.storage.disconnectDevices()
  location.reload()


$(document).on 'click', '#modal-close', (e) ->
  e.preventDefault()
  Views.toggleModalDialog()


$(document).on 'click', '.modal-blanket', (e) ->
  e.preventDefault()
  Views.toggleModalDialog()


$(document).on 'click', '#export-tasks', (e) ->
  e.preventDefault()
  Task.exportTasks()


$(document).on 'click', '#copy', (e) ->
  $('#device-link-code').select()
  document.execCommand('copy')


$(document).ready ->
  initialize()
