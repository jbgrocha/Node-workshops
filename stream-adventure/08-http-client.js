var request = require('request')

var serverAdress = 'http://localhost:8099'

//Example: pipe a GET request into stdout
//request(serverAdress).pipe(process.stdout)

//create a post request
var req = request.post(serverAdress)

//pipe stdin into the post request and then pipe the result into stdout
process.stdin.pipe(request.post(req)).pipe(process.stdout)
