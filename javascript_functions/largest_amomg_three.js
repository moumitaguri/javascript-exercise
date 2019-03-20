let num1 = +process.argv[2];
let num2 = +process.argv[3];
let num3 = +process.argv[4];
const findLargest = function(num1,num2,num3){
  let largest = num1;
  if(num2 > largest){
    largest = num2;
  }
  if(num3 > largest){
    largest = num3;
  }
  return largest;
}
largestNumber = findLargest(num1,num2,num3);
console.log(largestNumber);
