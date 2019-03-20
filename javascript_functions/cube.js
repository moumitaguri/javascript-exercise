let num = +process.argv[2];
const cube = function(number){
  let result = number*number*number;
  return result;
}
let cubeValue = cube(num);
console.log(cubeValue);
