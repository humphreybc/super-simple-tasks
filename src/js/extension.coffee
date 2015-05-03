# Specific to the Chrome extension

chrome.extension.onMessage.addListener (task, sender, sendResponse) ->
  Task.setNewTask(task, '')
  return

# chrome.runtime.onMessage.addListener (selection_text, _, sendResponse) ->
#   Task.setNewTask(selection_text, '')
#   showChromeNotification()

# cmid = cmid || null

# console.log 'thing'

# document.addEventListener 'selectionchange', () ->
#   debugger
#   type = window.getSelection().toString().trim()
#   if type == ''
#     # Remove the context menu entry
#     if cmid != null
#       chrome.contextMenus.remove(cmid)
#       cmid = null # Invalidate entry now to avoid race conditions
#     # else: No contextmenu ID, so nothing to remove
#   else # Add/update context menu entry
#     options = {
#       title: type
#       contexts: ['selection']
#       onclick: getText
#     }
#     if !!cmid
#       chrome.contextMenus.update(cmid, options)
#     else
#       # Create new menu, and remember the ID
#       cmid = chrome.contextMenus.create(options)

# var cmid;
# var cm_clickHandler = function(clickData, tab) {
#     alert('Selected ' + clickData.selectionText + ' in ' + tab.url);
# };

# chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
#     if (msg.request === 'updateContextMenu') {
#         var type = msg.selection;
#         if (type == '') {
#             // Remove the context menu entry
#             if (cmid != null) {
#                 chrome.contextMenus.remove(cmid);
#                 cmid = null; // Invalidate entry now to avoid race conditions
#             } // else: No contextmenu ID, so nothing to remove
#         } else { // Add/update context menu entry
#             var options = {
#                 title: type,
#                 contexts: ['selection'],
#                 onclick: cm_clickHandler
#             };
#             if (cmid != null) {
#                 chrome.contextMenus.update(cmid, options);
#             } else {
#                 // Create new menu, and remember the ID
#                 cmid = chrome.contextMenus.create(options);
#             }
#         }
#     }
# });


# if cmid
#   chrome.contextMenus.update cmid, {
#     'title': 'Add: %s'
#     'contexts': [ 'selection' ]
#     'onclick': getText
#   }
# else
#   cmid = chrome.contextMenus.create {
#     'title': 'Add: %s'
#     'contexts': [ 'selection' ]
#     'onclick': getText
#   }
#   localStorage.setItem('cmid', cmid)


# # console.log 'ID after create ' + cmid

# # chrome.contextMenus.remove(cmid - 1)

# # console.log 'ID after delete ' + cmid