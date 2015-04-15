# Mainly user interaction with the DOM

$(document).ready ->
  console.log 'Super Simple Tasks v2.0.3  '
  console.log 'Like looking under the hood? Feel free to help make Super Simple Tasks
              better at https://github.com/humphreybc/super-simple-tasks'

  $new_task_input = $('#new-task')
  $link_input = $('#add-link-input')

  # Create a global variable to save whether the onboarding tour is running or not
  window.tourRunning = false

  # Check if we're online
  online = navigator.onLine
  if online == true
    console.log 'Connected to the internet'
  else
    console.log 'Disconnected from the internet'

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

      # Animation for the main content
      setTimeout (->
        $('#main-content').addClass('content-show')
      ), 150

      # Use a random image from Unsplash if we have an internet connection
      if online == true
        $('#empty-state-image').css('background-image', 'url("https://unsplash.it/680/440/?random")')


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

    # Only do this stuff if the input isn't blank
    unless name == ''

      $('#task-submit').removeClass('task-submit-button')
      $('#task-submit').addClass('task-submitted')

      setTimeout (->
        $('#task-submit').removeClass('task-submitted')
        $('#task-submit').addClass('task-submit-button')
      ), 1000

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

        # Get the task li
        li = $(this).closest('li')
        
        # They're not dragging, check the checkbox
        checkbox = $('input', this)

        if checkbox.prop 'checked' # Is currently checked, so unchecking
          Task.updateAttr(Views.getId(li), 'isDone', false)
        else # Isn't currently checked, so marking it complete
          Task.updateAttr(Views.getId(li), 'isDone', true)

        checkbox.prop 'checked', not checkbox.prop('checked')

        # Move on to the next onboarding tooltip if the tour is running
        nextTourBus()


  # Click on an attribute (in this case .priority)
  # Run the cycleAttr() function and pass parameter
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
    
    # Run Task.cycleAttr() and pass through
    # The task (li), the attribute type, and the current value
    Task.cycleAttr(li, type_attr, value)


  # Click 'Clear completed'
  $('#clear-completed').click (e) ->
    e.preventDefault()

    # Get the tasks
    window.storageType.get DB.db_key, (allTasks) ->
      unless allTasks.length == 0
        Task.clearCompleted()


  # Click 'Export tasks'
  $('#export-tasks').click (e) ->
    e.preventDefault()

    # Get the tasks
    window.storageType.get DB.db_key, (allTasks) ->

      # Run the code in export.coffee, passing through the tasks to export and the file name 
      Exporter(allTasks, 'super simple tasks backup')


  # When hovering over the drag handle, unfocus the new task input field
  # This prevents people having to "click twice", once to unfocus, the other to drag
  $(document).on
    mouseenter: ->
      $new_task_input.blur()

  , '.drag-handle'


  # Runs the initialize function when the page loads
  initialize()
