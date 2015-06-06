class Views
  timeout = 0

  @getInitialTasks: =>
    if SST.storage.syncEnabled and SST.online
      SST.remote.sync (allTasks) =>
        @reload(allTasks)
    else
      SST.storage.get 'everything', (everything) =>
        # Chrome extension
        if everything == null and chrome.storage
          chrome.storage.sync.get 'todo', (everything) ->
            allTasks = Migrations.updateToLocalStorage(everything)
            @reload(allTasks)
        else
          # New user with no tasks
          if everything == null
            allTasks = Task.seedDefaultTasks()
          # Upgrading to 3.0.0
          else if everything.version == undefined
            allTasks = Migrations.updateToObject(everything)
          # User on 3.0.0 and has tasks in the new storage model
          else
            allTasks = everything.tasks

          @reload(allTasks)


  @keyboardShortcuts: (e) ->
    evtobj = if window.event then event else e

    enter_key = 13
    l_key = 76
    esc_key = 27
    shift_key = 16

    if evtobj.keyCode == enter_key
      if $('#list-name').is(':focus')
        Views.storeListName()
        $('#list-name').blur()
      else
        TaskView.addTaskTriggered()
        ga 'send', 'event', 'Add task shortcut', 'shortcut'
      
    if evtobj.keyCode == esc_key
      $('#edit-task-overlay').removeClass('fade')
      ListView.clearNewTaskInputs()
      Views.toggleAddLinkInput(false)

    if (evtobj.keyCode == esc_key) and $('body').hasClass('modal-show')
      Views.toggleModalDialog()
      ga 'send', 'event', 'Modal dialog close shortcut', 'shortcut'
    
    if evtobj.altKey && evtobj.keyCode == l_key
      Views.toggleAddLinkInput()
      ga 'send', 'event', 'Add link shortcut', 'shortcut'


  @standardLog: ->
    console.log 'Super Simple Tasks v3.0.0'
    console.log 'Like looking under the hood? Feel free to help make Super Simple Tasks
                better at https://github.com/humphreybc/super-simple-tasks'


  @reload: (allTasks) ->
    ListView.showTasks(allTasks)
    @displayApp(allTasks)


  @displayApp: (allTasks) ->
    @checkOnboarding(allTasks, SST.tour)
    @checkWhatsNew()
    @animateContent()
    @setListName()


  @setListName: ->
    SST.storage.get 'name', (list_name) ->
      $('#list-name').val(list_name)


  @storeListName: ->
    list_name = $('#list-name').val()
    SST.storage.setListName list_name, () ->


  @animateContent: ->
    $('#task-list').addClass('list-show')
    $('#spinner').hide()


  @toggleModalDialog: ->
    $('body').toggleClass('modal-show')

    if $('body').hasClass('modal-show')
      @populateLinkCode()


  @populateLinkCode: ->
    host = 'supersimpletasks.com'
    $('#device-link-code').val('http://' + host + '/?share=' + SST.storage.dbKey)


  @toggleAddLinkInput: (forceOpen = null) ->
    $body = $('body')
    $new_task_input = $('#new-task')
    $link_input = $('#add-link-input')

    linkActiveClass = 'link-active'
    isOpen = $body.hasClass(linkActiveClass)

    if isOpen == forceOpen
      return

    if forceOpen == null
      shouldOpenDrawer = !isOpen
    else
      shouldOpenDrawer = forceOpen

    if shouldOpenDrawer
      $body.addClass(linkActiveClass)
      unless SST.mobile
        $link_input.focus()
    else
      $body.removeClass(linkActiveClass)
      unless SST.mobile
        $new_task_input.focus()


  @checkOnboarding: (allTasks, tour) ->
    SST.storage.get 'tour', (t) ->
      if (t < 1) and (!SST.mobile) and (allTasks.length > 0)
        SST.tour.trigger 'depart.tourbus'
      else
        SST.tour.trigger 'stop.tourbus'


  @checkWhatsNew: ->
    SST.storage.get 'version', (version) ->
      if (version < 300 || version == null) and (SST.tourRunning == false)
        $('.whats-new').show()


  @finishTour: ->
    SST.tourRunning = false
    $('.tourbus-leg').hide()

    # Get rid of the # at the end of the URL
    history.pushState('', document.title, window.location.pathname)

    SST.storage.set 'tour', 1, () ->


  @closeWhatsNew: ->
    SST.storage.set 'version', 300, () ->
