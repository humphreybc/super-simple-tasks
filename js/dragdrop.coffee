# Make the task list sortable using Slip.js

# Set the list element
list = document.querySelector('#task-list')


# Create a new Slip object with that element
new Slip(list)


# Swipe a task
list.addEventListener 'slip:swipe', (e) ->

  # Remove it from the DOM
  e.target.parentNode.removeChild e.target

  # Get the ID with Views.getId and then pass that to Task.markDone()
  # to remove the task
  Task.markDone(Views.getId(e.target))


# Reorder a task
list.addEventListener 'slip:reorder', (e) ->

  # Insert the task into the correct place
  e.target.parentNode.insertBefore e.target, e.detail.insertBefore

  # Get the old and new locations
  oldLocation = e.detail.originalIndex
  newLocation = e.detail.spliceIndex

  # Pass those locations to Task.updateOrder() to save the list
  Task.updateOrder(oldLocation, newLocation)


# Reorder a task with the drag handle
list.addEventListener 'slip:beforewait', ((e) ->
  if e.target.className.indexOf('drag-handle') > -1
    e.preventDefault()
), false