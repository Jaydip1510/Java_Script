function insertData(){
    var uname = document.userform.uname.value;
    var age = document.userform.age.value;
    var salary = document.userform.sal.value;
    let user = [uname,age,salary];
      localStorage.setItem("username",uname);
      localStorage.setItem("age",age);
      localStorage.setItem("salary",salary);
    dispData();
}
function dispData(){
    let uname = localStorage.getItem("username");
    let age = localStorage.getItem("age");
    let sal = localStorage.getItem("salary");
    document.getElementById("userData").innerHTML = "<tr><th>Name</th><th>Age</th><th>Salary</th><th>Action</th></tr><tr><td>"+uname+"</td><td>"+age+"</td><td>"+sal+"</td><td><button type='button' id='btnDel' name='btnDel' onclick='delData()'>Delete</button></td></tr>";
    document.userform.uname.value = '';
    document.userform.age.value = '';
    document.userform.sal.value = '';
}
function delData(){
    localStorage.removeItem('username');
    localStorage.removeItem('age');
    localStorage.removeItem('salary');
    document.getElementById('userData').innerHTML = '';
    document.getElementById('msg').innerHTML= "user Successfully deleted....";   
}