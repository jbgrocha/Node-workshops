var zlib = require('zlib')
var tar = require('tar')
var crypto = require('crypto')
var through = require('through2')
var combine = require('stream-combiner')
var concat = require('concat-stream')

var inputStream = process.stdin
var outputStream = process.stdout


// decryption stream
var passphrase = process.argv[3]
var encryptionProtocol = process.argv[2]

var decryptionStream = crypto.createDecipher(encryptionProtocol,
  passphrase)

// gunzip stream
var gunzipStream  = zlib.createGunzip()

// tar parsing
//problem chaining this to md5Stream
var tarParserStream = tar.Parse()
tarParserStream.on('entry', entryHandler)

function entryHandler (entry) {
  if(entry.type === 'File') {

    var md5Stream = crypto.createHash(
      'md5',
      {
        encoding: 'hex'
      }
    )

    //this shows an important usage of concat
    //it allows me to declare a "handler callback" for a stream
    //and having access to objects outside the scope of the stream
    function md5Handler(md5Result) {
      outputStream.write(md5Result + ' ' + entry.path + '\n' )
    }

    var resultStream = concat(md5Handler)

    entry.pipe(md5Stream).pipe(resultStream)
  }
}

var combinedStream = combine(
  decryptionStream,
  gunzipStream,
  tarParserStream
)

inputStream.pipe(combinedStream)
