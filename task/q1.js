let a = prompt("Enter Value of A:-");
let b = prompt("Enter Value of B:-");
let c = prompt("Enter Value of C:-");
let d = prompt("Enter Value of D:-");

if(a>b){
    if(a>c){
        if(a>d){
            document.write(a+"&nbspA is Maximum");
        }else{
            document.write(d+"&nbspD is Maximum");
        }          
    }else{
        if(c>d){
            document.write(c+"&nbspC is Maximum");
        }else
        {
            document.write(d+"&nbspD is Maximum");
        }
    }
}else{
     if(b>c){
        if(b>d){
            document.write(b+"&nbspB is Maximum");
        }
        else{
            document.write(d+"&nbspD is Maximum");
        }
     }else{
          if(c>d){
            document.write(c+"&nbspC is Maximum");
          }
          else{
            document.write(d+"&nbspD is Maximum");
          }
     }
}