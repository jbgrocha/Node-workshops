var http = require('http')
var bl = require('bl')
var async = require('async')

var urls = [
  process.argv[2],
  process.argv[3]
]
//async.series (using an object instead of an array)
//async.series(functionTasksObject, optionalEndHandler)
//async.series(functionTasksArray, optionalEndHandler)
//runs each task independently
//pipes the results into the optional callback in a result array

async.series({

   requestOne: function(callback){
     getUrlContents(urls[0], callback)
   },

   requestTwo: function(callback){
     getUrlContents(urls[1], callback)
   }

 },

 // optional callback
 function(error, results){
   if (error) {
     console.error(error)
   } else {
     console.log(results)
   }
 });


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
