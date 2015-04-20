function reduce(arr, fn, initial) {

  /* This solution uses  a helper of sorts */
  // function recursiveReduce(previousValue, currentPosition) {
  //   // recursion end conditions
  //   if(currentPosition == arr.length - 1) {
  //     // return
  //     return fn(previousValue, arr[currentPosition], currentPosition, arr)
  //   } else {
  //     // normal case
  //     // recursion -> reduce call goes here
  //     return recursiveReduce(
  //       fn(previousValue, arr[currentPosition], currentPosition, arr),
  //       currentPosition + 1
  //     )
  //   }
  // }
  //
  // return recursiveReduce(initial, 0)

  /* This solution doesn't use a 'helper' and goes hardcore functional*/
  /* it just feels like a frigging 'pseudo' anonymous helper */
  /* that exists only in the context  of the frigging return statement  */
  /* still not sold on the idea that this is better */
  return (function recursiveReduce(currentPosition, currentValue) {
    if(currentPosition > arr.length - 1) {
      return currentValue
    } else {
      return recursiveReduce(
        currentPosition + 1,
        fn(currentValue, arr[currentPosition], currentPosition, arr)
      )
    }

  })(0, initial) //this last line is a 'closure' (or apply params)

}
module.exports = reduce
