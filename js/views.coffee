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

    # Show the trophy if there's nothing in allTasks
    @showEmptyState(allTasks)

    # Generate HTML
    @addHTML(allTasks)


  # Creates the task list in HTML
  @addHTML: (allTasks) ->
    task_list = $('#task-list')

    task_list.empty()

    # For each task in allTasks
    # Create the HTML markup and add it to the array
    for task, i in allTasks
      li = @createTaskHTML(task)
      task_list.append(li)


  # Create the HTML markup for a single task li and returns it
  # Takes into account whether a link is present or task is done
  @createTaskHTML: (task) ->
    li = $('<li/>', {
      'class':'task'
    })

    if task.isDone
      li.addClass('task-completed')

    label = $('<label/>', {
      'class':'left',
      'text':task.name
    })

    checkbox = $('<input/>', {
      'type':'checkbox',
      'data-id':task.id,
      'checked':task.isDone
    })

    drag = $('<span/>', {
        'class':'drag-handle right'
    })

    priority = $('<span/>', {
        'class':'priority right',
        'type':'priority',
        'priority':task.priority,
        'text':task.priority
    })

    checkbox.prependTo(label)
    label.appendTo(li)

    drag.appendTo(li)
    priority.appendTo(li)

    unless task.link == ''
      linkdiv = $('<div/>', {
        'class':'task-link'
      })

      link = $('<a/>', {
          'href':task.link,
          'target':'_blank',
          'text':task.link
      })

      link.appendTo(linkdiv)
      linkdiv.appendTo(li)

    return li


  # Show the 'cup of tea' empty state if there aren't any tasks
  # Also focus the new task field
  @showEmptyState: (allTasks) ->
    if allTasks.length == 0
      $('#all-done').addClass('show-empty-state')
      $('#new-task').focus()
    else
      $('#all-done').removeClass('show-empty-state')


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

