class ListView

  @clearNewTaskInputs: ->
    $('#new-task').val('')
    $('#add-link-input').val('')
    $('#edit-task-id').val('')


  @addHTML: (allTasks) ->
    tasks = @compileTemplate(allTasks)
    $('#task-list').html(tasks)

    # Hack city hack hack city hack
    firstCompleted = ($('#task-list').find('.task-completed'))[0]
    $(firstCompleted).before('<hr>')

  @compileTemplate: (allTasks) ->
    source = $('#task-template').html()
    template = Handlebars.compile(source)

    template({tasks: allTasks})


  @showTasks: (allTasks) ->
    if allTasks == undefined
      allTasks = []

    @showEmptyState(allTasks)
    @addHTML(allTasks)

    Extension.setBrowserActionBadge(allTasks)


  @showEmptyState: (allTasks) ->

    if allTasks.length == 0
      $('#all-done').addClass('show-empty-state')
      $('#print-tasks').addClass('disabled-link')
    else
      $('#all-done').removeClass('show-empty-state')
      $('#print-tasks').removeClass('disabled-link')


  @changeEmptyStateImage: ->
    if SST.online
      $('#empty-state-image').css('background-image', 'url("https://unsplash.it/680/440/?random")')

