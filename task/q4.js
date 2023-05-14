let a = prompt("Enter Value of A:-");
let b = prompt("Enter Value of B:-");
let c = prompt("Enter Value of C:-");

if(a>b && a>c){
    document.write(a+"&nbspA is Maximum");
}
else if(b>c){
    document.write(b+"&nbspB is Maximum");
}else{
    document.write(c+"&nbspC is Maximum");
}