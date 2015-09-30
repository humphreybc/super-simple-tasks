class Views
  timeout = 0

  
  @onFocus: =>
    if SST.storage.syncEnabled and SST.online
      SST.storage.goOnline()
      console.log 'Sync connected'
      SST.remote.sync (allTasks) =>
        @reload(allTasks)


  @onBlur: ->
    if SST.storage.syncEnabled
      setTimeout (->
        SST.storage.goOffline()
        console.log 'Sync disconnected'
      ), 500


  @getInitialTasks: =>
    if SST.storage.syncEnabled and SST.online
      SST.remote.sync (allTasks) =>
        @reload(allTasks)
        @displayApp(allTasks)
    else
      SST.storage.get 'everything', (everything) =>
        # Chrome extension
        if everything == null and window.chrome and chrome.storage
          chrome.storage.sync.get 'todo', (everything) =>
            allTasks = Migrations.updateToLocalStorage(everything)
            @reload(allTasks)
            @displayApp(allTasks)
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
          @displayApp(allTasks)


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
    console.log 'Super Simple Tasks v3.0.8'
    console.log 'Like looking under the hood? Feel free to help make Super Simple Tasks
                better at https://github.com/humphreybc/super-simple-tasks'


  @reload: (allTasks) ->
    ListView.showTasks(allTasks)


  @displayApp: (allTasks) ->
    @getTheme()
    @checkWhatsNew(allTasks)
    @animateContent()
    @setListName()


  @setListName: ->
    SST.storage.get 'name', (list_name) ->
      $('#list-name').val(list_name)


  @storeListName: ->
    list_name = $('#list-name').val()
    SST.storage.setListName list_name, () ->


  @animateContent: ->
    $('#spinner').addClass('spinner-hidden')
    setTimeout (->
      $('#task-list').addClass('list-show')
    ), 150


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


  @checkWhatsNew: (allTasks) ->
    SST.storage.get 'version', (version) ->
      taskCount = allTasks.length
      if (version < 308 || version == null) and (taskCount > 6) # Are they actually using it?
        if SST.storage.syncEnabled == false # Hack for version 308
          $('.whats-new').show()


  @closeWhatsNew: ->
    SST.storage.set 'version', 308, () ->


  @setTheme: (theme) ->
    $('header, #task-submit').addClass('theme-transition')
    $('body').removeClass()
    $('body').addClass(theme)

    # Map color names to hex
    colors = {
      green:  '4CAF50',
      blue:   '2196F3',
      orange: 'FF7043',
      purple: '7E57C2'
    }

    # e.g. theme = 'theme-green'
    # e.g. color = 'green'
    # e.g. hex   = '4CAF50'

    # e.g. 'theme-green' to 'green'
    color = theme.split('-')[1]
    hex = '#' + colors[color]

    # Change status bar on Android
    $('#android-theme-color').attr('content', hex)

    # Change favicon
    favicon = 'favicon_' + color + '.png'
    $('#favicon').attr('href', favicon)

    setTimeout (->
      $('header, #task-submit').removeClass('theme-transition')

      # Save theme choice in storage
      SST.storage.set 'theme', theme, () ->
        if SST.storage.syncEnabled
          SST.remote.sync () ->
    ), 400


  @getTheme: ->
    SST.storage.get 'theme', (color) =>
      if color == undefined
        color = 'theme-green'
      @setTheme(color)
