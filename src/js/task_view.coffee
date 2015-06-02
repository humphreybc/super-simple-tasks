class TaskView

  @getId: (li) ->
    $(li).parent().children().index(li)
    

  @getLi: (id) ->
    task = $('#task-list li:nth-child(' + (id + 1) + ')')


  @addTaskTriggered: ->
    name = $('#new-task').val()
    link = $('#add-link-input').val()
    id = $('#edit-task-id').val()

    if name
      if id
        TaskView.editTaskTriggered(name, link, id)
      else
        Task.setNewTask(name, link)
        ListView.clearNewTaskInputs()
        TaskView.taskAddedAnimation()
        Tour.nextTourBus(SST.tour)

    $('#new-task').focus()


  @taskAddedAnimation: ->
    $('#task-submit').addClass('task-submitted')

    setTimeout (->
      $('#task-submit').removeClass('task-submitted')
    ), 1000


  @editTask: (id) ->
    SST.storage.getTasks (allTasks) ->

      name = allTasks[id].name
      link = allTasks[id].link
      
      $('#edit-task-id').val(id)
      $('#new-task').val(name)

      if link
        $('#add-link-input').val(link)
        Views.toggleAddLinkInput(true)
      else
        Views.toggleAddLinkInput(false)

      $('#edit-task-overlay').addClass('fade')
      $('#new-task').focus()
      $('#new-task').select()


  @editTaskTriggered: (name, link, id) ->
    id = parseInt(id)
        
    Task.updateTask(name, link, id)

    $('#edit-task-overlay').removeClass('fade')

    ListView.clearNewTaskInputs()
    Views.toggleAddLinkInput(false)

    
  @taskEditedAnimation: (id) ->
    task = TaskView.getLi(id)

    setTimeout (->
      task.addClass('edited-transition')
      task.addClass('edited')
    ), 250

    setTimeout (->
      task.removeClass('edited')
    ), 2000

    setTimeout (->
      task.removeClass('edited-transition')
    ), 3000


  @completeTask: (li) ->
    checkbox = li.find('input')

    is_done = not checkbox.prop 'checked'
    Task.updateAttr(@getId(li), 'isDone', is_done)

    # Manually toggle the value of the checkbox
    checkbox.prop 'checked', is_done