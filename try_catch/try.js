let a = 20;
try{
      if(a != 20){
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
    document.write('default finally block');
    
}