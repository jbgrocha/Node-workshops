var fs = require('fs')
var path = require('path')
var pathToFilter = process.argv[2];
var extensionToFilter = process.argv[3];

fs.readdir(pathToFilter, filterByExtension)

function filterByExtension (err, list) {
  for (i = 0 ; i < list.length ; i++) {
    if(path.extname(list[i]) === '.' + extensionToFilter){
      console.log(list[i])
    }
  }
}
