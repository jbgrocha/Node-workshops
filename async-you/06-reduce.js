var http = require('http')
var async = require('async')

var url = process.argv[2] + '?number='
var numbers = ['one', 'two', 'three']

function getDataFromUrl (url, callback){
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
//async.reduce(set, memoStartValue, reduceCallback)
//reduces a set (iterating over it)
//allows accumulating the results by using the memo variable of the callback
//reduceCallback(memo, item, callback)
//item represents the current item of the set

async.reduce(numbers, 0, function(memo, item, callback){
    getDataFromUrl(url + item, function (error, result) {
      //return the result
      if(error) {
        callback(error, null)
      } else {
        callback(null, memo + Number(result))
      }
    })
}, function(err, result){
    console.log(result)
    // result is now equal to the last value of memo, which is 6
});
