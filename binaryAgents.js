function binaryAgent(str) {
  let result = "";
  str.split(" ").forEach(function(val){
    result += String.fromCharCode(parseInt(val, 2));
  });
  return result;
}