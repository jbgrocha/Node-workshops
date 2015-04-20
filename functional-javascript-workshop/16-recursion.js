function getDependencies(tree) {
  var dependencies = extractDependencies(tree, 0)
  // eliminate  duplicates
  dependencies = dependencies.reduce(eliminateDuplicates, [])
  return dependencies.sort()
}

function extractDependencies(tree, depPos) {
  // first level
  if(tree != undefined) {
    // the tree is not empty
    if(tree.dependencies != undefined) {
      // get dependencies
      var depNames = Object.keys(tree.dependencies)
      if(depPos < depNames.length) {
        var dependencyName = depNames[depPos]
        var dependencyVersion = tree.dependencies[depNames[depPos]].version
        var dependency = dependencyName + '@' +  dependencyVersion
        var subDeps = tree.dependencies[depNames[depPos]]
        return [dependency].concat(
          // dependencies of current dependency node
          extractDependencies(subDeps, 0)
        ).concat(
          // sibling dependencies
          extractDependencies(tree, depPos + 1)
        )
      } else {
        return []
      }
    } else {
      // empty dependencies object
      return []
    }
  } else {
    // empty tree
    return []
  }
}

function eliminateDuplicates(previousValue, currentValue, index, array) {
  var result = previousValue
  if(result.indexOf(currentValue) < 0) {
    result = previousValue.concat(currentValue)
  }
  return result
}

module.exports = getDependencies
