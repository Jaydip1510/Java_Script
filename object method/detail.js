let det = {
    fname : "jaydip",
    lname : "makwana",
    address : "panshina",
    age : "25",
    fullname : function(){
        return this.fname+" "+this.lname;
    },
    get getname(){
        return det.lname.toUpperCase();
    },
    set setname(newval){
        this.fname.newval;
    }
};
document.write("Your fullname is:-"+det.fullname()+"<br>");
det.fname = "dhoni";
document.write("last name is:-"+det.getname+"<br>");
document.write("first name is:-"+det.fname);