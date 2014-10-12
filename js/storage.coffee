# Saving tasks using either localStorage or chrome.storage.sync

class DB

  # DO NOT CHANGE

  # This is the key used to save tasks in localStorage
  # If this is changed, tasks will be lost on upgrade

  @db_key = 'todo'


class LocalStorage

  # Gets a generic value from localStorage given a particular key
  # Parses the JSON so it's an object instead of a string
  @get: (key, callback) ->

    item = localStorage.getItem(key)

    item = JSON.parse(item)

    item


  # Sets something to localStorage given a key and value
  @set: (key, item, callback) ->

    item = JSON.stringify(item)

    localStorage.setItem(key, item)

    item

    # Views.showTasks(allTasks)


  # Removes something from localStorage given a key
  @remove: (key, callback) ->
    localStorage.removeItem(key)


