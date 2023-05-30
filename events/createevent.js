function disp(){
      const e1 = new Event('myfirstEvent');
      document.addEventListener('myfirstEvent',()=>{
          document.write('My first event called');
        
      });
      document.dispatchEvent(e1);
}
function customdisp(){
       const e2 = new CustomEvent('userInfo',{
        detail :{
              name : "jaydip",
              surname : "makwana",
              age : 25
           }
       });
       document.addEventListener('userInfo',(data)=>{
        document.write("Your name is:-"+data.detail.name);
        document.write('<br>Your surname is:-'+data.detail.surname);
        document.write('<br>Your Age is:-'+data.detail.age);
        
        
       });
       document.dispatchEvent(e2);
}