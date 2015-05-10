# Miscellaneous utilities

# parser.protocol; // => "http:"
# parser.hostname; // => "example.com"
# parser.port;     // => "3000"
# parser.pathname; // => "/pathname/"
# parser.search;   // => "?search=test"
# parser.hash;     // => "#hash"
# parser.host;     // => "example.com:3000"

class Utils

  @getUrlAttribute: (attribute) ->
    parser = document.createElement('a')
    parser.href = window.location.href

    parser[attribute]

  @getUrlParameter: (param) ->
    pageURL = @getUrlAttribute('search').substring(1)
    urlVariables = pageURL.split('&')
    i = 0
    while i < urlVariables.length
      parameterName = urlVariables[i].split('=')
      if parameterName[0] == param
        return parameterName[1]
      i++

  @generateID: ->
    s4 = ->
      Math.floor((1 + Math.random()) * 0x10000).toString(16).substring 1

    s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()

  @checkOnline: ->
    online = navigator.onLine
    return online