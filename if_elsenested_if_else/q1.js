let no = prompt("Enter Any Number:-");
if(no >='a' && no <='z' || no >='A' && no <='Z'){
    document.write(no+"&nbspis alphabetic");
}else if(no >= '0' && no<='9'){
    document.write(no+"&nbspis digit");
}else{
    document.write(no+"&nbspis Special Character");
}