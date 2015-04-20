//It seems there is something fishy with all the piping
//Looking into the official solution it does not look it
var through = require('through2')
var trumpet = require('trumpet')

var trumpetStream = trumpet()

//pipes stdin into trumpetStream
//allows handling of html operations (eg: selection)
process.stdin.pipe(trumpetStream)

//pipes loud class elements from trumpet into loudStream
//this is a selection stream
var loudStream = trumpetStream.select('.loud').createStream()

//creates upperCaseStream (everything sent to it is uppercased)
//this is a transformStream
var upperCaseStream = through(writeUpperCaseStream, endUpperCaseStream)

//write handler for upperCaseStream
function writeUpperCaseStream(buffer, enconding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}

//endHandler for upperCaseStream
function endUpperCaseStream(done) {
  done()
}

//pipes loud elements from loudStream into upperCaseStream
//pipes the result back into itself (official solution does the same )
loudStream.pipe(upperCaseStream).pipe(loudStream)

//loudstream will automatically pipe back into trumpetStream

//pipe trumpetStream into stdout
trumpetStream.pipe(process.stdout)
