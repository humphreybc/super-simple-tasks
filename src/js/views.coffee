class Views
  timeout = 0

  @catchSharingCode: ->
    share_code = Utils.getUrlParameter('share')
    
    unless share_code == undefined
      DB.db_key = share_code
      localStorage.setItem('sync_key', DB.db_key)
      DB.enableSync()
      DB.setSyncStatus()
      DB.createFirebase()


  @setListName: ->
    window.storageType.get 'name', (list_name) ->
      $('#list-name').val(list_name)


  @storeListName: ->
    list_name = $('#list-name').val()
    window.storageType.set('name', list_name)


  @animateContent: ->
    setTimeout (->
      $('#main-content').addClass('content-show')
    ), 150


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
      $link_input.focus()
    else
      $body.removeClass(linkActiveClass)
      $new_task_input.focus()


  @checkOnboarding: (allTasks, tour) ->
    window.storageType.get 'sst-tour', (sstTour) ->
      if (sstTour == null) and ($(window).width() > 499) and (allTasks.length > 0)
        tour.trigger 'depart.tourbus'


  @checkWhatsNew: ->
    window.storageType.get 'whats-new-2-2-0', (whatsNew) ->
      if (whatsNew == null) and (window.tourRunning == false)
        $('.whats-new').show()


  @finishTour: ->
    window.tourRunning = false
    $('.tourbus-leg').hide()

    # Get rid of the # at the end of the URL
    history.pushState('', document.title, window.location.pathname)
    
    window.storageType.set('sst-tour', 1)


  @closeWhatsNew: ->
    window.storageType.set('whats-new-2-2-0', 1)

