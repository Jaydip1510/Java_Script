display();
document.getElementById("b1").addEventListener("click", () => {
    let name = document.uform.ename.value;
    let age = document.uform.age.value;
    let bdate = document.uform.bdate.value;
    let salary = document.uform.sal.value;
    let gen = document.uform.g1.value;
    let uid = document.uform.userid.value;
    let data1 = {};
    let user = {
        name: name,
        age: age,
        birthdate: bdate,
        salary: salary,
        gender: gen
    };

    let datainfo = JSON.parse(localStorage.getItem("userInfo"));
    if (datainfo != null) {
        if(uid != ''){
          for(let i = 0; i<datainfo.length;i++){
            if(uid == i){
                datainfo[i].name = name;
                datainfo[i].age = age;
                datainfo[i].birthdate = bdate;
                datainfo[i].salary = sal;
                datainfo[i].gender = gen;
            }
          }
        }else{
            datainfo.push(user);
        }
        
        localStorage.setItem("userInfo", JSON.stringify(datainfo));
    } else {
        data1 = [user];
        localStorage.setItem("userInfo", JSON.stringify(data1));
    }
    document.uform.reset();
    document.uform.uid.value = '';
    display();
});

function display() {
    let dt = "<tr>";
    dt += "<th><center>Name</center></th>";
    dt += "<th><center>Age</center></th>";
    dt += "<th><center>BirthDate</center></th>";
    dt += "<th><center>Salary</center></th>";
    dt += "<th><center>Gender</center></th>";
    dt += "<th><center>Action</center></th>";
    dt += "</tr>";

    let ls = localStorage.getItem("userInfo");

    if (ls != null) {
        let user = JSON.parse(ls);
        for (i = 0; i < user.length; i++) {
            dt += "<tr>";
            dt += "<td><center>" + user[i].name + "</center></td>";
            dt += "<td><center>" + user[i].age + "</center></td>";
            dt += "<td><center>" + user[i].birthdate + "</center></td>";
            dt += "<td><center>" + user[i].salary + "</center></td>";
            dt += "<td><center>" + user[i].gender + "</center></td>";
            dt += "<td><center><input type='button' name='btndel' id='btndel' value='Delete' onclick = 'delData(" + i + ")'>";
            dt += "   <input type='button' name='edit' id='edit' value='Edit' onclick = 'dataEdit("+i+")'</center></td>";
            dt += "</tr>";
        }
    }
    document.getElementById("saveData").innerHTML = dt;
}
function delData(id){
    let user = JSON.parse(localStorage.getItem("userInfo"));
    user.splice(id,1);
    localStorage.setItem("userInfo",JSON.stringify(user));
    display();

}

function dataEdit(id){
    let datainfo = JSON.parse(localStorage.getItem("userInfo"));
    if(datainfo != null){
        for(let i = 0; i<datainfo.length;i++){
            if(i == id){
                document.uform.ename.value = datainfo[i].name;
                document.uform.age.value = datainfo[i].age;
                document.uform.bdate.value = datainfo[i].birthdate;
                document.uform.sal.value = datainfo[i].salary;
                document.uform.g1.value = datainfo[i].gender;

            }
        }
    } 
}