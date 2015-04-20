var fs = require('fs');
var fileBuffer = fs.readFileSync(process.argv[2]);
var fileContentStr = fileBuffer.toString();
var result =  0;
for (var i = 0; i < fileContentStr.length; i++){
  if(fileContentStr[i]==='\n') {
    result += 1;
  }
}
console.log(result);
