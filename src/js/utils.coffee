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
      Math.floor((1 + Math.random()) * 0x1000).toString(16).substring 1

    s4() + s4()


  @checkOnline: ->
    SST.online = navigator.onLine


  @checkConnection: () ->
    networkState = navigator.connection.type
    states = {}

    states[Connection.UNKNOWN] = false
    states[Connection.ETHERNET] = true
    states[Connection.WIFI] = true
    states[Connection.CELL_2G] = true
    states[Connection.CELL_3G] = true
    states[Connection.CELL_4G] = true
    states[Connection.CELL] = true
    states[Connection.NONE] = false

    if states[networkState]
      true
    else
      false
