let emp = {
    fname : "jaydip",
    lname : "makwana",
    age : "25",
    fullname : function(){
        return this.fname+" "+this.lname;
    },
    get getdata(){
        return this.fname.toUpperCase();
    },
    set setdata(newval){
        this.lname = newval;
    },
    id : "1204"
    


};
document.write("fullname is:-"+emp.fullname()+"<br>");
document.write("first name is:-"+emp.getdata+"<br>");
emp.lname = "rawte";
document.write("last name is:-"+emp.lname);