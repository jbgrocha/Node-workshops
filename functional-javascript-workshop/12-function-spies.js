function Spy(target, method) {
  var spyObject = {count: 0}
  //must use target[method]
  //method is just the methods name...
  //I was being so frigging dumb
  //It really is annoying not having the data types right in front of you
  //that would really have prevented my mistake
  var oldMethod = target[method]

  target[method] = function () {
    spyObject.count += 1
    return oldMethod.apply(target, arguments)
  }

  return spyObject
  
 }

 module.exports = Spy
