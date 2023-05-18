function add(num1, num2) {
     return num1 + num2;
   }
   
   function sub(num1, num2) {
     return num1 - num2;
   }
   
   function mul(num1, num2) {
     return num1 * num2;
   }
   
   function div(num1, num2) {
     return num1 / num2;
   }
   
 
   let number1 = prompt("Enter Value of a:-");
   let number2 = prompt("Enter Value of b")
   
   document.write("Addition:", add(number1, number2)+"<br>");
   document.write("Subtraction:", sub(number1, number2)+"<br>");
   document.write("Multiplication:", mul(number1, number2)+"<br>");
   document.write("Division:", div(number1, number2));