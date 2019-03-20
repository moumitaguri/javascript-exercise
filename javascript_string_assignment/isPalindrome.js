let string = process.argv[2];
let checkString = string;
let stringIndex;
let checkIndex;
let count = 0;
let isPalindrome = false;
for(stringIndex = string.length; stringIndex > 0; stringIndex--){
  checkIndex = checkString.length - stringIndex;
  if(string[stringIndex-1] == checkString[checkIndex]){
   count++;
  }
}
if(count == string.length){
  isPalindrome = true;
}
if(isPalindrome){
  console.log("given string is palindrome");
}else{
  console.log("given string is not palindrome");
}
