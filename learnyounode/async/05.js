var fs = require('fs')
var path = require('path')
var async = require('async')

var pathToFilter = process.argv[2];
var extensionToFilter = process.argv[3];

async.series (
  [
    function (callback) {
      fs.readdir(pathToFilter, callback)
    }
  ],
  
  function (err, results) {
    if (err) {
      return err
    } else {
      filterResultsByExtension(results[0], extensionToFilter)
    }
  }
)

function filterResultsByExtension(results, extension) {
  for (i = 0 ; i < results.length ; i++) {
    if(path.extname(results[i]) === '.' + extension){
      console.log(results[i])
    }
  }
}
