var http = require('http')
var url = process.argv[2]

var result = "";

http.get(url, httpHandler)

function httpHandler(response) {
  response.setEncoding("utf8")
  response.on("data", responseHandler)
  response.on("end", endHandler)
}

function responseHandler(data) {
  result += data
}

function endHandler() {
  console.log(result.length)
  console.log(result)
}
