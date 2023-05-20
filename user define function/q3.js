function meter(){
   let a = prompt("Enter the value:-");

   let b = a*3.280;
   document.write("Meter to foot convert is:-"+b+"<br>");
}
meter();

function celsius(){
   let celsius = prompt("enter the temperature of celsius:-");
   let fahrenheit = (celsius * 1.8)+32;
   celsius = parseFloat(celsius);
   document.write("celsius to fahrenheit is:-"+fahrenheit+"<br>");
}
celsius();

function dollar(){
  let rupees = prompt("Enter the value:-");
  let dollar = 82.43;
  let convert = rupees*dollar;
  rupees = parseInt(rupees);
  document.write("doller to rupees is:-"+convert);

}
dollar();

