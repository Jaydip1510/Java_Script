let b = [1, 3, 5, 7, 9];

let doubled = b.map(function(num) {
  return num * 2;
});

let tripled = b.map(function(num) {
  return num * 3;
});

document.write("Array Element is:-"+doubled+"<br>"); 
document.write("Array Element is:-"+tripled);