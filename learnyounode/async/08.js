var http = require('http')
var async = require('async')
var bl = require('bl')

var url = process.argv[2]

async.waterfall (
  [
    function httpHandler(callback) {
      http.get(url, function responseHandler (response) {
        response.pipe(bl(callback))
      })
    }
  ],
  function responseHandler (err, data) {
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }
);
