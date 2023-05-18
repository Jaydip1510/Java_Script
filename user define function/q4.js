const num = prompt("Enter Number:-");

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

const fact = factorial(num);
document.write("Factorial of:-"+fact+"<br>");

function fibonacciSeries(n) {
    let fibonacci = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  
    return fibonacci;
  }
  const fibSeries = fibonacciSeries(num);
  document.write("Fibonacci series to:-"+fibSeries);  