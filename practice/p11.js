function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }
  

  let number1 = prompt("Enter Value of a:-");
  let number2 = prompt("Enter Value of b")
  
  document.write("Addition:", add(number1, number2)+"<br>");
  document.write("Subtraction:", subtract(number1, number2)+"<br>");
  document.write("Multiplication:", multiply(number1, number2)+"<br>");
  document.write("Division:", divide(number1, number2));