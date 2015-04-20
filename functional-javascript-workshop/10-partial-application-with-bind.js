module.exports = function(namespace) {
  //console is the 'this context' of log()
  return console.log.bind(console, namespace)
}
