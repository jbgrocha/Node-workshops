var http = require('http');

function StreamHandler(urlString) {

  this.result = "";

  this.done = false;

  this.url = urlString;

  http.get(this.url, httpCallback.bind(this));

  //http callback handler
  function httpCallback (response) {
    response.setEncoding("utf8");
    response.on("data", dataHandler.bind(this));
    response.on("end", endHandler.bind(this));
  }

  //data event handler
  function dataHandler (data) {
    this.result += data;
  }

  //end event handler
  function endHandler() {
    this.done = true;
    StreamUpdated();
  }
}

var streams = [
  new StreamHandler(process.argv[2]),
  new StreamHandler(process.argv[3]),
  new StreamHandler(process.argv[4])
]

function StreamUpdated() {
  result = true;
  for (var i = 0; i < streams.length; i++) {
    result = result && streams[i].done;
  }
  if (result === true) {
    for (var i = 0; i < streams.length; i++) {
      console.log(streams[i].result);
    }
  }
}
