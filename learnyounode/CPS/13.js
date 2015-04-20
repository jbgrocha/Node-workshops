var http = require('http')
var url = require('url')

var parsetimeAPI = '/api/parsetime'
var unixtimeAPI = '/api/unixtime'
var listeningPort = process.argv[2]

var server = http.createServer(connectionHandler)

server.listen(listeningPort)

function connectionHandler(request, response) {
  var parsedUrl = url.parse(request.url, true)
  var date = new Date(parsedUrl.query.iso)
  var jsonDate = getJSONDate()

  writeResponse()

  function getJSONDate() {
    if(parsedUrl.pathname == parsetimeAPI) {
      return parsetime()
    }
    else if(parsedUrl.pathname == unixtimeAPI) {
      return unixtime()
    }
  }

  function parsetime() {
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
  }

  function unixtime() {
    return {
      unixtime: date.getTime()
    }
  }

  function writeResponse() {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    var responseString = JSON.stringify(jsonDate)
    response.end(responseString)
  }

}
