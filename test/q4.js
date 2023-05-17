const ch = prompt("Enter a character:-");

if(ch >= 'a' && ch<='z' || ch >='A' && ch <= 'Z' ){
    if(ch == 'a' || ch == 'e'  || ch == 'i' || ch =='o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'){
      document.write(ch+"&nbspis Vowel" + "<br>");
    }
    else{
      document.write(ch+"&nbspis Consonant" + "<br>");
    }
}else{
     document.write("Invalid Character");
}

