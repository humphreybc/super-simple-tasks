# Exports task list to a .json file

Exporter = (allTasks, title) ->

  exportData = []

  for task in allTasks
    if task.link == ''
      exportData.push task.name
    else
      exportData.push (task.name + ' (' + task.link + ')')

  exportData = exportData.join('\n\n')
  
  # Initialize file format and add data
  uri = 'data:text/plain;charset=utf-8,' + escape(exportData)
  
  # This trick will generate a temp <a /> tag
  link = document.createElement('a')
  link.href = uri
  
  # Set the visibility hidden so it will not affect the DOM
  link.style = 'visibility:hidden'
  link.download = title + '.txt'
  
  # This will append the anchor tag and remove it after automatic click
  document.body.appendChild link
  link.click()
  document.body.removeChild link