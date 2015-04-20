var http = require('http')
var bl = require('bl')

function StreamHandler(urlString) {
  this.urlString = urlString;
  this.data = "";

  http.get(urlString, httpHandler.bind(this));

  function httpHandler(response) {
    response.pipe(bl(responseHandler.bind(this)));
  }

  function responseHandler (err, data) {
    if (err) {
      return console.error(err);
    }
    this.data = data.toString();
    StreamUpdated();
  }
}

var count =  0;

var streams = [
  new StreamHandler(process.argv[2]),
  new StreamHandler(process.argv[3]),
  new StreamHandler(process.argv[4])
]

function StreamUpdated() {
  count += 1;
  if (count === streams.length) {
    for (var i = 0; i < streams.length; i++) {
      console.log(streams[i].data);
    }
  }
}
