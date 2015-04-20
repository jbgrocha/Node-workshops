var http = require('http')

var url = "http://127.0.0.1:5984/_all_dbs"

http.get(url, httpCallback)

//http callback handler
function httpCallback (response) {
  response.setEncoding("utf8")
  response.on("data", dataListener)
}

//data event listener
function dataListener (data) {
  console.log(data)
}
