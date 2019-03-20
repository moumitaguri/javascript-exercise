let string = process.argv[2];
let stringIndex;
let reversedString = "";
for(stringIndex = string.length;stringIndex > 0;stringIndex--){
  reversedString = reversedString+string[stringIndex-1];
}
console.log(reversedString);
