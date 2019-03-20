let lowerLimit = +process.argv[2];
let upperLimit = +process.argv[3];
const even = function(num){
  if(num % 2 == 0){
    return num;
  }
}
for(let index=lowerLimit;index<=upperLimit;index+=2){
  let isEven = even(index);
  console.log(isEven);
}
