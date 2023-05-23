let emp = {
    fname : "jaydip",
    lname : "makwana",
    age : "25",
    fullname : function () {
        return this.fname+" "+this.lname;  
    
    },
    get getname(){
        return emp.fname.toUpperCase();
    },
    set setlname(newval){
        this.lname = newval;
    } 
};
document.write("your name is"+emp.getname+"<br>");
emp.setlname = "kanjariya";
document.write("your last name:-"+emp.lname);
