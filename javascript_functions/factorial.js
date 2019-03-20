let number = process.argv[2];
const factorial = function(num){
  result = 1;
  for(let index=1;index<=number;index++){
    result *= index;
  }
  return result;
}

let factorialValue = factorial(number);
console.log(factorialValue);
