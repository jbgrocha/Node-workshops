function FilterLS (directoryName, fileExtension, callback) {

  var fs = require('fs')
  var path = require('path')

  fs.readdir(directoryName, function (err, list) {
    if (err){
      return callback(err)
    }
    else {
      list = list.filter(function (file) {
        return path.extname(file) === '.' + fileExtension
      })
      callback(err, list)
    }
  })
}

module.exports = FilterLS
