let a = [5,10,15,8,4,20];
let b = a.map(function(i){
     return i**3;
});
document.write(b+"<br>");

// let b = a.map((i)=>i**2);
// let txt = '';
// b.forEach(function(val){
//  txt += val+"<br>";
// });
// document.getElementById('demo').innerHTML = txt;

let c = a.filter(function(i){
     return i%2 == 0;
});
c.forEach(function(v){
    document.write(v+"<br>");
});

let d = a.reduceRight(function(t,v){
    return t+v;
});
document.write('<br>Total is:-'+d+"<br>");
if(a.includes(50)){
    document.write('value found'); 
}else{
    document.write('no value found');
    
}


