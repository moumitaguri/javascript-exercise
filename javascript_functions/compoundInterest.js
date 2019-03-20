let principal = +process.argv[2];
let rate = +process.argv[3];
let time = +process.argv[4];
const compound = function(pr,ra,ti){
  let amount = pr*(Math.pow((1+ra/100),ti));
  let interest = amount - pr;
  return interest;
}
let compoundInterest = compound(principal,rate,time);
console.log(compoundInterest);
