# DOM manipulation

class Views

  # Variable that we can clear if the timeout has to be stopped early
  timeout = 0

  @catchSharingCode: ->
    share_code = Utils.getUrlParameter('share')
    
    unless share_code == undefined
      DB.db_key = share_code
      localStorage.setItem('sync_key', DB.db_key)
      DB.enableSync()
      DB.setSyncStatus()
      DB.createFirebase()


  @setPopupClass: ->
    if Utils.getUrlParameter('popup') == 'true'
      $('body').addClass('popup')


  @changeEmptyStateImage: (online) ->
    if online
      $('#empty-state-image').css('background-image', 'url("https://unsplash.it/680/440/?random")')


  # Makes the content fade and slide in
  @animateContent: ->
    setTimeout (->
      $('#main-content').addClass('content-show')
    ), 150


  # Show / hide the link devices modal dialog
  # Could do with some abstraction
  @toggleModalDialog: ->
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

    host = Utils.getUrlAttribute('host')

    $device_link_code.val('http://' + host + '?share=' + DB.db_key)


  # Does the little animation on the task submit button
  @displaySaveSuccess: ->
    $('#task-submit').addClass('task-submitted')

    setTimeout (->
      $('#task-submit').removeClass('task-submitted')
    ), 1000


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


  @clearNewTaskInputs: ->
    $('#new-task').val('')
    $('#add-link-input').val('')
    $('#edit-task-id').val('')


  @addTaskTriggered: ->
    name = $('#new-task').val()
    link = $('#add-link-input').val()
    id = $('#edit-task-id').val()

    unless name == ''

      if id
        Task.updateTask(name, link, id)

        $('#edit-task-overlay').css('opacity', '0')

        Views.clearNewTaskInputs()

        $('body').removeClass('link-active')

        id = parseInt(id) + 1

        task = $('#task-list li:nth-child(' + id + ')')

        task.addClass('edited-transition')
        task.addClass('edited')

        setTimeout (->
          task.removeClass('edited')
        ), 1000

        setTimeout (->
          task.removeClass('edited-transition')
        ), 2000

        return

      Task.setNewTask(name, link)
      
      Views.clearNewTaskInputs()

      Views.displaySaveSuccess()

      Tour.nextTourBus(tour)

    $('#new-task').focus()


  @addLinkTriggered: ->
    $body = $('body')
    $new_task_input = $('#new-task')
    $link_input = $('#add-link-input')

    linkActiveClass = 'link-active'
    isLinkActive = $body.hasClass(linkActiveClass)

    if isLinkActive
      $body.removeClass(linkActiveClass)
      $new_task_input.focus()
      $('#edit-task-overlay').css('height', '65px')
    else
      $body.addClass(linkActiveClass)
      $link_input.focus()
      $('#edit-task-overlay').css('height', '100px')


  # Create the HTML markup for a single task li and returns it
  # Takes into account whether a link is present or task is done
  @createTaskHTML: (allTasks) ->

    source = $('#task-template').html()
    template = Handlebars.compile(source)

    template({tasks: allTasks})


  # Populates the create task form with the task to be edited
  @editTask: (id) ->
    window.storageType.get DB.db_key, (allTasks) ->

      name = allTasks[id].name
      link = allTasks[id].link
      
      $('#edit-task-id').val(id)
      $('#new-task').val(name)

      $('#edit-task-overlay').css('height', '65px')

      $('#new-task').focus()

      unless link == ''
        $('#add-link-input').val(link)

        $('#edit-task-overlay').css('height', '100px')

        $('body').addClass('link-active')

      $('#edit-task-overlay').css('opacity', '1')


  @completeTask: (li) ->
    checkbox = li.find('input')

    is_done = not checkbox.prop 'checked'
    Task.updateAttr(@getId(li), 'isDone', is_done)

    # Manually toggle the value of the checkbox
    checkbox.prop 'checked', is_done


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
    window.storageType.get 'whats-new-2-2-0', (whatsNew) ->
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
    window.storageType.set('whats-new-2-2-0', 1)

