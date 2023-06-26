display();
document.getElementById("b1").addEventListener("click", () => {
    let name = document.uform.ename.value;
    let age = document.uform.age.value;
    let bdate = document.uform.bdate.value;
    let salary = document.uform.sal.value;
    let gen = document.uform.g1.value;

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
        datainfo.push(user);
        localStorage.setItem("userInfo", JSON.stringify(datainfo));
    } else {
        data1 = [user];
        localStorage.setItem("userInfo", JSON.stringify(data1));
    }
    document.uform.reset();
    display();
});

function display() {
    let dt = "<tr>";
    dt += "<th>Name</th>";
    dt += "<th>Age</th>";
    dt += "<th>BirthDate</th>";
    dt += "<th>Salary</th>";
    dt += "<th>Gender</th>";
    dt += "<th>Action</th>";
    dt += "</tr>";

    let ls = localStorage.getItem("userInfo");

    if (ls != null) {
        let user = JSON.parse(ls);
        for (i = 0; i < user.length; i++) {
            dt += "<tr>";
            dt += "<td>" + user[i].name + "</td>";
            dt += "<td>" + user[i].age + "</td>";
            dt += "<td>" + user[i].birthdate + "</td>";
            dt += "<td>" + user[i].salary + "</td>";
            dt += "<td>" + user[i].gender + "</td>";
            dt += "<td><input type='button' name='btndel' id='btndel' value='Delete' onclick = 'delData(" + i + ")'>";
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