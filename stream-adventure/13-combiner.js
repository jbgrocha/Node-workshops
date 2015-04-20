var combine = require('stream-combiner')
var through = require('through2')
var zlib = require('zlib')

module.exports = function () {

  var genres = []

  var inputStream = through(inputWriteHandler, inputEndHandler)

  // this solution works
  // but i have the feeling it won't be very fault tolerant
  // afterall I am parsing the buffer and not the the line
  // Note: this solution feels too synchronous
  // it makes more sense to pass things along as soon as they are done
  // rather than waiting for the whole genres array to be finished
  // that could be achieved by pushing the previous element of genres
  // when i get a new line describing a genre
  function inputWriteHandler (buffer, encoding, next) {
    var obj = JSON.parse(buffer)
    if (obj.type === "genre") {

      var genre = {
        "name": obj.name,
        "books": []
      }

      genres.push(genre)
    } else if (obj.type === "book") {
      genres[genres.length - 1].books.push(obj.name)
    }
    next()
  }

  function inputEndHandler(done) {
    for (var i = 0; i < genres.length; i ++) {
      this.push(JSON.stringify(genres[i]) + '\n')
    }
    done()
  }

  var gzipStream = zlib.createGzip()

  return combine(inputStream, gzipStream)
}
