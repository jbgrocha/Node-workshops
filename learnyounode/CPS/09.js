var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], httpHandler)

  function httpHandler(response) {
    response.pipe(bl(responseHandler))
  }

  function responseHandler(err, data) {
    if (err)
      return console.error(err)

    results[index] = data.toString()
    count++

    if (count == 3)
      printResults()
  }
}



for (var i = 0; i < 3; i++)
  httpGet(i)
