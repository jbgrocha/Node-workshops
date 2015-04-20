var http = require('http');

var url = process.argv[2];

var result = "";

//can I factor the callback like this?
http.get(url, httpCallback);

//http callback handler
function httpCallback (response) {
  response.setEncoding("utf8");
  response.on("data", dataHandler);
  response.on("end", endHandler);
}

//data event handler
function dataHandler (data) {
  result += data;
}

//end event handler
function endHandler() {
  console.log(result.length);
  console.log(result);
}

//print two lines
//number of chars received from  the server
//complete String of chars sent by the server
