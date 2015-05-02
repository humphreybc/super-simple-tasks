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