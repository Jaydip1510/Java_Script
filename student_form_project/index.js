function studentform() {
    let sname = document.stuform.sname.value;
    let name = document.stuform.name.value;

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
    
}