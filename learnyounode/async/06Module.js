function FilterLS (directoryName, fileExtension, moduleCallback) {

  var fs = require('fs')
  var path = require('path')
  var async = require('async')

  async.series (
    [
      function (callback) {
        fs.readdir(directoryName, callback)
      }
    ],
    
    function (err, results) {
      if (err) {
        return moduleCallback(err)
      } else {
        moduleCallback(err, filterResults(results[0], fileExtension))
      }
    }
  )

  function filterResults(list, extension) {
    list = list.filter(
      function (file) {
        return path.extname(file) === '.' + extension
      }
    )
    return list
  }
}

module.exports = FilterLS
