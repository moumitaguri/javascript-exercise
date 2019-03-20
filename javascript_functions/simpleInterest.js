let principal = +process.argv[2];
let rate = +process.argv[3];
let time = +process.argv[4];
const simpleInterest = function(pr,ra,ti){
  return (pr*ra*ti)/100;
}
let interest = simpleInterest(principal,rate,time);
console.log(interest);
