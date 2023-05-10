let a = prompt("Enter Value of A:-")
let b = prompt("Enter Value of B:-");
let answer;

if (a == 5 && b == 10) {
  answer = 100;
} else if (a !== 5) {
  answer = 0;
} else {
  answer = 50;
}

document.write("Answer is:-"+answer);