let userInput = prompt("Enter the week:- ");

switch (userInput) {
  case 'm':
    document.write("Monday");
    break;
  case 't':
    document.write("Tuesday");
    break;
  case 'w':
    document.write("Wednesday");
    break;
  case 'th':
    document.write("Thursday");
    break;
  case 'f':
    document.write("Friday");
    break;
  case 'sa':
    document.write("Saturday");
    break;
  case 'su':
    document.write("Sunday");
    break; 
  default:
    document.write("Invalid input. Please enter a letter for a day of the week.");
    break;
}
