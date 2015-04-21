var ndjson = require ('./ndjson.js')

var objStr = prompt()
var objArray = prompt()
console.log(ndjson.parse(objStr))
console.log(ndjson.stringify(objArray))
