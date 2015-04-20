var trumpet = require('trumpet')
var through = require('through2')

var trumpetStream = trumpet()

var loud = trumpetStream.select('.loud').createStream()

var upperCaseStream = through(toUpperCase)

function toUpperCase(buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
}

loud.pipe(upperCaseStream).pipe(loud)

//pipe stdin into trumpetStream and output it into stdout
process.stdin.pipe(trumpetStream).pipe(process.stdout)
