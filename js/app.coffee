# Mainly user interaction with the DOM

$(document).ready ->
  console.log 'Super Simple Tasks v2.0.1'
  console.log 'Like looking under the hood? Feel free to help make Super Simple Tasks
              better at https://github.com/humphreybc/super-simple-tasks'

  $new_task_input = $('#new-task')
  $link_input = $('#add-link-input')

  # Create a global variable to save whether the onboarding tour is running or not
  window.tourRunning = false

  # Create a new tourbus
  # When the tour stops, run Views.finishTour to set a storage item
  # When each leg starts, update window.tourRunning to true or false
  tour = $('#tour').tourbus
    onStop: Views.finishTour
    onLegStart: (leg, bus) ->
      window.tourRunning = bus.running
      leg.$el.addClass('animated fadeInDown')

  # Decide which storage method we're using
  if !!window.chrome and chrome.storage
    console.log 'Using chrome.storage.sync to save'
    window.storageType = ChromeStorage
  else
    console.log 'Using localStorage to save'
    window.storageType = LocalStorage

  # Runs functions on page load
  initialize = ->

    # Get all the tasks
    window.storageType.get DB.db_key, (allTasks) ->

      # If there's nothing there, seed with sample tasks and save
      if allTasks == null
        allTasks = Arrays.default_data
        window.storageType.set(DB.db_key, allTasks)

      # Check if we need to migrate
      Migrations.run(allTasks)

      # Run Views.showTasks to show them on the page
      Views.showTasks(allTasks)

      # Focus the create task input
      $new_task_input.focus()

      # Check to see if we need to show onboarding
      Views.checkOnboarding(allTasks, tour)

      # Check to see if we need to show the what's new dialog
      Views.checkWhatsNew()


  # Triggers the next step of the onboarding tour
  nextTourBus = ->
    if window.tourRunning
      tour.trigger('next.tourbus')


  # Hide the what's new dialog when clicking on the x
  # Run Views.closeWhatsNew() which sets a storage item
  $('#whats-new-close').click (e) ->
    $('.whats-new').hide()
    Views.closeWhatsNew()


  # Triggers the setting of the new task when clicking the button
  addTaskTriggered = () ->

    # Move on to the next onboarding tooltip if the tour is running
    nextTourBus()

    # Get the name from the input value
    name = $new_task_input.val()

    # Get the link if there is one
    link = $link_input.val()

    # Pass the name through to Task.setNewTask()
    Task.setNewTask(name, link)
    
    # Clear the input and re-focus it
    $new_task_input.val('')
    $link_input.val('')

    $new_task_input.focus()


  # Clicking add link - needs refactoring probably
  addLinkTriggered = () ->

    if $('#add-link').hasClass('link-active')
      $('#add-link').removeClass('link-active')
      $('#add-link-input-wrapper').css('opacity', '0')
      setTimeout (->
        $('#task-list').css('margin-top', '-40px')
      ), 150
      $new_task_input.focus()
    else
      $('#add-link').addClass('link-active')

      $('#task-list').css('margin-top', '0px')

      setTimeout (->
        $('#add-link-input-wrapper').css('opacity', '1')
      ), 150

      $link_input.focus()


  # Clicking the task submit button
  $('#task-submit').click addTaskTriggered


  # Clicking the add link button
  $('#add-link').click addLinkTriggered


  # Keyboard shortcuts
  KeyPress = (e) ->
    evtobj = if window.event then event else e

    if evtobj.keyCode == 13
      addTaskTriggered()
    if evtobj.ctrlKey && evtobj.keyCode == 76
      addLinkTriggered()

  document.onkeydown = KeyPress


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
      checkbox = undefined
      
      unless holding
        
        # They're not dragging, check the checkbox
        checkbox = $('input', this)
        checkbox.prop 'checked', not checkbox.prop('checked')

        # Move on to the next onboarding tooltip if the tour is running
        nextTourBus()

        # Get the task li
        li = $(this).closest('li')
        
        # Slide it up and hide it
        # Use Views.getId(li) to get the task id
        # Then pass it to Task.markDone() to get checked off
        li.slideToggle ->
          Task.markDone(Views.getId(li))


  # If the user clicks on the undo toast notification, run Task.undoLast()
  $('#undo').click (e) ->
    Task.undoLast()


  # Click on an attribute (in this case .priority)
  # Run the changeAttr() function and pass parameter
  $(document).on 'click', '.priority', (e) ->
    e.preventDefault()

    # Move on to the next onboarding tooltip if the tour is running
    nextTourBus()

    # Get the type of attribute (at the moment there's only priority)
    type_attr = $(e.currentTarget).attr('type')

    # Get the current value of that attribute
    value = $(this).attr(type_attr)

    # Find the actual task it is attached to
    li = $(this).closest('li')
    
    # Run Task.changeAttr() and pass through
    # The task (li), the attribute type, and the current value
    Task.changeAttr(li, type_attr, value)


  # Click 'Mark all done'
  $('#mark-all-done').click (e) ->
    e.preventDefault()

    # Get the tasks
    window.storageType.get DB.db_key, (allTasks) ->

      # If there are no tasks, show a message, otherwise show a confirm
      # dialog and then run Task.markAllDone() which clears all tasks in storage
      if allTasks.length == 0
        confirm 'No tasks to mark done!'
      else
        if confirm 'Are you sure you want to mark all tasks as done?'
          Task.markAllDone()


  # Click 'Export tasks'
  $('#export-tasks').click (e) ->
    e.preventDefault()

    # Get the tasks
    window.storageType.get DB.db_key, (allTasks) ->

      # Run the code in export.coffee, passing through the tasks to export and the file name 
      Exporter(allTasks, 'super simple tasks backup')


  # When hovering over a task, unfocus the new task input field
  $(document).on
    mouseenter: ->
      $new_task_input.blur()

  , '.task'


  # Runs the initialize function when the page loads
  initialize()
