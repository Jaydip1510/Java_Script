let a = prompt("Enter Value of A:-");
let b = prompt("Enter Value of B:-");

let ch = prompt("Select The Operators(+,-,*,/,%)");

let c;
switch(ch){
           case '+':
                    c = a + b;
                    document.write("Addition is:-"+c);
                    break;
            case '-':
                   c = a - b;
                   document.write("Subtrction is:-"+c);
                   break;
            case '*':
                  c = a * b;
                  document.write("Multiplication is:-"+c);
                  break;
            case '/':
                  c = a / b;
                  document.write("Division is:-"+c);
                  break;
            case '%':
                  c = a % b;
                  document.write("Moduals is:-"+c);
                  break;
            default:
                 document.write("Invaild Choice");
                 break;
                   
            
}