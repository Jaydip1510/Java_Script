class emp{
      constructor(id,name,age){
             this.id = id;
             this.name = name;
             this.age = age;
      }
      displaydata(){

          return this.id+"<br>Data is:-"+this.name+"<br>Data is:-"+this.age+"<br>";
          
      }
            
}
let a = new emp();
let arr = [];
      function savedata(){
             var data = document.getElementById('t_name').value;
             var age = document.getElementById('t_age').value;
             
             let id = arr.length; 
             console.log("Array Length =>"+id);
             if(id === 0){ id = 1; }else{ id = id + 1;}
             let obj = new emp(id,data,age); 
             arr.push(obj)
             //console.log(arr);
             arr.forEach(a => {
                 let trHtml = '<tr>';
                     trHtml+= '<td></td>';
                     trHtml+= '<td></td>';
                     trHtml+= '<td></td>';
                     trHtml+= '<td></td>';
                     trHtml+= '</tr>';
                     document.getElementById("tblData").append(trHtml);
             });
      }

// document.write("Data is:-"+a.displaydata());

emp = class{
     constructor(id,name,age){
           this.id = id;
           this.name = name;
           this.age = age;
     }
    //       displaydata(){
    //       return this.id+"---"+this.name+"---"+this.age;
    //    }
       
};
emp.prototype.displaydata = function(){
      return this.id+"---"+this.name+"---"+this.age;
}
let obj = new emp(1204,"jaydip",26);
//document.write("disp data is:-"+obj.displaydata());
             