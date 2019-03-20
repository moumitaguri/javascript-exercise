let string = process.argv[2];
let vowelString = "aeiou";
let stringIndex;
let vowelIndex;
let vowelCount = 0;
for(stringIndex = 0;stringIndex < string.length; stringIndex++){
  for(vowelIndex = 0; vowelIndex < vowelString.length; vowelIndex++){
    if(string[stringIndex] == vowelString[vowelIndex]){
      vowelCount++;
    }
  }
}
console.log("number of vowels",vowelCount);
