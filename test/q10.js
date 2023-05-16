function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function findPrimesInRange(start, end) {
    var primes = [];
  
    for (let number = start; number <= end; number++) {
      if (isPrime(number)) {
        primes.push(number);
      }
    }
  
    return primes;
  }
  
  
  let start = 100;
  let end = 200;
  
  let primeNumbers = findPrimesInRange(start, end);
  document.write(primeNumbers);