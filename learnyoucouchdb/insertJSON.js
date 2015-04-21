var async = require('async')
var fs = require('fs')
var http = require('http')

//var couchdbPath = 'http://localhost:5984/'
var hostname = 'localhost'
var port = '5984'

var dbName = process.argv[2]
var filePath = process.argv[3]

async.waterfall ([

  function getJSONFileContents (callback) {
    fs.readFile(filePath, 'utf8', function fileReadHandler (error, data) {
      if(error) {
        return callback(error,null)
      } else {
        return callback(null, JSON.stringify(JSON.parse(data)))
      }
    })
  },

  function insertJSON(json, callback) {
    var postData = json
    var options = {
      hostname: hostname,
      port: port,
      path: '/' + dbName,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    }

    var request = http.request(options,
      function responseHandler (response) {
        response.setEncoding('utf8')
        response.on('data',
          function dataHandler (data) {
            var result = JSON.parse(data)
            if(result["ok"] === true) {
              callback(null, postData)
            } else {
              callback(result["reason"], postData + '.')
            }

          }
        )
      }
    )

    request.on('error',
      function errorHandler (error) {
        callback(error, null)
      }
    )

    // write data to request body
    request.write(postData)
    request.end()
    // callback(null, postData)
  }

],

function (error, result) {
  if(error) {
    console.log("FAILED writing " + filePath + " to http://" + hostname +
        '/' + dbName + ": " + error + ' Document : ' + result)
  } else {
    console.log("SUCCESS writing " + filePath + '(' + result + ')' +
      " to http://" + hostname + '/' + dbName)
  }
})
