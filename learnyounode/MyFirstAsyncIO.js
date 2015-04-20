var fs = require('fs');
var result = undefined;

function NewlineCount(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    var fileContentStr = fileContents.toString();
    result =  0;
    for (var i = 0; i < fileContentStr.length; i++){
      if(fileContentStr[i]==='\n') {
        result += 1;
      }
    }
    callback();
  });
}

function logResult() {
  console.log(result);
}

NewlineCount(logResult);
