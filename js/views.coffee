# DOM manipulation

class Views

  # Variable that we can clear if the timeout has to be stopped early
  timeout = 0


  # Useful function that takes a given task li and returns its id
  # Finds the input id, strips 'task' from it, and converts the string to an int
  # Destined to be replaced by the attribute / property 'id' on each object in allTasks
  @getId: (li) ->
    id = $(li).find('input').data('id')
    parseInt(id)


  # If there are no tasks, shows the #all-done blank state div
  # Runs two methods to show the two lists of tasks in the DOM
  @showTasks: (allTasks) ->

    if allTasks == undefined
      allTasks = []

    # Update task IDs
    Task.updateTaskId(allTasks)

    # Remove tasks that have the attribute isDone: true
    Task.removeDoneTasks(allTasks)

    # Show the trophy if there's nothing in allTasks
    @showEmptyState(allTasks)

    # Generate HTML
    task_list = @generateHTML(allTasks)

    # Puts the generated HTML into #task-list
    $('#task-list').html(task_list)


  # Creates the task list in HTML
  @generateHTML: (allTasks) ->

    # Creates an empty array
    task_list = []

    # For each task in allTasks
    # Create the HTML markup and add it to the array
    # Yes I am aware how unbelievably hacky and terrible this is but yolo it's the weekend
    for task, i in allTasks
      if task.link != ''
        task_list[i] = '<li class="task"><label class="left"><input type="checkbox" data-id="' + task.id + '" />' + task.name + '</label>' + '<span class="right drag-handle"></span><span class="priority right" type="priority" priority="' + task.priority + '">' + task.priority + '</span><div class="task-link"><a href="' + task.link + '" target="_blank">' + task.link + '</a></div></li>'
      else
        task_list[i] = '<li class="task"><label class="left"><input type="checkbox" data-id="' + task.id + '" />' + task.name + '</label>' + '<span class="right drag-handle"></span><span class="priority right" type="priority" priority="' + task.priority + '">' + task.priority + '</span></li>'

    # Return the now full task list
    task_list


  # Show the 'cup of tea' empty state if there aren't any tasks
  # Also focus the new task field
  @showEmptyState: (allTasks) ->

    if allTasks.length == 0
      $('#all-done').show()
      $('#new-task').focus()
    else
      $('#all-done').hide()


  # Fades in the undo toast notification
  @undoFade: ->
    $('#undo').fadeIn()

    # Sets a 5 second timeout, after which time it will fade out and remove the item from storage
    timeout = setTimeout(->
      $('#undo').fadeOut()
      window.storageType.remove('undo')
    , 5000)


  # When the user clicks on the undo tooltip
  @undoUX: ->

    # Update the page, stop the fade out timer and hide it straight away
    clearTimeout(timeout) 
    $('#undo').fadeOut()


  # Start the tour if it hasn't run before and the window is wider than 600px
  @checkOnboarding: (allTasks, tour) ->
    window.storageType.get 'sst-tour', (sstTour) ->
      if (sstTour == null) and ($(window).width() > 600) and (allTasks.length > 0)
        tour.trigger 'depart.tourbus'


  # Show the what's new dialog if the user has seen the tour, hasn't seen the dialog
  @checkWhatsNew: ->
    window.storageType.get 'whats-new-2-0-1', (whatsNew) ->
      if (whatsNew == null) and (window.tourRunning == false)
        $('.whats-new').show()


  # Saves a state in storage when the tour is over
  @finishTour: ->

    # Set this guy to false
    window.tourRunning = false

    # Set the onboarding tooltips to display:none
    $('.tourbus-leg').hide()

    # Get rid of the # at the end of the URL
    history.pushState('', document.title, window.location.pathname);
    
    window.storageType.set('sst-tour', 1)


  # Saves a state in storage when the user has closed the What's new dialog
  @closeWhatsNew: ->
    window.storageType.set('whats-new-2-0-1', 1)

