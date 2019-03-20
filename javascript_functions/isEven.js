let num = process.argv[2];
const isEven = function(number){
  let result = (number % 2 == 0);
  return result;
}
let checkEven = isEven(num);
console.log(checkEven);
