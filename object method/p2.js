let student = {
     fname : "jaydip",
     lname : "makwana",
     age : 25,
     gender : "male",
     address : "limbdi",

     fullname : function(){
        return this.fname+" "+this.lname;
     }
};
student.rollno = 25;
document.write('fullname is:-'+student.fullname()+"<br>");
document.write('age is:-'+student.age+"<br>");
document.write('gender is:-'+student.gender+"<br>");
document.write('Address is:-'+student.address+"<br>");
document.write('roll_no is:-'+student.rollno);




