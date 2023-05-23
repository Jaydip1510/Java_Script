let b = [1, 3, 5, 7, 9];

let arr1 = b.map(function(num) {
  return num * 2;
});

let arr2 = b.map(function(num) {
  return num * 3;
});

document.write("Array Element is:-"+arr1+"<br>"); 
document.write("Array Element is:-"+arr2);