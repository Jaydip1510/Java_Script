 let m1 = prompt("Enter mark m1:-");
 let m2 = prompt("Enter mark m2:-");
 let m3 = prompt("Enter mark m3:-");
 let m4 = prompt("Enter mark m4:-");
 let m5 = prompt("Enter mark m5:-");

 total = parseInt(m1)+parseInt(m2)+parseInt(m3)+parseInt(m4)+parseInt(m5);
 document.write("Total is:-"+total+"<br>")

 let per = total/5;
  if(per>=90)
           document.write("Grade A+");
     else if(per>=80 && per<90)
          document.write("Grade A");
     else if(per>=70 && per<80)
          document.write("Grade B");
    else if(per>=60 && per<70)
         document.write("Grade C");
     else if(per>=50 && per<60)
          document.write("Grade D<br>");
 else
       document.write("Fail");




