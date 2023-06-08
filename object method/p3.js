let student = {
    fname : "jaydip",
    lname : "makwana",
    age : "25",
    address : "panshina",

    fullname : function(){
        return this.fname+" "+this.lname;
    }
};
document.write('fullname is:-'+student.fullname()+"<br>");
document.write('student Age is:-'+student.age+"<br>");
document.write('student Address is:-'+student.address+"<br>");


