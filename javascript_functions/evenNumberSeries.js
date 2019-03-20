let limit = +process.argv[2];
const even = function(num){
  if(num % 2 == 0){
    return num;
  }
}
for(let index=0;index<=limit;index+=2){
  let isEven = even(index);
  console.log(isEven);
}
