let arr = [43,23,33,12,5];
// let arr2 = arr.map(myfun);
// function myfun(txt,val){
//     document.write("value is "+txt+"<br>");
// }
 
let arr3 = arr.reduceRight(myfun2);
function myfun2(t,v){
      return t+v;
}
document.getElementById("demo").innerHTML ="Reduce func:-"+arr3;