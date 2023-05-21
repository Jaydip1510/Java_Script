let arr = "                    my name is jaydip mawkwana                 ";
document.write("String length is:-"+arr.length+"<br>");
let arr2 = arr.trimStart();
document.write("string is:-"+arr2+"<br>");
document.write("length is:-"+arr2.length+"<br>");

let ch = "jaydip";
document.write("after padstart is:-"+ch.padEnd("7","@"));