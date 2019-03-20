let string = process.argv[2];
let consonants = "bcdfghjklmnpqrstvwxyz";
let stringIndex;
let consonantIndex;
let consonantCount = 0;
for(stringIndex = 0;stringIndex < string.length; stringIndex++){
  for(consonantIndex = 0; consonantIndex < consonants.length; consonantIndex++){
    if(string[stringIndex] == consonants[consonantIndex]){
      consonantCount++;
    }
  }
}
console.log("number of consonants",consonantCount);
