class emp{
       constructor(id,name,age,address){
          this.id = id;
          this.name = name;
          this.age = age;
          this.address = address;
       }
       display(){
            document.write('Your id is:-'+this.id);
            document.write('<br>Your name is:-'+this.name);
            document.write('<br>Your age is:-'+this.age);
            document.write('<br>Your address is:-'+this.address);    
            
       }
       
}
let e1 = new emp("1204","jaydip","25","panshina");
e1.display();