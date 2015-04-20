var through2 = require('through2')
var split = require('split')

var lineNumber = 1;

var transformStream = through2(transform)

function transform(line, _, next) {
    if(lineNumber % 2 === 0 ) {
      this.push(line.toString().toUpperCase() + '\n')
    } else {
      this.push(line.toString().toLowerCase() + '\n')
    }
    lineNumber +=  1
    next()
}

process.stdin.pipe(split()).pipe(transformStream).pipe(process.stdout)
