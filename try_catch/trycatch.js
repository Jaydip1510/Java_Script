function emp(){
      this.fname = "jaydip";
      this.lname = "makwana";
}
emp.prototype.fullname = function(){
    return this.fname+" "+this.lname;
}
const e1 = new emp();
document.write('your fullname is:-'+e1.fullname()+"<br>");

let a = 10;
try{
     if(a!=10){
          let obj = {
             msg:"error generate"
          };
          throw obj;
     }else{
        let obj = {
            msg:"error sovled"
        };
        throw obj;
     }

}catch(e){
   
    document.write(e.msg+"<br>");
}finally{
    document.write('default finally block');
    
}