function meterToFoot(meter) {
    return meter * 3.281;
  }
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  function dollarToRupees(dollar) {
    
    const conversionRate = 73.99;
    return dollar * conversionRate;
  }
  
  document.write(meterToFoot(5)); 
  document.write(celsiusToFahrenheit(25)); 
  document.write(dollarToRupees(10)); 