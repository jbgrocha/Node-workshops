function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(reduceHandler, {})
}

function reduceHandler(countMap, word) {
  if(countMap[word] == null) {
    countMap[word] = 1
  } else {
    countMap[word] += 1
  }
  return countMap
}

module.exports = countWords
