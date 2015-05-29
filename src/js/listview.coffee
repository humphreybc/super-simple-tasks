class ListView

  @clearNewTaskInputs: ->
    $('#new-task').val('')
    $('#add-link-input').val('')
    $('#edit-task-id').val('')


  @addHTML: (allTasks) ->
    task_list = $('#task-list')
    tasks = @compileTemplate(allTasks)
    task_list.html(tasks)


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
    else
      $('#all-done').removeClass('show-empty-state')


  @changeEmptyStateImage: (online) ->
    if online
      $('#empty-state-image').css('background-image', 'url("https://unsplash.it/680/440/?random")')