function doubleAll(numbers) {
  return numbers.map(doubler)
}

function doubler (number) {
  return number * 2
}

module.exports = doubleAll
