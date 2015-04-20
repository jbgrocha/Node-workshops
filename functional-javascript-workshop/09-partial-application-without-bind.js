// Verify if this could be used for a partial applicaton
function logger(namespace) {
  return function () {
    var args = Array.prototype.slice.call(arguments)
    //console is the 'this context' of log()
    console.log.apply(console, [namespace].concat(args))
  }
}

module.exports = logger
