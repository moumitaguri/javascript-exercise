let principal = 5000;
let rate = 10;
let time = 3;
console.log("sum,rate,time(in years) are",principal,rate,time);
let amount, compoundInterest;
amount = principal*Math.pow((1+(rate/100)),time);
compoundInterest = amount - principal;
console.log("amount is",amount);
console.log("CI is",compoundInterest);
