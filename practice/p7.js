let m1 = prompt("Enter mark m1:-");
let m2 = prompt("Enter mark m2:-");
let m3 = prompt("Enter mark m3:-");

let total = m1+m2+m3;
document.write("Total is:-"+total)

let per = total/3;
 if(per>=90)
           document.write("Grade A+<br>");
    else if(per>=80 && per<90)
          document.write("Grade A<br>");
    else if(per>=70 && per<80)
         document.write("Grade B");
    else if(per>=60 && per<70)
         document.write("Grade C");
    else if(per>=50 && per<60)
         document.write("Grade D<br>");
else
      document.write("Fail");

  
