let lowerRange =3;
let upperRange = 30;
let index,nthTerm =4;
console.log("every",nthTerm,"th number in",lowerRange,"-",upperRange);
for(index=lowerRange;index<=upperRange;index++){
  console.log(index);
  index+=nthTerm -1;
}
