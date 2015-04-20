var crypto = require('crypto')

var input = process.stdin
var output = process.stdout

var passphrase = process.argv[2]
var encryptionProtocol = 'aes256'
var decryptionStream = crypto.createDecipher(encryptionProtocol,
  passphrase)

input.pipe(decryptionStream).pipe(output)
