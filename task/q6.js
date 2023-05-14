let a = prompt("Enter Value of A:-");
let b = prompt("Enter Value of B:-");

let ch = prompt("Enter The Operator(+,-,*,/,%");
let res;

switch(ch){
          case '+':
               res = parseInt(a)+parseInt(b);
               document.write("Addition is:-"+res);
               break;
          case '-':
               res = a - b;
               document.write("Subtraction is:-"+res);
               break;
          case '*':
               res = a * b;
               document.write("Multiplication is:-"+res);
               break;
          case '/':
               res = a / b;
               document.write("Division is:-"+res);
               break;
          case '%':
               res = a % b;
               document.write("Moduals is:-"+res);
               break;
          default:
               document.write("Invalid operator entered!");
               break;

}