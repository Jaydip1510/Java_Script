class student{
      constructor(rollno,name,age,address){
        this.rollno = rollno;
        this.name = name;
        this.age = age;
        this.address = address;
      }
      displaydata(){
        document.write('Your Rollnumber is:-'+this.rollno);
        document.write('<br>Your name is:-'+this.name);
        document.write('<br>Your age is:-'+this.age);
        document.write('<br>Your address is:-'+this.address);
        
      }

}
let s1 = new student("14","jaydip","25","panshina");
s1.displaydata();
