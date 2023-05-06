let a = prompt("Enter the value of A:-");
let b = prompt("Enter the value of B:-");

let ch = prompt("Enter the operator (+, -, *, /):-");

let result;

switch(ch) {
  case '+':
    result = a + b;
    document.write("Addition is:-"+result);
    break;
  case '-':
    result = a - b;
    document.write("subtrction is:-"+result);
    break;
  case '*':
    result = a * b;
    document.write("multiplication  is:-"+result);
    break;
  case '/':
    result = a / b;
    document.write("division  is:-"+result);
    break;
  default:
    document.write("Invalid operator entered!");
}