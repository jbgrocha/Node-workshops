var helperModule = require('./06ModuleRefactor.js')

function printData(err, data) {
  data.forEach(function (file) {
    console.log(file)
  })
}

helperModule(process.argv[2], process.argv[3], printData)
