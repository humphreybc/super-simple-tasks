# Specific to the Chrome extension

if !!window.chrome and chrome.storage

  onClickHandler = (task) ->

    task = task.selectionText

    Task.setNewTask(task, '')

    options =
      type: 'basic'
      title: 'Task added!'
      message: task
      iconUrl: '../img/notification_icon.png'

    chrome.notifications.create options
    return

  chrome.contextMenus.onClicked.addListener onClickHandler

  chrome.runtime.onStartup.addListener ->
    chrome.contextMenus.create
      'title': 'Add: %s'
      'contexts': [ 'selection' ]
    return