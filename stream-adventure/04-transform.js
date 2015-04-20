var through = require('through2')

//transformation stream
var stream = through(write, end)

function write(buffer, enconding, next) {
  this.push(buffer.toString().toUpperCase())
  next()

}

function end(done) {
  done()
}

process.stdin.pipe(stream).pipe(process.stdout)
