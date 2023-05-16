function FibonacciSeries1(n) {
    var series = [];
    
    if (n === 1) {
      series.push(0);
    } else if (n === 2) {
      series.push(0, 1);
    } else {
      series.push(0, 1);
      
      for (var i = 2; i < n; i++) {
        var nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
      }
    }
    
    return series;
  }
  
  var n = 10; 
  var fibonacciSeries = FibonacciSeries1(n);
  document.write(fibonacciSeries);