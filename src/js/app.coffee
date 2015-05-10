# User interaction with the DOM

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

    # Views.checkOnboarding(allTasks, tour)

    # Views.checkWhatsNew()

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
  console.log 'Super Simple Tasks v2.1.2'
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


# Creates a new task
addTaskTriggered = () ->
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


keyboardShortcuts = (e) ->
  evtobj = if window.event then event else e

  enterKey = 13
  lKey = 76

  if evtobj.keyCode == enterKey
    addTaskTriggered()
    ga 'send', 'event', 'Add task shortcut', 'shortcut'

  if evtobj.ctrlKey && evtobj.keyCode == lKey
    addLinkTriggered()
    ga 'send', 'event', 'Add link shortcut', 'shortcut'


completeTask = (li) ->
  checkbox = li.find('input')

  isDone = not checkbox.prop 'checked'
  Task.updateAttr(Views.getId(li), 'isDone', isDone)

  # Manually toggle the value of the checkbox
  checkbox.prop 'checked', isDone


enableSync = ->
  localStorage.setItem('sync_enabled', true)


toggleModalDialog = ->
  $blanket = $('.modal-blanket')
  $modal = $('#link-devices-modal')
  $device_link_code = $('#device-link-code')

  $blanket.show()

  setTimeout (->
    $blanket.toggleClass('fade')
    $modal.toggleClass('modal-show')
  ), 250

  setTimeout (->
    if $modal.hasClass('modal-show')
      $device_link_code.select()
    else
      $blanket.hide()
  ), 500

  $device_link_code.val('http://dev.supersimpletasks.com?share=' + DB.db_key)


disconnectDevices = ->
  localStorage.removeItem('sync_enabled')
  localStorage.removeItem('sync_key')
  location.reload()


linkDevices = ->

  enableSync()

  DB.checkStorageMethod()

  DB.saveSyncKey()

  toggleModalDialog()

  initialize()


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


# Click on priority
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
  linkDevices()

$(document).on 'click', '#disconnect-devices', (e) ->
  e.preventDefault()
  disconnectDevices()

$(document).on 'click', '#modal-close', (e) ->
  e.preventDefault()
  toggleModalDialog()

$(document).on 'click', '#export-tasks', (e) ->
  e.preventDefault()
  Task.exportTasks()


$(document).ready ->

  setPopupClass()

  catchSharingCode()

  standardLog()

  DB.checkStorageMethod()

  DB.saveSyncKey()

  window.tourRunning = false

  document.onkeydown = keyboardShortcuts

  tour = createTour() # This is badwrong

  initialize()

  setTimeout (->

    Utils.checkOnline()

    changeEmptyStateImage(online)

  ), 100
