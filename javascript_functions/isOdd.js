let number = +process.argv[2];
const isOdd = function(num){
  let result = (number%2 == 1);
  return result;
}
let checkOdd = isOdd(number);
console.log(checkOdd);
