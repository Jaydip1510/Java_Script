let arr = [43,23,33,12,5];
let arr2 = arr.map(myfun);
function myfun(val,txt){
    document.write("value is "+val+"---"+txt+"<br>");
}
 
let arr3 = arr.reduceRight(myfun2);
function myfun2(v,t){
      return v+t;
}
document.getElementById("demo").innerHTML ="ReduceRight function is:-"+arr3;

// let arr4 = arr.reduce(myfun);
// function myfun(t,v){
//      return t+v;
// }
// document.getElementById("demo").innerHTML ="Reduce is:-"+arr4;