let term = +process.argv[2];
const fib = function(number){
  if(number == 0){
    return 0;
  }else if(number == 1){
    return 1;
  }else{
    return fib(number-1) + fib(number-2);
  }
}
let index = 0;
while(index < term){
  let findFib = fib(index);
  index++;
  console.log(findFib);
}
