# Make the task list sortable

list = document.querySelector('#task-list')
new Slip(list)

list.addEventListener 'slip:swipe', (e) ->
  e.target.parentNode.removeChild e.target
  return

list.addEventListener 'slip:reorder', (e) ->
  e.target.parentNode.insertBefore e.target, e.detail.insertBefore
  return