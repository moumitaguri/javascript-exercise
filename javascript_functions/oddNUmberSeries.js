let limit = +process.argv[2];
const odd = function(num){
  if(num % 2 == 1){
    return num;
  }
}
for(let index=1;index<=limit;index+=2){
  let isOdd = odd(index);
  console.log(isOdd);
}
