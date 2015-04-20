var fs = require('fs')
var contents = fs.readFile(process.argv[2], 'utf8', countLines)

function countLines(err, data) {
 console.log(data.split('\n').length - 1)
}
