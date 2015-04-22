var through = require('through2')
var combine = require('stream-combiner2')
var sprintf = require('sprintf')
var quote = require('quote-stream');

module.exports = function (file) {
  // Transforms are run on all files in the current package that are loaded
  // with`require()`. For this problem we are only interested in transforming
  // `.txt` files, so we return a passthrough stream if the file extension is
  // not `.txt`.
  if (!/\.txt$/.test(file)) {
    //return empty  stream
    return through()
  }

  var transform = through(transformWrite, transformEnd)

  var prefix = through()
  prefix.push('module.exports=')

  // This implementation has a weird vibe to it
  // I am actually getting the full contents of the file
  // each time data is written to the transform
  var stream = combine([transform, quote(), prefix])

  return stream
}

// This, despite working, feels wrong, i am processing like i got the full
// contents...
function transformWrite(buffer, encoding, next) {
  var arrayTxt = buffer.toString().split('\n')
  var result = ''
  arrayTxt.forEach(
    function (line, index) {
      if (index % 5 === 0) {
        result += sprintf("%3d %s", index, line) + '\n'
      }
      else {
        result += sprintf("    %s", line) + '\n'
      }
    }
  )
  this.push(result)
  next()
}

function transformEnd(done) {
  done()
}
