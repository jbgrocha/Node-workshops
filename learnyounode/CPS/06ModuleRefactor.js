function FilterLS (directoryName, fileExtension, callback) {

  var fs = require('fs')

  fs.readdir(directoryName, function (err, list) {
    if (err){
      return callback(err)
    }
    else {
      list = list.filter(FilterCallback)
      callback(err, list)
    }
  })

  function FilterCallback(file) {
    var path = require('path')
    return path.extname(file) === '.' + fileExtension
  }
}

module.exports = FilterLS
