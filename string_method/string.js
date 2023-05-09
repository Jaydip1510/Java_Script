let str="lorem ipusm dolor sit anet  sonsecter adipisicing elift,At,repellet mainred itaque";
document.write("Length of string is:-&nbsp"+str.length+"<br>");
document.write("UpperCase string is:-&nbsp"+str.toUpperCase()+"<br>");
document.write("LowerCase string is:-&nbsp"+str.toLowerCase()+"<br>");

let ch = str.slice(5,15);
document.write("slice function is:-"+ch+"<br>");

ch1 = str.slice(-20,-5);
document.write("slice function is:-"+ch1+"<br>");

ab = str.slice(5);
document.write("slice function is:-"+ab+"<br>");

ab = str.slice(-5);
document.write("Slice function is:-"+ab+"<br>");

ch1 = str.substr(10,5);
document.write("sub string function is :-"+ch1+"<br>");

abc = str.substr(-20);
document.write("sub string is:-"+abc+"<br>");

 text1 = "jaydip";
 text2 = "makwana";
 text3 = text1.concat("@",text2);
 document.write("Concat is:-"+text3+"<br>");

 





