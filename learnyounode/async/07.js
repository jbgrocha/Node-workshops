var http = require('http')
var async = require('async')

var url = process.argv[2]

async.waterfall (
  [
    function httpHandler(callback) {
      http.get(url, function responseHandler (response) {
        response.setEncoding("utf8");
        response.on('data', callback);
      })
    },
  ],

  function dataHandler (results) {
    console.log(results)
  }
);
