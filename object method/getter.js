let emp = {
    e_name : "jaydip",
    e_lname :"makwana",
    e_idno : "1204",
    e_age : "25",
    fulldetail : function(){
        return this.e_name+" "+this.e_lname+" "+this.e_idno+" "+this.e_age;
    }
};
emp.salary = "20000";
emp.getinfo = function(){
    
}
document.write("fulldetails is:-"+emp.fulldetail());