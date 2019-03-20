let startNumber = +process.argv[2];
let endNumber = +process.argv[3];
const multiply = function(start,end){
  let result = 1;
  let index = start;
  while(index<=end){
    result*=index;
    index++;
  }
  return result;
}
let multipliedValue = multiply(startNumber,endNumber);
console.log(multipliedValue);
