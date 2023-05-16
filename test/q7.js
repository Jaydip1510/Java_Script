const str1 = "Hello";
const charToCount = "l";
let count = 0;

for (let i = 0; i < str1.length; i++) {
  if (str1.charAt(i) === charToCount) {
    count++;
  }
}

document.write("Occurrences of ", charToCount + ":-", count);





