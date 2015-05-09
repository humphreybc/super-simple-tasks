# Miscellaneous utilities

class Utils

  @getUrlParameter: (param) ->
    pageURL = window.location.search.substring(1)
    urlVariables = pageURL.split('&')
    i = 0
    while i < urlVariables.length
      parameterName = urlVariables[i].split('=')
      if parameterName[0] == param
        return parameterName[1]
      i++

  @generateUUID: ->
    s4 = ->
      Math.floor((1 + Math.random()) * 0x10000).toString(16).substring 1

    s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()