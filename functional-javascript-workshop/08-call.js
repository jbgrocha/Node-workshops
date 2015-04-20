function duckCount() {
  // The `arguments` variable, available in every function,
  // is an *Object* that quacks like an *Array*:
  //
  //   {
  //     0: 'argument0',
  //     1: 'argument1', // etc
  //     length: 2
  //   }

  var args = Array.prototype.slice.call(arguments)

  // Using reduce
  // Original implementation
  // return args.reduce( function (amountDucks, shroedingerDuck) {
  //     if(Object.prototype.hasOwnProperty.call(shroedingerDuck, 'quack')) {
  //       return amountDucks + 1
  //     } else {
  //       return amountDucks
  //     }
  //   }
  //   , 0)

  // Using filter
  // Simpler implementation inspired by the  solution
  // It is problably computationally lighter
  return args.filter( function (shroedingerDuck) {
    return Object.prototype.hasOwnProperty.call(shroedingerDuck, 'quack')
  }).length

}

module.exports = duckCount
