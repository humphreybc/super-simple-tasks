# Mainly user interaction with the DOM

$(document).ready ->
  console.log 'Super Simple Tasks v1.4.4'
  console.log 'Like looking under the hood? Feel free to help make this site
              better at https://github.com/humphreybc/super-simple-tasks'

  $new_task_input = $('#new-task')
  tourRunning = false

  # Create a new tourbus
  # When the tour stops, run Views.finishTour to set a localStorage item
  # When each leg starts, update tourRunning to true or false
  tour = $('#tour').tourbus
    onStop: Views.finishTour
    onLegStart: (leg, bus) ->
      tourRunning = bus.running
      leg.$el.addClass('animated fadeInDown')


  # Runs functions on page load
  initialize = ->
    # Get all the tasks from Task.getAllTasks()
    allTasks = Task.getAllTasks()

    # Run Views.showTasks to show them on the page
    Views.showTasks(allTasks)

    # Focus the create task input
    $new_task_input.focus()

    # Start the tour if it hasn't run before and the window is wider than 600px
    if (localStorage.getItem('sst-tour') == null) and ($(window).width() > 600) and (allTasks.length > 0)
      tour.trigger 'depart.tourbus'

    # Show the what's new dialog if the user has seen the tour, hasn't seen the dialog
    if (localStorage.getItem('whats-new') == null) and (tourRunning == false)
      $('.whats-new').show()


  # Triggers the next step of the onboarding tour
  nextTourBus = ->
    if tourRunning
      tour.trigger('next.tourbus')


  # Hide the what's new dialog when clicking on the x
  # Run Views.closeWhatsNew() which sets a localStorage item
  $('#whats-new-close').click (e) ->
    $('.whats-new').hide()
    Views.closeWhatsNew()


  # Triggers the setting of the new task when clicking the button
  $('#task-submit').click (e) ->
    e.preventDefault()

    # Move on to the next onboarding tooltip if the tour is running
    nextTourBus()

    # Get the name from the input value
    name = $new_task_input.val()

    # Pass the name through to Task.setNewTask()
    Task.setNewTask(name)
    
    # Clear the input and re-focus it
    $new_task_input.val('')
    $new_task_input.focus()


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
    allTasks = Task.getAllTasks()

    # If there are no tasks, show a message, otherwise show a confirm
    # dialog and then run Task.markAllDone() which clears localStorage
    if allTasks.length == 0
      confirm 'No tasks to mark done!'
    else
      if confirm 'Are you sure you want to mark all tasks as done?'
        Task.markAllDone()


  # Click 'Export tasks'
  $('#export-tasks').click (e) ->
    e.preventDefault()

    # Get the tasks
    allTasks = Task.getAllTasks()

    # Run the code in export.coffee, passing through the tasks to export and the file name 
    Exporter(allTasks, 'super simple tasks backup')


  # When hovering over a task, unfocus the new task input field
  $(document).on
    mouseenter: ->
      $new_task_input.blur()

  , '.task'


  # Runs the initialize function when the page loads
  initialize()
