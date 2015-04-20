var http = require('http')
var request = require('request')

var couchdbPath = 'http://localhost:5984/'
var dbName = process.argv[2]

var h = {
  accept: 'application/json',
  'content-type': 'application/json'
}

var options = {
  uri: couchdbPath + dbName,
  method:'PUT',
  headers:h
}

function callback(err, response, body) {
  if (err) {
    throw err
  }
  if (response.statusCode !== 201) {
    throw new Error("Could not create database. " + body)
  }
}


request(options, callback).end()
