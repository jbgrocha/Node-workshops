var http = require('http')
var map = require('through2-map')

var listeningPort = process.argv[2]

var server = http.createServer(connectionHandler)

server.listen(listeningPort)

function connectionHandler(request, response) {
  request.pipe(map(streamTransformation)).pipe(response)
}

function streamTransformation(chunk) {
    return chunk.toString().toUpperCase()
}
