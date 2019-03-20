let lowerLimit = +process.argv[2];
let upperLimit = +process.argv[3];
const odd = function(num){
  if(num % 2 == 1){
    return num;
  }
}
for(let index=lowerLimit;index<=upperLimit;index+=2){
  let isOdd = odd(index);
  console.log(isOdd);
}
