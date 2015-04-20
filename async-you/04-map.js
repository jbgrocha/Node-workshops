var http = require('http')
var async = require('async')

var urls = [process.argv[2], process.argv[3]]

//Similar to async.each
//unlike async.each this allows us to collect the results
//async.map(itemList, iteratorFunction, taskEndHandler)
async.map(urls, urlHandler, tasksEndHandler);

function urlHandler (url, callback){
  http.get(url,

  	function httpCallback (response) {
	    response.setEncoding("utf8")
	    response.on("data",

        function dataListener (data) {
			     callback(null, data)
	       }
       )
	   }
  ).on('error',
    function errorHandler (error) {
  		callback(error, null)
    }
  )
}

function tasksEndHandler(error, results){
  if (error) {
    console.log(err)
  } else {
    //operation to be performed on the results
    console.log(results)
  }
}
