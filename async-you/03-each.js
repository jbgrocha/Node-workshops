var http = require('http')
var async = require('async')
var urls = [process.argv[2], process.argv[3]]

//async.each(itemList, iteratorFunction, tasksEndHandler)
//According to information in the exercise
//The results of the tasks are lost
async.each(urls, urlHandler, endHandler)

function urlHandler (url, callback){
  http.get(url,

  	function httpCallback (response) {
	    response.setEncoding("utf8")
	    response.on("data",
        function dataListener (data) {
			      callback()
		      }
        )
    }
  ).on('error',
    function errorHandler (error) {
	    callback(error)
    }
  )
}

function endHandler(err){
  if (err) console.log(err)
}
