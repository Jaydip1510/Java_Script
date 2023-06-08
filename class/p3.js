class emp{
    constructor(emp_id,emp_name,emp_age,emp_salary){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_age = emp_age;
        this.emp_salary = emp_salary;
    }
    empdata(){
        document.write('emp Id is:-'+this.emp_id+"<br>");
        document.write('emp Name is:-'+this.emp_name+"<br>");
        document.write('emp age is:-'+this.emp_age+"<br>");
        document.write('emp salary is:-'+this.emp_salary+"<br>");
    }
}
let e1 = new emp("1204","jaydip","25","30000");
e1.empdata();