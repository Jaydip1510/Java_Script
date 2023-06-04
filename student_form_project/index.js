function studentform() {
    let isValidData = true;
    let sname = document.stuform.sname.value;
    let name = document.stuform.name.value;
    let lname = document.stuform.lname.value;
    let age = document.stuform.age.value;
    let email = document.stuform.email.value;
    let bdate = document.stuform.bdate.value;
    let no = document.stuform.no.value;
    let address = document.stuform.address.value;
    let uname = document.stuform.uname.value;
    let pwd = document.stuform.pwd.value;
    let cpwd = document.stuform.cpwd.value;
    let hobby = document.getElementsByName("hobby");
    let gender = document.getElementsByName("gender");
    document.getElementById('errsname').innerHTML   = '';
    document.getElementById('errname').innerHTML    = '';
    document.getElementById('errlname').innerHTML = '';
    document.getElementById('errage').innerHTML     = '';
    document.getElementById('erremail').innerHTML   = '';
    document.getElementById('errgender').innerHTML  = '';
    document.getElementById('errbdate').innerHTML = '';
    document.getElementById('errhobby').innerHTML = '';
    document.getElementById('errno').innerHTML = '';
    document.getElementById('erradd').innerHTML = '';
    document.getElementById('erruname').innerHTML = '';
    document.getElementById('errpwd').innerHTML = '';
    document.getElementById('errcpwd').innerHTML = '';    
    if (sname == '') {
        document.stuform.sname.focus();
        document.getElementById('errsname').innerHTML = "Please Enter Surname";
        document.getElementById('errsname').style.color = 'red';
        isValidData = false;
    }
    if (sname.length < 2) {
        document.stuform.sname.focus();
        document.getElementById('errsname').innerHTML = "Surname must be >2 charachters";
        document.getElementById('errsname').style.color = 'red';
        isValidData = false;
    }
    if (name == '') {
        document.stuform.name.focus();
        document.getElementById('errname').innerHTML = "Please Enter Your Name";
        document.getElementById('errname').style.color = 'red';
        isValidData = false;
    }
    if (name.length < 2) {
        document.stuform.name.focus();
        document.getElementById('errname').innerHTML = "Name Must be >2 charachters";
        document.getElementById('errname').style.color = 'red';
        isValidData = false;
    }
    if(lname == ''){
        document.stuform.lname.focus();
        document.getElementById('errlname').innerHTML = "Please Enter Last Name";
        document.getElementById('errlname').style.color = 'red';
        isValidData = false;
    }
    if(lname.length<2){
        document.stuform.lname.focus();
        document.getElementById('errlname').innerHTML = "LastName Must Be >2 Charachters";
        document.getElementById('errlname').style.color = 'red';
        isValidData = false;
        }
    if (age == '') {
        document.stuform.age.focus();
        document.getElementById('errage').innerHTML = "Please Enter Age";
        document.getElementById('errage').style.color = 'red';
        isValidData = false;
    }
    if (age < 1 || age > 100) {
        document.stuform.age.focus();
        document.getElementById('errage').innerHTML = "Age Must be 1-100";
        document.getElementById('errage').style.color = 'red';
        isValidData = false;
    }
    var nopattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[0-9]\d{9}$/;
    var ans2 = nopattern.test(no);
    if(ans2 == false){
         document.stuform.no.focus();
         document.getElementById('errno').innerHTML = "Please Vaild Mobile Number";
         document.getElementById('errno').style.color = 'red';
         isValidData = false;        
    }
    if(address == ''){
        document.stuform.address.focus();
        document.getElementById('erradd').innerHTML = "Please Enter Address";
        document.getElementById('erradd').style.color = 'red';
        isValidData = false;
      }
      if(address.length<5){
        document.stuform.address.focus();
        document.getElementById('erradd').innerHTML = "Address must be >5 characters";
        document.getElementById('erradd').style.color = 'red';
        isValidData = false;
      }
    if (gender[0].checked != true && gender[1].checked != true && gender[2].checked != true) {
        document.getElementById('errgender').innerHTML = '<span style="color:red;">You must select your gender!</span><br /><br />';
        isValidData = false;
    }
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var ans = pattern.test(email);
    if (ans === false) {
        document.stuform.email.focus();
        document.getElementById('erremail').innerHTML = "Please Vaild Email";
        document.getElementById('erremail').style.color = 'red';
        isValidData = false;
    }

    var datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; //dd-mm-yyyy
    var ans1 = datePattern.test(bdate);
    if(ans1 == false){
        document.stuform.bdate.focus();
        document.getElementById('errbdate').innerHTML = "Please Vaild Birthdate";
        document.getElementById('errbdate').style.color = 'red';
        isValidData = false;
        
    } 
    if (hobby[0].checked != true && hobby[1].checked != true && hobby[2].checked != true && hobby[3].checked != true) {
        document.getElementById('errhobby').innerHTML = '<span style="color:red;">You must select your Hobby!</span><br /><br />';
        isValidData = false;
    }
    
   
      if(uname == ''){
        document.stuform.uname.focus();
        document.getElementById('erruname').innerHTML = "Please Enter User Name";
        document.getElementById('erruname').style.color = 'red';
        isValidData = false;
      }
      if(uname.length<5){
        document.stuform.uname.focus();
        document.getElementById('erruname').innerHTML = "UserName must be >5 characters";
        document.getElementById('erruname').style.color = 'red';
        isValidData = false;

      }
      if(pwd == ''){
        document.stuform.pwd.focus();
        document.getElementById('errpwd').innerHTML = "Please Enter Password";
        document.getElementById('errpwd').style.color = 'red';
        isValidData = false;       
      }
      if(cpwd == ''){
        document.stuform.cpwd.focus();
        document.getElementById('errcpwd').innerHTML = "Please Enter Confirm password";
        document.getElementById('errcpwd').style.color ="red";
        isValidData = false;
      }     
      if(pwd !== cpwd){
        document.stuform.cpwd.focus();
        document.getElementById('errcpwd').innerHTML = "Please Enter Same Password";
        document.getElementById('errcpwd').style.color = 'red';
        isValidData = false;
      }
   
      let capital = pwd.charAt(0);
      if(capital>='a' && capital<='z'){
        document.stuform.pwd.focus();
        document.getElementById('errpwd').innerHTML = "First character must be capital";
        document.getElementById('errpwd').style.color = 'red';
        isValidData = false;
      }
      return isValidData;
}