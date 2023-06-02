function validateform(){
    let sname = document.userform.sname.value;
    let uname = document.userform.uname.value;
    let no = document.userform.no.value;

    if(sname == ''){
        document.userform.sname.focus();
        document.getElementById('errsname').innerHTML = "Please Enter SurName";
        document.getElementById('errsname').style.color = 'red'; 
        return false;  
    }
    if(sname.length<3){
        document.userform.sname.focus();
        document.getElementById('errsname').innerHTML = "Surname must be >3 charachters";
        document.getElementById('errsname').style.color = 'red';
        return false; 
    }
    if(uname == ''){
        document.userform.uname.focus();
        document.getElementById('errname').innerHTML = "Please Enter Username";
        document.getElementById('errname').style.color = 'red';
        return false;
    }
    if(uname.length<3){
        document.userform.uname.focus();
        document.getElementById('errname').innerHTML = "Name Must be >3 charachters";
        document.getElementById('errname').style.color = 'red';
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
        document.getElementById('errno').innerHTML = "Number Must be between 1-100";
        document.getElementById('errno').style.color = 'red';
        return false;
        
    }
}