let a=20,b=30,c=125,d=96;
if(a>b)
     document.write("A is maximum");
     else
     document.write("B is maximum<br>");
let m1=85;
    m2=65;
    m3=79;
let total=m1+m2+m3;
document.write("Total is:-"+total);
let per = total/3;
if(per>=80)
      document.write("Grade A+<br> ");
else if(per>=70 && per<80)
      document.write("Grade A<br>");
else if(per>=60 && per<70)
      document.write("Grade B");
else if(per>=50 && per<60)
      document.write("Grade C");
else
     document.write("Fail");

// maximum 4 value

if(a>b){
      if(a>c){
        if(a>d){
            document.write("A is maximum<br>");
        }else{
             document.write("D is maximum<br>");
        }
      }else{
          if(c>d){
            document.write("C is maximum<br>");
          }else{
            document.write("D is maximum<br>");
          }
      }
    }else{
          if(b>c){
            if(b>d){
                document.write("B is Maximum");
            }else{
                document.write("D is maximum");
            }
          }else{
              if(c>d){
                document.write("C is maximum");
              }else{
                document.write("D is maximum");
              }

          }
    }
