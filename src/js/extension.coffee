class Extension

  @setBrowserActionBadge: (allTasks) ->
    url = window.location.href.split('://')

    # I should probably make this a global at some point
    if url[0] == 'chrome-extension'

      task_count = allTasks.filter((task) ->
        task.isDone == false
      ).length

      task_count = "#{task_count}" # Just `'' + n` in disguise

      if task_count == '0'
        task_count = ''

      chrome.browserAction.setBadgeText
        'text': task_count

      if task_count < 15
        chrome.browserAction.setBadgeBackgroundColor
          'color': '#555555'

      # We want people to be productive here!
      if task_count > 15
        chrome.browserAction.setBadgeBackgroundColor
          'color': '#FF4444'