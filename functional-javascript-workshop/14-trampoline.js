// I need a better understanding of this technique
// basically  changes the call stack so that it  is simpler
// less vertical
// tail-end recursion
function repeat(operation, num) {
  return function() {
    if (num <= 0) {
      return
    } else {
      operation()
      return repeat(operation, --num)
    }
  }
}

function trampoline(fn) {
  while(fn && typeof fn === 'function') {
    fn = fn()
  }
}

module.exports = function(operation, num) {
  trampoline(function() {
    return repeat(operation, num)
  })
}
