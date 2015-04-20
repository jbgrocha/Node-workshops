// call calls the context(a function) on its argument
// ex: context.call(argument)
// bind binds a context and/or arguments to a function
// ex: function.bind(context, arg1, arg2, etc..)
// This implies that i'm returning the result of
// binding Array.prototype.slice as a context into call
// therefore creating the normal slice call
// ex: slice.call
// afterwards, when i need to use it
// the binding is executed normally
// ex:  var slice = Function.prototype.call.bind(Array.prototype.slice)
//      slice([1,2,3,4,5], 1, 2)
module.exports = Function.prototype.call.bind(Array.prototype.slice)
