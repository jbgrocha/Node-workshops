var http = require('http')
var fs = require('fs')
var through = require('through2')

//transform code by way of through2
function toUpperCase() {
  return through(write, end)
}

function write (buffer, _, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}

function end (done) {
  done()
}


//server code
var listeningPort = process.argv[2]

function httpClientHandler(req, res) {
  if(req.method === 'POST') {
    req.pipe(toUpperCase()).pipe(res)
  } else {
    res.end('send me a POST\n')
  }
}

var server = http.createServer(httpClientHandler)

server.listen(listeningPort)
