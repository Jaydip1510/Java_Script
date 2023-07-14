document.getElementById('btn').addEventListener("click",()=>{
   let email = document.login.email.value;
   let pwd = document.login.pwd.value;
   let cpwd = document.login.cpwd.value;

   let d1 = {};
   let logindata = {
      email:email,
      password:pwd,
      compassword:cpwd
   };
   let jay = JSON.parse(localStorage.getItem("loginDetail"));
   if(jay != null){
      jay.inform.push(logindata);
      localStorage.setItem("loginDetail",JSON.stringify(jay));
   }else{
      d1.inform = [logindata];
      localStorage.setItem("loginDetail",JSON.stringify(d1));
   }
   document.login.reset();
});