var http = require('http')
var async = require('async')
var bl = require('bl')

var urls = []
for(var i = 0; i + 2 < /*process.argv.length*/ 5; i++ ) {
  urls[i] = process.argv[i + 2]
}

var httpHandlers = []
for(var i = 0; i < urls.length; i++ ) {
  httpHandlers[i] = genericHttpHandler(urls[i])
}

async.parallel (
  httpHandlers,
  function responseHandler (err, results) {
    if (err) {
      return console.error(err);
    }
    for(var i = 0; i < results.length; i++) {
      var data = results[i].toString()
      console.log(data)
    }
  }
);

function genericHttpHandler(url) {
  return function (callback) {
    http.get(url, function responseHandler (response) {
      response.pipe(bl(callback))
    })
  }
}
