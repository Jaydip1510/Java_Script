let arr = [10,20,30,40,50,60,70,80,90];
arr.forEach(function(val,i){
    document.write("Element is:-"+i+"Value is"+val+"<br>");
})
document.write("index is:-"+arr.indexOf(50)+"<br><br><br>");


let arr1 = ["abc","pqr","xyz","jkl","stu"];
arr1.shift();

let i;
for(i=0;i<arr1.length;i++){
    document.write(arr1[i]+"<br>");
}

let arr2 = ["jay","raj","yes","arjun"];
arr2.unshift("dhoni");
for(i=0;i<arr2.length;i++){
    document.write(arr2[i]+"<br>");
}