class student{
       constructor(rollno,name,age,salary){
        this.rollno=rollno;
        this.name=name;
        this.age=age;
        this.salary=salary;
       }
       display(){
        document.write('Your rollno is:-'+this.rollno);
        document.write('<br>Your name is:-'+this.name);
        document.write('<br>Your age is:-'+this.age);
        document.write('<br>Your salary is:-'+this.salary+"<br>");
          
       }
}
let s1 = new student("12","jaydip","25","20000");
s1.display();

 student = class{
       constructor(rollno,name,age,salary){
              this.rollno=rollno;
              this.name=name;
              this.age=age;
              this.salary=salary;
       }
};
student.prototype.display = function(){
       return this.salary;
}
let obj = new student(14,"jaydip",24,28000);
document.write("data is:-"+obj.display());
