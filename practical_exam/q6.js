let m1 = prompt("Enter Mark m1:-");
let m2 = prompt("Enter Mark M2:-");
let m3 = prompt("Enter Mark m3:-");

total = parseInt(m1)+parseInt(m2)+parseInt(m3);
document.write("Total is:-"+total+"<br>");

let per = total/3;
document.write("Persantage is:-"+per+"<br>");

if(per>=90)
        document.write("Grade A+");
    else if(per>=80 && per<90)
        document.write("Grade A");
    else if(per>=70 && per<80)
        document.write("Grade B");
    else if(per>=60 && per<70)
        document.write("Grade C");
    else if(per>=50 && per<60)
       document.write("Grade D");
   else
      document.write("Fail");