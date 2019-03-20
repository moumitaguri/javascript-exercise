let lowerRange = 3;
let upperRange = 20;
let index,sum = 0;
console.log("sum of even numbers in",upperRange,"-",lowerRange);
for(index=upperRange;index>=lowerRange;index--){
  if(index%2 == 0){
    sum+=index;
  }
}
console.log(sum);
