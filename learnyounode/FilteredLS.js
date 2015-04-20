var fs = require('fs');
var path = require('path');
var pathToFilter = process.argv[2];
var extensionToFilter = process.argv[3];

function errorHandler(error) {
  throw error;
}

function filterDirectoryByExtension(pathToFilter, extensionToFilter, callback) {
  fs.readdir(pathToFilter, function doneReading(err, list){
    if (err) {
      if (error.errno === process.ENOENT) {
        // Ignore file not found errors and return an empty result
        callback(null, "");
      } else {
        // Pass other errors through as is
        callback(err);
      }
    } else {

      var result = [];

      for (i = 0 ; i < list.length ; i++) {
        if(path.extname(list[i]) === '.' + extensionToFilter){
          console.log(list[i]);
        }
      }
      callback(null);
    }
  });
}


function end(err) {
  if (err) {
    errorHandler(err);
  }
}

filterDirectoryByExtension(pathToFilter, extensionToFilter, end);
