let arr = ["hi","how","are","you","jaydip"];
//length

let ch = arr.length;
document.write("Array length is:-"+ch+"<br>");

//convert array into string
let a = arr.toString();
document.write("Array is:-"+a+"<br>");

//add element from last

arr.push("hello");
let i;
for(i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}
//remove element from last
arr.pop();
for(i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}


