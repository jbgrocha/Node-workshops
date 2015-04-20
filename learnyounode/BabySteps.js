if(process.argv.length > 2) {
  var result = 0;
  for(var i = 2; i < process.argv.length; i++) {
    result += parseInt(process.argv[i]);
  }
  console.log(result);
}
