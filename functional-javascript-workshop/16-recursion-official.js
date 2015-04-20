// I would problably just run a single sort after getting all the values
// This sorts the result array every single step of the recursion
function getDependencies(mod, result) {
  //turns the result into an empty array in case it wasn't passed
  result = result || []

  // pseudo C hardcoreness
  // the || [] is in case the tree is passed as undefined
  // the mod && mod.dependencies is a verification if the obj and the property
  // are both defined
  // so this turns the dependencies into an empty array if either
  // is undefined
  // otherwise it gets mod.dependencies (the right operand of the &&)
  var dependencies = mod && mod.dependencies || []
  Object.keys(dependencies).forEach(function getDeps(dep) {
    //dep key in the format required to append to result
    var key = dep + '@' + mod.dependencies[dep].version
    // if dep key does not exist in result
    // insert it
    if (result.indexOf(key) === -1)  {
      result.push(key)
    }
    //get sub Dependencies of inserted dep
    getDependencies(mod.dependencies[dep], result)
  })
  return result.sort()
}

module.exports = getDependencies
