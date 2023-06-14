let arr = [];
function insertData(){
    let obj = {
         uname : "",
         age : "",
         sal : ""
    };
    var uname  = document.userform.uname.value;
    var age    = document.userform.age.value;
    var salary = document.userform.sal.value;
      
      obj.uname = uname;
      obj.age = age;
      obj.sal = salary;

      arr.push(obj);
      
      localStorage.setItem("arrDetail",JSON.stringify(arr));
    dispData();
}
function dispData(){
    let arrDetail = localStorage.getItem("arrDetail");
    let JsonData = JSON.parse(arrDetail);
    let html = "";
    html += "<tr><th>Name</th><th>Age</th><th>Salary</th><th>Action</th></tr>";
    JsonData.forEach( (a,b) => {
        html += "<tr><td>"+a.uname+"</td><td>"+a.age+"</td><td>"+a.sal+"</td>";
        html +="<td><button type='button' id='btnDel' name='btnDel' onclick='delData()'>Delete</button></td></tr>";

    });
    
    document.getElementById("userData").innerHTML = html;
    document.userform.uname.value = '';
    document.userform.age.value = '';
    document.userform.sal.value = '';
}
function delData(){
    localStorage.removeItem('arrDetail');
    document.getElementById('userData').innerHTML = '';
    document.getElementById('msg').innerHTML= "user Successfully deleted....";   
}