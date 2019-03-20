let string = process.argv[2];
let interpersedString = "";
let delimiter = ",";
let index;
for(index = 0; index < string.length;index++){
  interpersedString = interpersedString+string[index]+delimiter;
}
console.log(interpersedString);
