function insertData(){
    var uname = document.userform.uname.value;
    var age = document.userform.age.value;
    
    let user = [uname,age];
    localStorage.setItem("username",uname);
    localStorage.setItem("age",age);

    dispData();
}

 function dispData(){
    let uname = localStorage.getItem("username");
    let age = localStorage.getItem("age");
    document.getElementById("userData").innerHTML = "<tr><th>Name</th><th>Age</th><th>Action</th></tr><tr><td>"+uname+"</td><td>"+age+"</td><td><button type='button' id='btnDel' name='btnDel' onclick='delData()'>Delete</button></td></tr>";
    document.userform.uname.value = '';
 }

 function delData(){
    localStorage.removeItem('username');
    localStorage.removeItem('age');
    document.getElementById("userData").innerHTML = '';
    document.getElementById("msg").innerHTML = "User successfully deleted...";
 }