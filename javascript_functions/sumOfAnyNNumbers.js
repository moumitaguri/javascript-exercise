let lowerLimit = +process.argv[2];
let upperLimit = +process.argv[3];
const addition = function(num1,num2){
  let result = 0;
  for(let index=num1;index<=num2;index++){
    result += index;
  }
  return result;
}

let sum = addition(lowerLimit,upperLimit);
console.log(sum);
