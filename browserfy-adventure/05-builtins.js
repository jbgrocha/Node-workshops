var url = require('url')
var querystring = require('querystring')

var address = prompt()
var parsedUrl = url.parse(address)
var parsedQuery = querystring.parse(parsedUrl.query)
console.log(url.resolve(parsedUrl.href, parsedQuery.file))
// console.log(url.resolve(parsedUrl, parsedQuery))
