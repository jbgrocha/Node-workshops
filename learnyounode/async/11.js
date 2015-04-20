var http = require('http')
var fs = require('fs')

var listeningPort = process.argv[2]
var fileLocation = process.argv[3]

var server = http.createServer(connectionHandler)

server.listen(listeningPort)

function connectionHandler(request, response) {
  fileStream = fs.createReadStream(fileLocation)
  fileStream.pipe(response)
}
