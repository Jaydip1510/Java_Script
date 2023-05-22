let arr = ["jay","raj","yas","rv","rj"];
let i;
document.write("Array length is:-"+arr.length+"<br>");

// arr.pop();
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

// arr.push("jaydip");
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

// let arr1 = arr.toString();
// document.write("array to string is:-"+arr1+"<br>");

// arr.shift();
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

arr.unshift("arjun");
for(i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}

arr[2] = "makwana";
for(i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}
delete arr[5];
for(i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}
