function validateform() {
    let uname = document.userform.uname.value;
    let no = document.userform.no.value;
    let pwd = document.userform.pwd.value;
    let cpwd = document.userform.cpwd.value;

    if(uname == ''){
        document.getElementById('errname').innerHTML = "Please Enter User Name";
        document.getElementById('errname').style.color = 'red';
        return false;
    }
    if(uname.length<2){
        document.getElementById('errname').innerHTML = "Name Must be >2 charachters";
        document.getElementById('errname').style.color = 'red';
        return false;  
    }
    if(no == ''){
        document.getElementById('errno').innerHTML = "Please Enter Number";
        document.getElementById('errno').style.color = 'red';
        return false;  
    }
    if(no<1 || no>100){
        document.getElementById('errno').innerHTML = "Number must be 1-100";
        document.getElementById('errno').style.color = 'red';
        return false;        
    }
    
}