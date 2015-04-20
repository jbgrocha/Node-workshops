function repeat(operation, num) {
  // My solution (did 236 operations)
  // timeout is set after each call
  // apparently cuts down operations into half
  setTimeout(function () {
    if (num <= 0) {
      return
    }
    operation()
    return repeat(operation, --num)
  })

  // Alternative implementation
  // 410 operations
  // function recursion() {
  //   if (num <= 0) {
  //     return
  //   }
  //   operation()
  //   return repeat(operation, --num)
  // }
  //
  // if(num % 10 === 0) {
  //   setTimeout(recursion)
  // } else {
  //   recursion()
  // }


  // Official solution (did 421 operations)
  // Mostly due to only relinquishing control every x operations
  // while i relinquish control every operation
  // if (num <= 0) return
  //
  //     operation()
  //
  // // release control every 10 or so
  // // iterations.
  // // 10 is arbitrary.
  // if (num % 10 === 0) {
  //   setTimeout(function() {
  //     repeat(operation, --num)
  //   })
  // } else {
  //   repeat(operation, --num)
  // }


}

module.exports = repeat
