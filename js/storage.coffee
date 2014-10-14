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

    value = localStorage.getItem(key)

    value = JSON.parse(value)

    callback(value)


  # Synchronously gets the stuff from localStorage
  @getSync: (key) ->

    value = localStorage.getItem(key)

    JSON.parse(value)


  # Sets something to localStorage given a key and value
  @set: (key, value) ->

    value = JSON.stringify(value)

    localStorage.setItem(key, value)


  # Removes something from localStorage given a key
  @remove: (key) ->
    localStorage.removeItem(key)


class ChromeStorage

  # Return all the tasks given the key
  # At the moment the key is 'todo' for most calls
  @get: (key, callback) ->
    
    chrome.storage.sync.get key, (value) ->
      value = value[key] || null || LocalStorage.getSync(key)

      callback(value) 
 

  # Set all the tasks given the key 'todo' and the thing we're setting 
  # Usually a JSON array of all the tasks
  @set: (key, value, callback) ->

    params = {}
    params[key] = value

    chrome.storage.sync.set params, () ->


  # Remove a whole entry from chrome.storage.sync given its key
  @remove: (key) ->
    chrome.storage.sync.remove key, () ->


  # Listen for changes and run Views.showTasks when a change happens
  if !!window.chrome and chrome.storage

    chrome.storage.onChanged.addListener (changes, namespace) ->
      for key of changes
        storageChange = changes[key]
        Views.showTasks(storageChange.newValue)





