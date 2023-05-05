let a,b,c,ch;
document.write("1.Addition<br>");
document.write("2.Subtraction<br>");
document.write("3.multiplication<br>");
document.write("4.division<br>");
document.write("Enter your choice:-<br>");
let userInput = prompt("Enter A & b:"+a,b);
switch (ch)
{
case 1: c=a+b;
document.write("Addition is"+c);
    break;
case 2: c=a-b;
document.write("Subtraction is"+c);
    break;
case 3: c=a*b;
document.write("Multiplication is"+c);
    break; 
case 4: c=a/b;
document.write("division is"+c);
    break;     

default:
    document.write("\nInvalid choice");
    break;
}
