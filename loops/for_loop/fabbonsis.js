let first = 0;
let second = 1;
let third;
let i;
for(i=1;i<=10;i++){
    document.write(first+"<br>");
    third = first+second;
    first = second;
    second = third;
}