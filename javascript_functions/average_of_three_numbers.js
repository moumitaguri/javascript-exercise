let num1 = +process.argv[2];
let num2 = +process.argv[3];
let num3 = +process.argv[4];
const average = function(num1,num2,num3){
  return (num1+num2+num3)/3;
}
findAverage = average(num1,num2,num3);
console.log(findAverage);
