var uniq = require('uniq')

var fetchedString = prompt()
var array = fetchedString.split(',')
uniq(array)
console.log(array)
