var combine = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {

    var current

    var grouperStream = through(writeGrouperHandler, endGrouperHandler)

    function writeGrouperHandler (line, _, next) {
      if (line.length === 0) {
        return next()
      }

      var row = JSON.parse(line)

      if (row.type === 'genre') {
        if (current) {
          this.push(JSON.stringify(current) + '\n')
        }
        current = {
          name: row.name,
          books: []
        }
      }
      else if (row.type === 'book') {
        current.books.push(row.name);
      }
      next()
    }

    function endGrouperHandler (next) {
      if (current) {
        this.push(JSON.stringify(current) + '\n')
      }
      next()
    }

    var gzipStream = zlib.createGzip()

    return combine(split(), grouperStream, gzipStream)
};
