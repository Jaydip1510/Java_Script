class emp{
      constructor(id,name,age){
             this.id = id;
             this.name = name;
             this.age = age;
      }
    //   displaydata(){
    //       return this.id+"---"+this.name+"---"+this.age;
    //   }
            
}
let a = new emp(101,"jaydip","25");
document.write("Data is:-"+a.displaydata());

emp = class{
     constructor(id,name,age){
           this.id = id;
           this.name = name;
           this.age - age;
     }
    //       displaydata(){
    //       return this.id+"---"+this.name+"---"+this.age;
    //    }
       
};
emp.prototype.displaydata = function(){
      return this.id+"---"+this.name+"---"+this.age;
}
let obj = new emp(1204,"jaydip",26);
document.write("disp data is:-"+obj.displaydata());
             