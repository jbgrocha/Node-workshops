var http = require('http')
var async = require('async')

var url = process.argv[2]

var requestBody = ''

var count = 0

//asyncwhilst(loopConditionHandler, stepHandler, endHandler )
async.whilst(
  function loopConditionHandler () {
    return !/meerkat/.test(requestBody.trim())
  },

  function stepHandler (callback){
    var body = ''
    http.get(url,
      function(response){
        response.on('data',
          function(chunk){
            body += chunk.toString()
          }
        )

        response.on('end',
          function(){
            ++count
            requestBody = body
            callback()
          }
        )
      }
    ).on('error', callback)
  },

  function endHandler (error){
    if (error) {
      console.error(error)
    }
    console.log(count)
  }
)
