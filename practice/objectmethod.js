let emp = {
    fname : "jaydip",
    lname : "makwana",
    age : "25",
    idno : "1204",
    fullname : function(){
        return this.fname+" "+this.lname;
    },
    get getdata(){
        return emp.fname.toUpperCase();
    }, 
    set setdata(newval){
        this.lname = newval;
    }
}
document.write("fullname is:-"+emp.fullname()+"<br>");
document.write("first name is:-"+emp.getdata+"<br>");
emp.lname = "rathod";
document.write("last name is:-"+emp.lname);