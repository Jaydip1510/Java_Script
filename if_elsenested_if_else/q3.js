let a = prompt("Enter Value A:-");
let b = prompt("Enter Value B:-");
let c = prompt("Enter Value C:-");
let d = prompt("Enter Value D:-");

if(a>b){
    if(a>c){
        if(a>d){
            document.write(a+"&nbspA is Maximum");
        }else{
            document.write(d+"&nbspD is maximum");
        }
    }else{
          if(c>d)
          {
             document.write(c+"&nbspC is maximum");   
          }else{
            document.write(d+"&nbspD is maximum");
          }
    }
}else{
        if(b>c){
              if(b>d)
              {
                document.write(b+"&nbspB is maximum");
              }else{
                document.write(d+"&nbspD is maximum");
              }
        }else{
              if(c>d){
                document.write(c+"&nbspC is maximum");   
              }else{
                document.write(d+"&nbspD is maximum");
              }
        }
}