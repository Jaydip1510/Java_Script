function validateform() {
    let uname = document.userform.uname.value;
    let no = document.userform.no.value;
    let pwd = document.userform.pwd.value;
    let cpwd = document.userform.cpwd.value;
    let email = document.userform.email.value;
    let address = document.userform.address.value;
    let bdate = document.userform.bdate.value;
    document.getElementById('errName').innerHTML = '';
    document.getElementById('errNo').innerHTML = '';
    document.getElementById('errPwd').innerHTML = '';
    document.getElementById('errCPwd').innerHTML = '';
    document.getElementById('errEmail').innerHTML = '';
    document.getElementById('erradd').innerHTML = ''; 
    document.getElementById('errbdate').innerHTML = '';
       
    if(uname == ''){
        document.userform.uname.focus();
        document.getElementById('errName').innerHTML = "Please Enter User Name";
        document.getElementById('errName').style.color = 'red';
        return false;
    }
    if(uname.length<2){
        document.userform.uname.focus();
        document.getElementById('errName').innerHTML = "Name Must be >2 charachters";
        document.getElementById('errName').style.color = 'red';
        return false;  
    }
    if(no == ''){
        document.userform.no.focus();
        document.getElementById('errNo').innerHTML = "Please Enter Number";
        document.getElementById('errNo').style.color = 'red';
        return false;  
    }
    if(no<1 || no>100){
        document.userform.no.focus();
        document.getElementById('errNo').innerHTML = "Number must be 1-100";
        document.getElementById('errNo').style.color = 'red';
        return false;        
    }
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var ans = pattern.test(email);
    if(ans === false){
        document.userform.email.focus();
        document.getElementById('errEmail').innerHTML = "Please Vaild Email";
        document.getElementById('errEmail').style.color = 'red';
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
        document.getElementById('erradd').innerHTML = "Address Must Be >5 Charachters";
        document.getElementById('erradd').style.color = 'red';
        return false;
    }
    var datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; //dd-mm-yyyy
    var ans1 = datePattern.test(bdate);
    if(ans1 == false){
        document.stuform.bdate.focus();
        document.getElementById('errbdate').innerHTML = "Please Vaild Birthdate";
        document.getElementById('errbdate').style.color = 'red';
        return false;
        
    } 
    if(pwd == ''){
        document.userform.pwd.focus();
        document.getElementById('errPwd').innerHTML = "Please Enter UserName";
        document.getElementById('errPwd').style.color = 'red';
        return false;
    }
    if(cpwd == ''){
        document.userform.cpwd.focus();
        document.getElementById('errCPwd').innerHTML = "Please Enter ConfirmPassword";
        document.getElementById('errCPwd').style.color = 'red';
        return false;
    }
    if(pwd !== cpwd){
        document.userform.cpwd.focus();
        document.getElementById('errCPwd').innerHTML = "Please Enter Same Password";
        document.getElementById('errCPwd').style.color = 'red';
        return false;
    }
    let capital = pwd.charAt(0);
    if(capital>='a' && capital<='z'){
         document.userform.pwd.focus();
         document.getElementById('errPwd').innerHTML = "First character must be capital";
         document.getElementById('errPwd').style.color = 'red';
         return false;    
    }
   

}