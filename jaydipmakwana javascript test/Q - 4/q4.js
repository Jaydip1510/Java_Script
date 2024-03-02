// Check character is vowel or consonant If user enter except a to z then display Invalid character in javascript.

const x = prompt("Enter a character if you want to check vowel or consonant : ");

if (x >= 'a' && x <= 'z' || x >= 'A' && x <= 'Z') {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'u')
        document.write("Vowel" + "</br>");
    else
        document.write("Consonant" + "</br>");
}else{
    document.write("Invalid Character");
}







