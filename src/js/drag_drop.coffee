# Make the task list sortable using Slip.js

# Set the list element
list = document.querySelector('#task-list')


# Create a new Slip object with that element
new Slip(list)


# Swipe a task
list.addEventListener 'slip:swipe', (e) ->
  e.preventDefault()
  Task.deleteTask(e.target)


# Reorder a task
list.addEventListener 'slip:reorder', (e) ->

  # Insert the task into the correct place
  e.target.parentNode.insertBefore e.target, e.detail.insertBefore

  # Get the old and new locations
  oldLocation = e.detail.originalIndex
  newLocation = e.detail.spliceIndex

  # Account for the <hr> to separate completed tasks
  if $(e.target).hasClass('task-completed')
    oldLocation = oldLocation - 1
    newLocation = newLocation - 1

  # Pass those locations to Task.updateOrder() to save the list
  Task.updateOrder(oldLocation, newLocation)


# Reorder a task with the drag handle
list.addEventListener 'slip:beforewait', ((e) ->
  if e.target.className.indexOf('drag-handle') > -1
    e.preventDefault()
), false