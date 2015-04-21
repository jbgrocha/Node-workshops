module.exports = {
  parse: function (str) {
    var result = []
    var lines = str.split('\n')
    lines.forEach(function parseLine(line) {
      result.push(JSON.parse(line))
    })
    return result
  },
  stringify: function (rows) {
    var result = ''
    rows.forEach(function stringifyRow(row) {
      result = result + JSON.stringify(row) + '\n'
    })
    return result.slice(0, result.length - 1)
  }
}


// Official solution
// Smarter way of doing it
// apply map to the arrays and
// call it with the function you want to apply to each position
// return the result
// exports.parse = function (str) {
//   return str.split('\n').map(JSON.parse);
// };
//
// exports.stringify = function (rows) {
//   return rows.map(JSON.stringify).join('\n');
// };
