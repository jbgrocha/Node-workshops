var net = require('net')
var listeningPort = parseInt(process.argv[2])

var server = net.createServer(socketHandler)

server.listen(listeningPort)

function socketHandler(socket) {
  socket.end(now())
}

function now() {
  var date = new Date();
  var year = date.getFullYear()
  var month = prefixZero(date.getMonth() + 1)
  var day = prefixZero(date.getDate())
  var hours = prefixZero(date.getHours())
  var minutes = prefixZero(date.getMinutes())
  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n"
}

function prefixZero(value) {
  var result = ""
  if(("" + value).length < 2) {
    result += "0"
  }
  result += value
  return  result
}
