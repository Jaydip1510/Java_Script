let units = prompt("Enter units:-"); 

let price;

if(units >= 0 && units <= 100) {
  price = units * 4.90;
} else if(units > 100 && units <= 500) {
  price = 100 * 4.90 + (units - 100) * 5.50;
} else if(units > 500 && units <= 1000) {
  price = 100 * 4.90 + 400 * 5.50 + (units - 500) * 6.15;
} else {
  document.write("Invalid input. Units should be between 0 and 1000.");
}

document.write("Price is" + price.toFixed(2));