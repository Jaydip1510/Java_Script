let arr = ["abc","xyz","pqr","how","are","you"];
arr.shift();
let i;
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }
arr.unshift("jay");
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }
arr[4] = "wow";
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>")
// }
delete arr[2];
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

let b = ["hello","xyz"];
let d = ["pqr"];
let c = arr.concat(b,d);
// for(i=0;i<c.length;i++){
//     document.write(c[i]+"<br>");
// }
c.splice(2,2+"jaydip","makwana");
for(i=0;i<c.length;i++){
    document.write(c[i]+"<br>");
}
c.splice(0,2);
document.write("----------After remove------------------------");
for(i=0;i<c.length;i++){
    document.write(c[i]+"<br>");
}

document.write("-----------After Sorting------------"+"<br>");
let arr_new = [40,35,100,250,67,4,5];
document.write(arr_new.sort(function(a,b){ return b-a}));
d = arr_new.reverse();
for(i=0;i<d.length;i++){
    document.write(d[i]+"<br>");
}