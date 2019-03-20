let term = 0;
let limit = process.argv[2];
let prime;
let primeCandidate;
let divisor;
let isPrime;
for(primeCandidate = 2;term < limit;primeCandidate++){
  isPrime = true;
  divisor = 2;
  while(divisor <= Math.sqrt(primeCandidate) && isPrime){
    if(primeCandidate % divisor == 0){
      isPrime=false;
    }
    divisor++;
  }
  if(isPrime){
    term++;
    prime = primeCandidate;
  }
}
console.log(term+"th prime number :",prime);
