let detail = {
    fname : "jaydip",
    lname : "makwana",
    address : "panshina",
    age : "25",
    fullname : function(){
        return this.fname+" "+this.lname;
    },
    get getname(){
        return detail.lname.toUpperCase();
    },
    set setname(newval){
        this.fname.newval;
    }
};
document.write("Your fullname is:-"+detail.fullname()+"<br>");
detail.fname = "dhoni";
document.write("last name is:-"+detail.getname+"<br>");
document.write("first name is:-"+detail.fname);