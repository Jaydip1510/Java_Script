let a = 15;
try{
    if(a != 10){
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
       document.write(e.msg+'<br>');      
}finally{
     document.write('defualt finally block');
     
}