let number = 5, multiplierLimit =20;
let multipliedValue,index;
console.log("multiplication table of",number);
for(index=1;index<=multiplierLimit;index++){
  multipliedValue = number*index;
  console.log(number+"*"+index+"="+multipliedValue);
}
