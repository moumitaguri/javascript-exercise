let string = process.argv[2];
let index;
let delimiter = ",";
let digraphs = "";
for(index = 0;index < string.length;index++){
  if(string[index] == string[index+1]){
    digraphs+=string[index]+string[index+1]+delimiter;
  }
}
console.log(digraphs);
