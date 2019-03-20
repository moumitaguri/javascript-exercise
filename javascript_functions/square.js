let num = +process.argv[2];
const square = function(number){
  return number*number;
}
let squareValue = square(num);
console.log(squareValue);
