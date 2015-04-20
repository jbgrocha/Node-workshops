
function FilterLS (directoryName, fileExtension, callback) {

  var fs = require('fs')
  var path = require('path')
  var results = []

  fs.readdir(directoryName, function (err, data) {
      if (err){
        return callback(err)
      }
      else {
        data.forEach(function (file) {
          if(path.extname(file) === '.' + fileExtension) {
            console.log(file)
          }
        })
        callback(err, results)
      }
  })
}

module.exports = FilterLS
