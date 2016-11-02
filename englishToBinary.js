function toBinary(str){
 let result = "";
 str.split('').forEach(function(val){
   result += Number(val.charCodeAt()).toString(2) + " ";
 })
 return result.substr(0, result.length-1); //use String method substr to eliminate the last space from result
}

//toBinary("Hello World!");