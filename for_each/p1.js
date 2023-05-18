let a = [25,65,78,14,98,77];

// a.forEach(function(a){document.write("Element is:---"+a+"<br>");});
// function display(a,b){
// //     document.write("Element is:"+a+"---"+b+"<br>");
// }

a.forEach(function(val,i){
     document.write("Element is:"+i+"----"+val+"<br>");
});
document.write("Answer is:-"+a.includes(25)+"<br>");
document.write("index is:-"+a.indexOf(14));
