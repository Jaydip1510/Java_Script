class student{
      constructor(rollno,name,age,address){
        this.rollno=rollno;
        this.name=name;
        this.age = age;
        this.address = address;
      }
      disp(){
        document.write('Your Rollno is:-'+this.rollno+"<br>");
        document.write('Your name is:-'+this.name+"<br>");
        document.write('Your age is:-'+this.age+"<br>");
        document.write('Your address is:-'+this.address);
        
      }
}
let s1 = new student("12","jay","25","panshina");
s1.disp();
