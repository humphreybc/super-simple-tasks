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
        if everything == null
          allTasks = Task.seedDefaultData()
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
      Views.modal('none')
      ga 'send', 'event', 'Modal dialog close shortcut', 'shortcut'
    
    if evtobj.altKey && evtobj.keyCode == l_key
      Views.toggleAddLinkInput()
      ga 'send', 'event', 'Add link shortcut', 'shortcut'


  @standardLog: ->
    console.log 'Like looking under the hood? Feel free to help make Super Simple Tasks
                better at https://github.com/humphreybc/super-simple-tasks'


  @reload: (allTasks) ->
    ListView.showTasks(allTasks)


  @displayApp: (allTasks) ->
    @setTheme(@getTheme())
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


  @clearCompletedTasks: ->
    completed = $('.task-completed')

    if completed.length > 0
      audio = new Audio('../img/ceres.ogg')
      audio.play()

    delayTime = 0
    count = 0

    completed.each ->
      $(this).delay(delayTime).animate {
        'margin-left': '-500px'
        'opacity': '0'
      }, 150
      delayTime += 150
      count += 1

    if count == completed.length
      setTimeout (->
        Task.clearCompleted()
      ), delayTime


  @modal: (id, pop) ->

    switch id
      when 'none'
        $('body').removeClass('modal-show')

      when 'share-modal'
        $('body').addClass('modal-show')
        $('#modal-share, #modal-join').hide()
        $('#modal-choose').show()
        unless pop
          @doPushState(id)

      when 'share-list'
        @populateLinkCode()
        $('#modal-choose, #modal-share').toggle()
        unless pop
          @doPushState(id)

      when 'join-list'
        $('#modal-choose, #modal-join').toggle()
        unless pop
          @doPushState(id)

      when 'disconnect'
        if window.confirm('Are you sure you want to disconnect this list? Your tasks will still be stored locally.')
          SST.storage.disconnectDevices()
          location.reload()

      when 'modal-close'
        $('body').removeClass('modal-show')


  @doPushState: (id) ->
    state = {id: id}
    title = id
    path = ''

    history.pushState(state, title, path)


  @populateLinkCode: ->
    $('#link-code').text(SST.storage.dbKey)
    url = 'http://supersimpletasks.com/?share=' + SST.storage.dbKey
    $('#link-code-url').text(url)
    $('#link-code-url').attr('href', url)


  @setSyncCode: () ->
    code = $('#modal-code-input').val()
    localStorage.setItem('sync_key', code)
    location.reload()


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
      if (version < 320 || version == null) and (taskCount > 6)
        if SST.storage.syncEnabled == false
          $('.whats-new').show()


  @closeWhatsNew: ->
    SST.storage.set 'version', 320, () ->


  @returnThemeColor: (theme) ->
    colors = {
      green:  '4CAF50',
      blue:   '2196F3',
      orange: 'FF7043',
      purple: '7E57C2'
    }

    colors[theme.split('-')[1]]


  @setTheme: (theme) ->
    color = @returnThemeColor(theme)
    hex = '#' + color

    $('header, #task-submit').addClass('theme-transition')
    $('body').removeClass()
    $('body').addClass(theme)

    $('#android-theme-color').attr('content', hex)

    if !!window.cordova
      @setStatusBarColor(hex)

    favicon = 'favicon_' + theme.split('-')[1] + '.png'
    $('#favicon').attr('href', favicon)

    setTimeout (->
      $('header, #task-submit').removeClass('theme-transition')

      SST.storage.set 'theme', theme, () ->
        if SST.storage.syncEnabled
          SST.remote.sync () ->
    ), 400


  @getTheme: ->
    SST.storage.get 'theme', (theme) ->
      if theme == undefined
        theme = 'theme-green'
      theme


  @setStatusBarColor: (hex) ->
    if StatusBar
      hex = switch hex # Android says we need to darken the color for the status bar
        when '#4CAF50' then '#2A8D30'
        when '#2196F3' then '#0075D1'
        when '#FF7043' then '#DD5021'
        when '#7E57C2' then '#5C35A0'

      StatusBar.backgroundColorByHexString(hex)
