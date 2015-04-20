var http = require('http')
var url = process.argv[2]

http.get(url, httpHandler)

function httpHandler(response) {
  response.setEncoding("utf8")
  response.on("data", responseHandler)
}

function responseHandler(data) {
  console.log(data)
}
