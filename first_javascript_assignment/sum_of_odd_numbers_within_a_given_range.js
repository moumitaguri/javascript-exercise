let lowerRange = 3;
let upperRange = 20;
let index,sum = 0;
console.log("sum of odd numbers in",lowerRange,"-",upperRange);
for(index=lowerRange;index<=upperRange;index++){
  if(index%2 != 0){
    sum+=index;
  }
}
console.log(sum);
