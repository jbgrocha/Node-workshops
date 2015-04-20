var fs = require('fs')
var http = require('http')
var bl = require('bl')
var async = require('async')

var filePath = process.argv[2]

//async.waterfall (using an array)
//async.waterfall(functionTasksObject, optionalEndHandler)
//async.waterfall(functionTasksArray, optionalEndHandler)
//runs each task sequentially
//pipes the results into the optional callback

async.waterfall ([

  function getFileContents (callback) {
    fs.readFile(filePath, 'utf8', function fileReadHandler (error, data) {
      if(error) {
        return callback(error,null)
      } else {
        return callback(null, data.split('\n')[0])
      }
    })
  },

  function getUrlContents (url, callback) {
    http.get(url, function httpGetHandler (response) {
      response.pipe(bl(function responseHandler(error, data) {
          if (error) {
            return callback(error, null)
          } else {
            return callback(null, data.toString())
          }
        }))
    })
  }

],

function printResult (error, result) {
  if(error) {
    console.error(error)
  } else {
    console.log(result)
  }
})
