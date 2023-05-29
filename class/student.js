class student{
       constructor(rollno,name,age){
        this.rollno=rollno;
        this.name=name;
        this.age=age;
       }
       display(){
        document.write('Your rollno is:-'+this.rollno);
        document.write('<br>Your name is:-'+this.name);
        document.write('<br>Your age is:-'+this.age);
        
       }

}
let s1 = new student("12","jaydip","25");
s1.display();

 student = class{
       constructor(rollno,name,age){
              this.rollno=rollno;
              this.name=name;
              this.age=age;
       }
};
student.prototype.display = function(){
       return this.id;
}
let obj = new student(102,"jaydip");
document.write('Data is:-'+obj.display());
