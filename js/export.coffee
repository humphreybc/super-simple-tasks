Exporter = (allTasks, FileTitle, ShowLabel) ->

  exportData = JSON.stringify(allTasks);
  
  # Remove the blank spaces from the title and replace them with an underscore
  fileName = ''
  fileName += FileTitle.replace(RegExp(' ', 'g'), '_')
  
  # Initialize file format and add data
  uri = 'data:text/json;charset=utf-8,' + escape(exportData)
  
  # This trick will generate a temp <a /> tag
  link = document.createElement('a')
  link.href = uri
  
  # Set the visibility hidden so it will not affect the DOM
  link.style = 'visibility:hidden'
  link.download = fileName + '.json'
  
  # This will append the anchor tag and remove it after automatic click
  document.body.appendChild link
  link.click()
  document.body.removeChild link

