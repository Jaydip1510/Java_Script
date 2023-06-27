class emp{
    constructor(empid,empname,empsalary,empaddress){
        this.empid = empid;
        this.empname = empname;
        this.empsalary = empsalary;
        this.empaddress = empaddress;
    }
    display(){
        document.write("Employee id is:-"+this.empid+"<br>");
        document.write("Employee name is:-"+this.empname+"<br>");
        document.write("employee salary is:-"+this.empsalary+"<br>");
        document.write("Employee address is:-"+this.empaddress+"<br>");
    }
}
let e1 = new emp("1204","jaydip","15000","panshina");
e1.display();