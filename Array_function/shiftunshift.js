let arr = ["abc","xyz","pqr","how","are","you"];

//<----------first Element delete------------>
// arr.shift();
//  let i;
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }


//<---------first Element add----------->
// arr.unshift("jay");
//  for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
//  }


//<---------positionwish update----------->
// arr[4] = "wow";
//  for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>")
//  }


//<--------positionwish delete----------->
// delete arr[2];
// // for(i=0;i<arr.length;i++){
// //     document.write(arr[i]+"<br>");
// // }


// <----------marge two string----------->
// let b = ["hello","xyz"];
// let d = ["pqr"];
// let c = arr.concat(b,d);
//  for(i=0;i<c.length;i++){
//     document.write(c[i]+"<br>");
//  }


arr.splice(1,2,"jaydip","makwana");
for(i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}
// c.splice(0,2);
// document.write("----------After remove------------------------");
// for(i=0;i<c.length;i++){
//     document.write(c[i]+"<br>");
// }

// document.write("-----------After Sorting------------"+"<br>");
// // let arr_new = [40,35,100,250,67,4,5];
// // document.write(arr_new.sort(function(a,b){ return a-b}));
// // d = arr_new.reverse();
// // for(i=0;i<d.length;i++){
// //     document.write(d[i]+"<br>");
// // }

// let arr_new = ["xyz","abc","pqr","def"];
// arr_new.sort();
// for(i=0;i<arr_new.length;i++){
//     document.write(arr_new[i]+"<br>");
// }