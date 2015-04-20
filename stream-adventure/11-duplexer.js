var childProcess = require('child_process');
var duplex = require('duplexer')

module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    var child = childProcess.spawn(cmd, args)

    //duplexer
    //join the stdin and stdout of the child process in a single stream
    //return the stream
    var duplexStream = duplex(child.stdin, child.stdout)
    return  duplexStream
}
