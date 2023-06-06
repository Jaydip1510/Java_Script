let a = [22,45,15,10,25];

a.forEach(function(val,i){
    document.write('element is:-'+i+"-----"+val+"<br>");
});

document.write('answer is:-'+a.includes(2)+"<br>");
document.write('answer is:-'+a.indexOf(15));

