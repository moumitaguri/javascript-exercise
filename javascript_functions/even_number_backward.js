let limit = +process.argv[2];
const even = function(num){
  if(num % 2 == 0){
    return num;
  }
}
for(let index=limit;index>=0;index-=2){
  let isEven = even(index);
  console.log(isEven);
}
