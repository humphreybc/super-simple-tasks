# Catch user interaction

$new_task_input = $('#new-task')
$link_input = $('#add-link-input')
$body = $('body')
online = null
tour = null


# All the goodness
initialize = ->

  window.storageType.get DB.db_key, (allTasks) ->

    allTasks = Task.handleNoTasks(allTasks)

    Migrations.run(allTasks)

    Views.showTasks(allTasks)

    Views.checkOnboarding(allTasks, tour)

    Views.checkWhatsNew()

  Views.animateContent()

  $new_task_input.focus()


# Send an event with the task count
sendTaskCount = (allTasks) ->
  window.storageType.get DB.db_key, (allTasks) ->
    ga 'send',
      'hitType': 'event'
      'eventCategory': 'Data'
      'eventAction': 'Task count'
      'eventValue': allTasks.length


# Write some standard stuff to the console
standardLog = ->
  console.log 'Super Simple Tasks v3.0'
  console.log 'Like looking under the hood? Feel free to help make Super Simple Tasks
              better at https://github.com/humphreybc/super-simple-tasks'


setPopupClass = ->
  if Utils.getUrlParameter('popup') == 'true'
    $body.addClass('popup')


catchSharingCode = ->
  share_code = Utils.getUrlParameter('share')
  
  unless share_code == undefined
    DB.db_key = share_code
    localStorage.setItem('sync_key', DB.db_key)
    DB.enableSync()
    DB.setSyncStatus()
    DB.createFirebase()


changeEmptyStateImage = (online) ->
  if online
    $('#empty-state-image').css('background-image', 'url("https://unsplash.it/680/440/?random")')


createTour = ->
  $('#tour').tourbus
    onStop: Views.finishTour
    onLegStart: (leg, bus) ->
      window.tourRunning = bus.running
      leg.$el.addClass('animated fadeInDown')


nextTourBus = (tour) ->
  if window.tourRunning
    tour.trigger('next.tourbus')


addLinkTriggered = ->
  linkActiveClass = 'link-active'
  isLinkActive = $body.hasClass(linkActiveClass)

  if isLinkActive
    $body.removeClass(linkActiveClass)
    $new_task_input.focus()
  else
    $body.addClass(linkActiveClass)
    $link_input.focus()


addTaskTriggered = ->
  nextTourBus(tour)

  name = $new_task_input.val()

  unless name == ''

    link = $link_input.val()

    Task.setNewTask(name, link)
    
    $new_task_input.val('')
    $link_input.val('')

    Views.displaySaveSuccess()

    sendTaskCount()

  $new_task_input.focus()


completeTask = (li) ->
  checkbox = li.find('input')

  is_done = not checkbox.prop 'checked'
  Task.updateAttr(Views.getId(li), 'isDone', is_done)

  # Manually toggle the value of the checkbox
  checkbox.prop 'checked', is_done


keyboardShortcuts = (e) ->
  evtobj = if window.event then event else e

  enter_key = 13
  l_key = 76
  esc_key = 27

  if evtobj.keyCode == enter_key
    addTaskTriggered()
    ga 'send', 'event', 'Add task shortcut', 'shortcut'

  if (evtobj.keyCode == esc_key) and ($('#link-devices-modal').hasClass('modal-show'))
    Views.toggleModalDialog()
    ga 'send', 'event', 'Modal dialog close shortcut', 'shortcut'

  if evtobj.ctrl_key && evtobj.keyCode == lKey
    addLinkTriggered()
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
      completeTask(li)
      nextTourBus(tour)


$(document).on 'click', '.priority', (e) ->
  e.preventDefault()

  type_attr = 'priority'

  value = $(this).attr(type_attr)

  li = $(this).closest('li')
  
  Task.cycleAttr(li, type_attr, value)

  nextTourBus(tour)


# When hovering over the drag handle, unfocus the new task input field
# This prevents people having to click twice, once to unfocus, the other to drag
$(document).on 'mouseenter', '.drag-handle', (e) ->
  $new_task_input.blur()


$(document).on 'click', '#whats-new-close', (e) ->
  $('.whats-new').hide()
  Views.closeWhatsNew()


$(document).on 'click', '#task-submit', addTaskTriggered


$(document).on 'click', '#add-link', addLinkTriggered


$(document).on 'click', '#clear-completed', (e) ->
  e.preventDefault()
  Task.clearCompleted()


$(document).on 'click', '#link-devices', (e) ->
  e.preventDefault()
  DB.linkDevices()


$(document).on 'click', '#disconnect-devices', (e) ->
  e.preventDefault()
  DB.disconnectDevices()
  location.reload()


$(document).on 'click', '#modal-close', (e) ->
  e.preventDefault()
  Views.toggleModalDialog()


$(document).on 'click', '#export-tasks', (e) ->
  e.preventDefault()
  Task.exportTasks()


$(document).ready ->

  setPopupClass()

  catchSharingCode()

  standardLog()

  DB.setSyncStatus()

  DB.createFirebase()

  DB.checkStorageMethod()

  DB.setSyncKey()

  window.tourRunning = false

  document.onkeyup = keyboardShortcuts

  tour = createTour() # This is badwrong

  initialize()

  setTimeout (->

    Utils.checkOnline()

    changeEmptyStateImage(online)

  ), 100
