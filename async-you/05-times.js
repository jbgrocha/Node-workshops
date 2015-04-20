var http = require('http')
var async = require('async')

var hostname = process.argv[2]
var port = process.argv[3]

var user_id_offset = 1

function createUser (id, callback) {
  var postData = JSON.stringify (
    {
      "user_id" : id
    }
  )

  var options = {
    hostname: hostname,
    port: port,
    path: '/users/create',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  }

  var request = http.request(options,
    function responseHandler (response) {
      response.setEncoding('utf8')
      response.on('data',
        function dataHandler (data) {
          callback(null, data)
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
  callback(null, id)
}


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

//async.times(numberOfIterations, iteratorFunction, endTasksHandler)

async.series(
  {
    createUsers: function (createUsersHandler) {
      //async.times(numberOfIterations, iteratorFunction, endHandler)
      async.times(5,
        function createUserIterator (userId, nextUserCallback){
         createUser(userId + user_id_offset,
           function createUserHandler (error, user) {
             nextUserCallback(error, user)
           }
         )
        },
        function endCreateUsersHandler (error, users) {
         createUsersHandler(error, users)
        }
      )
    },

    getUsers: function(callback){
      var url = 'http://' + hostname + ':' + port + '/users'
      getDataFromUrl(url, callback)
    }
  },

  // optional callback
  function(error, results){
    if (error) {
     console.error(error)
    } else {
     console.log(results["getUsers"])
    }
  }
)
