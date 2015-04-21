var uniq = require('uniq')

function returnUniqueArray (inputStr) {
  var array = inputStr.split(',')
  return uniq(array)
}


module.exports = returnUniqueArray
