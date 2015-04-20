var fs = require('fs')
var file = process.argv[2]
var fileReadStream = fs.createReadStream(file).pipe(process.stdout)
