var concat = require('concat-stream')

process.stdin.pipe(
  concat(
    function outputReverse(src) {
      process.stdout.write(src.toString().split('').reverse().join(''))
    }
  )
)
