# DOM manipulation

class Views

  # Variable that we can clear if the timeout has to be stopped early
  timeout = 0


  # Takes a task li and returns its id with jQuery
  @getId: (li) ->
    id = $(li).parent().children().index(li)


  # If there are no tasks, shows the #all-done blank state div
  # Runs two methods to show the two lists of tasks in the DOM
  @showTasks: (allTasks) ->
    if allTasks == undefined
      allTasks = []

    # Show the trophy if there's nothing in allTasks
    @showEmptyState(allTasks)

    # Generate HTML
    @addHTML(allTasks)

    # Set the badge action for the extension
    Extension.setBrowserActionBadge(allTasks)


  # Creates the task list in HTML
  @addHTML: (allTasks) ->
    task_list = $('#task-list')

    tasks = @createTaskHTML(allTasks)

    task_list.html(tasks)


  # Create the HTML markup for a single task li and returns it
  # Takes into account whether a link is present or task is done
  @createTaskHTML: (allTasks) ->

    source = $('#task-template').html()
    template = Handlebars.compile(source)

    template({tasks: allTasks})


  # Show the empty state if there aren't any tasks
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
      if (sstTour == null) and ($(window).width() > 499) and (allTasks.length > 0)
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
    history.pushState('', document.title, window.location.pathname)
    
    window.storageType.set('sst-tour', 1)


  # Saves a state in storage when the user has closed the What's new dialog
  @closeWhatsNew: ->
    window.storageType.set('whats-new-2-0-1', 1)

