// Relies on the simplification of the auxiliary function
// as it was stated in the exercise
module.exports = function arrayMap(arr, fn) {
  return arr.reduce( function (result, item) {
      return result.concat(fn(item))
    }
    , [])
}



// Official Solution
// It is more generic
// Since it relies on the function having the expected form for reduce

// module.exports = function map(arr, fn) {
//   return arr.reduce(function(acc, item, index, arr) {
//     return acc.concat(fn(item, index, arr))
//   }, [])
// }
