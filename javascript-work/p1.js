display();
document.getElementById('btn1').addEventListener("click", () => {
    let name = document.userform.name.value;
    let age = document.userform.age.value;
    let salary = document.userform.sal.value;
    let gen = document.userform.g1.value;

    let d1 = {};
    let abc = {
        name: name,
        age: age,
        salary: salary,
        gender: gen
    };
    
    let uData = JSON.parse(localStorage.getItem("empDetail"));
    if (uData != null) {
        uData.push(abc);
        localStorage.setItem("empDetail", JSON.stringify(uData));
    } else {
        d1 = [abc];
        localStorage.setItem("empDetail", JSON.stringify(d1));
    }
    document.userform.reset();
    display();
});
function display() {
  let dt = "<tr>";
    dt += "<th><center>Name</center></th>";
    dt += "<th><center>Age</center></th>";
    dt += "<th><center>Salary</center></th>";
    dt += "<th><center>Gender</center></th>";
    dt += "<th><center>Action</center></th>";
    dt += "</tr>";
    let local = localStorage.getItem("empDetail");
   
    if (local != null) {
       let abc = JSON.parse(local);    
        for (let i = 0; i < abc.length; i++) {
            dt += "<tr>";
            dt += "<td><center>" + abc[i].name + "</center></td>";
            dt += "<td><center>" + abc[i].age + "</center></td>";
            dt += "<td><center>" + abc[i].salary + "</center></td>";
            dt += "<td><center>" + abc[i].gender + "</center></td>";
            dt += "<td><center><input type='button' name='btndel' id='btndel' value='Delete' onclick = 'delData("+i+")'</center></td>";

            dt += "</tr>";
        }
    }
    document.getElementById("userData").innerHTML = dt;
}

function delData(id){
        let abc = JSON.parse(localStorage.getItem("empDetail"));
        abc.splice(id,1);
        localStorage.setItem("empDetail",JSON.stringify(abc));
        display();
}
