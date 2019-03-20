let number = +process.argv[2];
const multiply = function(num,index){
    return num*index;
}
for(let index=1;index<=10;index++){
  multipliedValue = multiply(number,index);
  console.log(multipliedValue);
}
