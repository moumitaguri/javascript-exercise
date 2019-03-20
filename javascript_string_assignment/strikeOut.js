let string = process.argv[2];
let character = process.argv[3];
let stringIndex;
let strikeOut = "";
let strikeOutCharacter = "-"
for(stringIndex = 0;stringIndex < string.length;stringIndex++){
  if(string[stringIndex] == character[0]){
    strikeOut+=strikeOutCharacter;
  }else{
    strikeOut+=string[stringIndex];
  }
}
console.log(strikeOut); 
