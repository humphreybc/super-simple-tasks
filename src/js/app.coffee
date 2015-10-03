SST = SST || {}

# All the goodness
initialize = ->
  Views.standardLog()
  Extension.setPopupClass()

  SST.online = Utils.checkOnline()

  SST.storage = new Storage()
  SST.remote = new Remote()

  document.onkeyup = Views.keyboardShortcuts

  window.onfocus = Views.onFocus
  window.onblur = Views.onBlur

  SST.mobile = ($(window).width() < 499)

  ListView.changeEmptyStateImage()

  Views.getInitialTasks()

  unless SST.mobile
    $('#new-task').focus()


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

      $(li).animate {
        'opacity': '0.25'
      }, 250, ->
        TaskView.completeTask(li)


$(document).on 'click', '.edit', (e) ->
  li = $(this).closest('li')
  TaskView.editTask(TaskView.getId(li))


$(document).on 'click', '.delete', (e) ->
  li = $(this).closest('li')

  $(li).slideUp 250, ->
    Task.deleteTask(li)


$(document).on 'click', '.tag', (e) ->
  e.preventDefault()

  type_attr = 'tag'

  value = $(this).attr(type_attr)

  li = $(this).closest('li')
  
  Task.cycleAttr(li, type_attr, value)


# When hovering over the drag handle, unfocus the new task input field
# This prevents people having to click twice, once to unfocus, the other to drag
$(document).on 'mouseenter', '.drag-handle', (e) ->
  $('#new-task').blur()


$(document).on 'blur', '#list-name', (e) ->
  Views.storeListName()


$(document).on 'click', '#whats-new-close', (e) ->
  $('.whats-new').slideUp()
  Views.closeWhatsNew()


$(document).on 'click', '#task-submit', (e) ->
  TaskView.addTaskTriggered()


$(document).on 'click', '#add-link', (e) ->
  Views.toggleAddLinkInput()


$(document).on 'click', '#clear-completed', (e) ->
  e.preventDefault()
  Views.clearCompletedTasks()


$(document).on 'click', '#share-modal', (e) ->
  e.preventDefault()
  SST.storage.linkDevices()
  Views.doPushState('none')
  Views.modal(this.id)


$(document).on 'click', '#share-list-modal a', (e) ->
  e.preventDefault()
  Views.modal(this.id)


$(document).on 'click', '#modal-join-button', (e) ->
  Views.setSyncCode()
  location.reload()


$(document).on 'click', '.modal-blanket', (e) ->
  e.preventDefault()
  Views.modal('none')


$(document).on 'click', '.theme', (e) ->
  e.preventDefault()
  Views.setTheme(this.id)


$(window).on 'popstate', (event) ->
  state = event.originalEvent.state
  if state
    Views.modal(state.id, true)


document.addEventListener 'deviceready', Views.setStatusBarColor, false


$(document).ready ->
  initialize()
