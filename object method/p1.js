let emp = {
    fname : "jaydip",
    lname : "makwana",
    age : "25",
    fullname : function(){
       return this.fname+" "+this.lname;
    },
    get getdata(){
           return this.lname.toUpperCase();
    },
    setname(newval){
         this.fname.newval;
    }
};
document.write("fullname is:-"+emp.fullname()+"<br>");
document.write("last name is:-"+emp.getdata+"<br>");
emp.fname = "arjun";
document.write("update name is:-"+emp.fname);