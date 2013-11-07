# Stuff to do with saving tasks

class Task

  # Creates a new task object
  @createTask: (name) ->
    task =
      isDone: false
      name: name
      priority: 'minor'
      duedate: 'today'