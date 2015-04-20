function curryN(fn, n) {
  // SOLUTION GOES HERE

  // Idea 1
  // use a reduce to construct a return function
  // keep pushing functions into the result
  // while reducing

  // Idea 2
  // use recursion
  // return a function in each step
  // call curry on the inner scope of the function

  if(n === undefined) {
    n = fn.length
  }

  if (n > 0) {
    return function (arg) {
      return curryN(fn.bind(null, arg), n - 1)
    }
  } else {
    return fn()
  }

}

module.exports = curryN
