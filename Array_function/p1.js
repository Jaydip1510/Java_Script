let arr = ["abc","pqr","stu","xyz","def"];
let i;
// let arr2 = arr.toString();
// document.write("array to string is:-"+arr2+"<br><br>");

// arr.push("jay");

// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

arr.pop();
for(i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}
document.write("Array length is:-"+arr.length+"<br><br>");

// arr.shift();
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }
// arr.unshift("jaydip");
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

// arr[2] = "jaydip";
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

// delete arr[1];
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

// let a = ["hello","how"];
// let b = ["you"];
// let c = arr.concat(a,b);
// for(i=0;i<c.length;i++){
//     document.write(c[i]+"<br>");
// }

// arr.splice(1,2,"jaydip","makwana");
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

let array= [45,65,85,98,75,32,15,29,56];
array.sort();
d = array.reverse();
for(i=0;i<array.length;i++){
    document.write(array[i]+"<br>");
}