var ws = require('websocket-stream');

var wsServerAdress = `ws://localhost:8099`

//create websocket stream
var wsStream = ws(wsServerAdress)

//write hello\n and end the stream
wsStream.end('hello\n')
