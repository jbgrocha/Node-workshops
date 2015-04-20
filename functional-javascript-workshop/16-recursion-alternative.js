function getDependencies(tree) {
  var dependencies = extractDependencies(tree, [])
  // eliminate  duplicates
  dependencies = dependencies.reduce(eliminateDuplicates, [])
  return dependencies.sort()
}

function extractDependencies(tree) {
  var depsTree = tree && tree.dependencies || []
  var result = []

  Object.keys(depsTree).map(function extractDependency(depName) {
    var depVersion = depsTree[depName].version
    var dep = depName + '@' +  depVersion
    result = result.concat(dep).concat(
      extractDependencies(depsTree[depName]))
  })

  return result
}

function eliminateDuplicates(previousValue, currentValue, index, array) {
  var result = previousValue
  if(result.indexOf(currentValue) < 0) {
    result = previousValue.concat(currentValue)
  }
  return result
}

module.exports = getDependencies
