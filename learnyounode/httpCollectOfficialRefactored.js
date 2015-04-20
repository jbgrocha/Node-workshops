var http = require('http')
var bl = require('bl')

http.get(process.argv[2], httpHandler);

function httpHandler(response) {
  response.pipe(bl(responseHandler));
}

function responseHandler (err, data) {
  if (err) {
    return console.error(err);
  }
  data = data.toString();
  console.log(data.length);
  console.log(data);
}
