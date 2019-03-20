let firstNumber = 24;
let secondNumber = 36;
let index,gcd,lcm,product,match = 0;
console.log("two numbers :",firstNumber,",",secondNumber);
product = firstNumber * secondNumber;
for(index=firstNumber;index>=1;index--){
  if((firstNumber%index==0 && secondNumber%index==0) && match==0){
    gcd = index;
    match = 1;
  }
}
lcm = product/gcd;
console.log("gcd & lcm :",gcd,",",lcm);
