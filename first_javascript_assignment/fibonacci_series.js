let term = 10;
let fibValue;
let value1 = 0,value2 = 1;
let index;
console.log("fibonacci series upto",term,"th term");
for(index=1;index<=term;index++){
  if(index==1){
    fibValue = value1;
  }else if(index==2){
    fibValue = value2;
  }else{
    fibValue = value1 + value2;
    value1 = value2;
    value2 = fibValue;
  }
  console.log(index+"th term is "+fibValue);
}
