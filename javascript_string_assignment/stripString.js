let string = process.argv[2];
let stringIndex;
let strip = "";
for(stringIndex = 0; stringIndex< string.length; stringIndex++){
  if(string[stringIndex] != " "){
    strip = strip+string[stringIndex];
  }
}
console.log(strip);
