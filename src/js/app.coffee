online = null
tour = null
mobile = null

SST = SST || {}

# All the goodness
initialize = ->

  SST.storage.get 'everything', (everything) ->

    allTasks = Task.handleNoData(everything)

    Migrations.run(allTasks)

    ListView.showTasks(allTasks)

    Views.checkOnboarding(allTasks, tour)

    Views.checkWhatsNew()

  Views.animateContent()

  Views.setListName()

  unless mobile
    $('#new-task').focus()


standardLog = ->
  console.log 'Super Simple Tasks v2.2.2'
  console.log 'Like looking under the hood? Feel free to help make Super Simple Tasks
              better at https://github.com/humphreybc/super-simple-tasks'


keyboardShortcuts = (e) ->
  evtobj = if window.event then event else e

  enter_key = 13
  l_key = 76
  esc_key = 27
  shift_key = 16

  if evtobj.keyCode == enter_key
    if $('#list-name').is(':focus')
      Views.storeListName()
      $('#list-name').blur()
    else
      TaskView.addTaskTriggered()
      ga 'send', 'event', 'Add task shortcut', 'shortcut'
    
  if evtobj.keyCode == esc_key
    $('#edit-task-overlay').removeClass('fade')
    ListView.clearNewTaskInputs()
    Views.toggleAddLinkInput(false)

  if (evtobj.keyCode == esc_key) and ($('#link-devices-modal').hasClass('modal-show'))
    Views.toggleModalDialog()
    ga 'send', 'event', 'Modal dialog close shortcut', 'shortcut'
  
  if evtobj.altKey && evtobj.keyCode == l_key
    Views.toggleAddLinkInput()
    ga 'send', 'event', 'Add link shortcut', 'shortcut'


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
      Tour.nextTourBus(tour)


# Click on edit
$(document).on 'click', '.edit', (e) ->

  li = $(this).closest('li')

  TaskView.editTask(TaskView.getId(li))


# Click on tag color
$(document).on 'click', '.tag', (e) ->
  e.preventDefault()

  type_attr = 'tag'

  value = $(this).attr(type_attr)

  li = $(this).closest('li')
  
  Task.cycleAttr(li, type_attr, value)

  Tour.nextTourBus(tour)


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


$(document).on 'click', '#disconnect-devices', (e) ->
  e.preventDefault()
  SST.storage.disconnectDevices()
  location.reload()


$(document).on 'click', '#modal-close', (e) ->
  e.preventDefault()
  Views.toggleModalDialog()


$(document).on 'click', '#export-tasks', (e) ->
  e.preventDefault()
  Task.exportTasks()


$(document).on 'click', '#sync-get', (e) ->
  e.preventDefault()
  RemoteSync.get () ->


$(document).on 'click', '#sync-set', (e) ->
  e.preventDefault()
  RemoteSync.set()


$(document).ready ->

  Extension.setPopupClass()

  SST.storage = new Storage()

  standardLog()

  window.tourRunning = false

  document.onkeyup = keyboardShortcuts

  tour = Tour.createTour()

  mobile = ($(window).width() < 499)

  document.addEventListener 'touchstart', (->
  ), true

  initialize()

  setTimeout (->

    online = Utils.checkOnline()

    ListView.changeEmptyStateImage(online)

  ), 100
