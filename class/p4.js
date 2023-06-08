class emp{
     constructor(emp_id,emp_name,emp_address,emp_salary){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_address=emp_address;
        this.emp_salary = emp_salary;
     }
     disp(){
        document.write('employee_id is:-'+this.emp_id+"<br>");
        document.write('employee_name is:-'+this.emp_name+"<br>");
        document.write('employee address is:-'+this.emp_address+"<br>");
        document.write('employee salary is:-'+this.emp_salary);
        
     }
};
let e1 = new emp("1204","jaydip","panshina","25000");
e1.disp();