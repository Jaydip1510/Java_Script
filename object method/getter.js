let emp = {
    e_name : "jaydip",
    e_lname :"makwana",
    e_idno : "1204",
    e_age : "25",
    fullname : function(){
        return this.e_name+" "+this.e_lname+"<br>"+this.e_idno+"<br>"+this.e_age+"<br>";
    }
};
emp.salary = "20000";
emp.getinfo = function(){
    
}
document.write("fullname is:-"+emp.fullname());
document.write('salary is:-'+emp.salary);
