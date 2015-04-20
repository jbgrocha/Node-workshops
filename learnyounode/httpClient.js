var http = require('http');

var url = process.argv[2];

http.get(url, httpCallback);

//http callback handler
function httpCallback (response) {
  response.setEncoding("utf8");
  response.on("data", dataListener);
}

//data event listener
function dataListener (data) {
  console.log(data);
}
