var duplex = require('duplexer')
var through = require('through2')

module.exports = function (counter) {
    // return a duplex stream to count countries on the writable side
    // and pass through `counter` on the readable side


    var counts = []

    //Original implementation
    //Note: no piping is required - endHandler runs counter.setCounts()
    //through.obj handles objects (only JSON?) instead of a buffer
    var inputStream = through.obj(writeHandler, endHandler)

    function writeHandler (obj, enconding, next) {
      if(counts[obj.country] != null) {
        counts[obj.country] += 1
      } else {
        counts[obj.country] = 1
      }
      next()
    }

    function endHandler(done) {
      counter.setCounts(counts)
      done()
    }

    // Alternative Implementation
    // var inputStream = through.obj(objectHandler)
    //
    // function objectHandler(obj, encoding, next) {
    //   if(counts[obj.country] != null) {
    //     counts[obj.country] += 1
    //   } else {
    //     counts[obj.country] = 1
    //   }
    //   next()
    // }
    //
    // inputStream.on('finish', finishHandler)
    //
    // function finishHandler() {
    //   counter.setCounts(counts)
    // }


    var countryStream = duplex(inputStream, counter)

    return countryStream
}
