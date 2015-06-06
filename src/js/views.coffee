class Views
  timeout = 0


  @setListName: ->
    SST.storage.get 'name', (list_name) ->
      $('#list-name').val(list_name)


  @storeListName: ->
    list_name = $('#list-name').val()
    SST.storage.setListName list_name, () ->


  @animateContent: ->
    $('#task-list').addClass('list-show')


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

    host = 'localhost:9001'

    $device_link_code.val('http://' + host + '/?share=' + SST.storage.dbKey)


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
      if (t == null) and (!SST.mobile) and (allTasks.length > 0)
        SST.tour.trigger 'depart.tourbus'


  @checkWhatsNew: ->
    SST.storage.get 'version', (version) ->
      if (version < '2.2.0' || version == null) and (SST.tourRunning == false)
        $('.whats-new').show()


  @finishTour: ->
    SST.tourRunning = false
    $('.tourbus-leg').hide()

    # Get rid of the # at the end of the URL
    history.pushState('', document.title, window.location.pathname)

    SST.storage.set 'tour', 1, () ->


  @closeWhatsNew: ->
    SST.storage.set 'version', '2.2.0', () ->
