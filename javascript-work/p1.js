display();
document.getElementById('btn1').addEventListener("click", () => {
    let name = document.userform.name.value;
    let age = document.userform.age.value;
    let salary = document.userform.sal.value;
    let gen = document.userform.g1.value;

    let jp = {};
    let xyz = {
        id:1,
        name: name,
        age: age,
        salary: salary,
        gender: gen
    };

    let sData = JSON.parse(localStorage.getItem("empDetail"));
    let len= sData.length;
      xyz = {
         id:len+1,
         name: name,
         age: age,
         salary: salary,
         gender: gen
    };
    if (sData != null) {
        sData.push(xyz);
        localStorage.setItem("empDetail", JSON.stringify(sData));
    } else {
        jp = [xyz];
        localStorage.setItem("empDetail", JSON.stringify(jp));
    }
    document.userform.reset();
    display();
});
function display() {
    let abc = JSON.parse(localStorage.getItem('empDetail'));
    let dt = '';
    if (abc != null) {
        dt += "<tr>";
        dt += "<th><center>Id</center></th>";
        dt += "<th><center>Name</center></th>";
        dt += "<th><center>Age</center></th>";
        dt += "<th><center>Salary</center></th>";
        dt += "<th><center>Gender</center></th>";
        dt += "<th><center>Action</center></th>";
        dt += "</tr>";
        for (let i = 0; i < abc.length; i++) {


            dt += "<tr>";
            dt += "<td><center>" + abc[i].id + "</center></td>";
            dt += "<td><center>" + abc[i].name + "</center></td>";
            dt += "<td><center>" + abc[i].age + "</center></td>";
            dt += "<td><center>" + abc[i].salary + "</center></td>";
            dt += "<td><center>" + abc[i].gender + "</center></td>";
            dt += "<td><center><input type='button' class='btn btn-primary' name='btndel' id='btndel' value='Delete' onclick = 'delData(" + i + ")'</center></td>";
            dt += "</tr>";
        }
    }
    document.getElementById("userData").innerHTML = dt;
}

function delData(id){
    let rv = JSON.parse(localStorage.getItem("empDetail"));
    if(rv != null){
        rv.splice(id,1);
        localStorage.setItem("empDetail",JSON.stringify(rv));
        display();
    }
}


