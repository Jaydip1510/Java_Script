class emp{
    constructor(name,age,salary){
          this.name = name;
          this.age=age;
          this.salary = salary;
     
    }
    displaydata(){
          document.write('Your name is:-'+this.name);
          document.write('<br>Your Age is:-'+this.age);
          document.write('<br>Your Salary is:-'+this.salary);       
    }

}
let e1 = new emp("Jaydip","25","25000");
e1.displaydata();