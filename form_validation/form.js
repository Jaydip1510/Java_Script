function validateForm() {
      let name = document.userform.uname.value;
      let no = document.userform.no.value;
      let pwd = document.userform.pwd.value;
      let cpwd = document.userform.cpwd.value;
      let address = document.userform.address.value;
      if(name == ''){
        document.userform.uname.focus();
        document.getElementById('errName').innerHTML = "Please Enter UserName";
        document.getElementById('errName').style.color = 'red';
        return false;  
      }
      if(name.length<2){
        document.userform.no.focus();
        document.getElementById('errName').innerHTML = "Name must be >2 characters";
        document.getElementById('errName').style.color = 'red';
        return false;
      }
      if(no == ''){
        document.userform.no.focus();
        document.getElementById('errno').innerHTML = "Please Enter Number";
        document.getElementById('errno').style.color = 'red';
        return false;
      }
      if(no<1 || no>100){
        document.userform.no.focus();
        document.getElementById('errno').innerHTML = "Number must be between 1-100";
        document.getElementById('errno').style.color = 'red';
        return false;  
      }
  
      if(pwd == ''){
        document.userform.pwd.focus();
        document.getElementById('errpwd').innerHTML = "Please Enter pass";
        document.getElementById('errpwd').style.color = 'red';
        return false;
      }   
      if(cpwd == ''){
        document.userform.cpwd.focus();
        document.getElementById('errcpwd').innerHTML = "Please Enter Confirm password";
        document.getElementById('errcpwd').style.color ="red";
        return false;
      }     
      if(pwd !== cpwd){
        document.userform.cpwd.focus();
        document.getElementById('errcpwd').innerHTML = "Please Enter Same Password";
        document.getElementById('errcpwd').style.color = 'red';
        return false;
      }
   
      let capital = pwd.charAt(0);
      if(capital>='a' && capital<='z'){
        document.userform.pwd.focus();
        document.getElementById('errpwd').innerHTML = "First character must be capital";
        document.getElementById('errpwd').style.color = 'red';
        return false;
      }
      if(address == ''){
        document.userform.address.focus();
        document.getElementById('erradd').innerHTML = "Please Enter Address";
        document.getElementById('erradd').style.color = 'red';
        return false;
      }
      if(address.length<5){
        document.userform.address.focus();
        document.getElementById('erradd').innerHTML = "Address must be >5 characters";
        document.getElementById('erradd').style.color = 'red';
        return false;
      }
}