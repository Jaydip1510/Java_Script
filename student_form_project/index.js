function studentform() {
    let sname = document.stuform.sname.value;
    let name = document.stuform.name.value;
    let age = document.stuform.age.value;
    let email = document.stuform.email.value;

    if(sname == ''){
        document.stuform.sname.focus();
        document.getElementById('errsname').innerHTML = "Please Enter Surname";
        document.getElementById('errsname').style.color = 'red';
        return false;
    }
    if(sname.length<2){
        document.stuform.sname.focus();
        document.getElementById('errsname').innerHTML = "Surname must be >2 charachters";
        document.getElementById('errsname').style.color = 'red';
        return false;
    }
    if(name == ''){
        document.stuform.name.focus();
        document.getElementById('errname').innerHTML = "Please Enter Your Name";
        document.getElementById('errname').style.color = 'red';
        return false;
    }
    if(name.length<2){
        document.stuform.name.focus();
        document.getElementById('errname').innerHTML = "Name Must be >2 charrachters";
        document.getElementById('errname').style.color = 'red';
        return false;    
    }
    if(age == ''){
        document.stuform.age.focus();
        document.getElementById('errage').innerHTML = "Please Enter Age";
        document.getElementById('errage').style.color = 'red';
        return false;
    }
    if(age<1 || age>100){
        document.stuform.age.focus();
        document.getElementById('errage').innerHTML = "Age Must be 1-100";
        document.getElementById('errage').style.color = 'red';
        return false;
    }
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      var ans = pattern.test(email);
      if(ans == false){
        document.userform.email.focus();
        document.getElementById('erremail').innerHTML = "Please Vaild Email";
        document.getElementById('erremail').style.color = 'red';
        return false;
      }
}