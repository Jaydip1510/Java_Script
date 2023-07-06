display();
document.getElementById('pqr').addEventListener("click", () => {
    let name = document.studform.sname.value;
    let age = document.studform.age.value;
    let sal = document.studform.sal.value;
    let gen = document.studform.g1.value;

    let data = {};
    let sdata = {
        name: name,
        age: age,
        salary: sal,
        gender: gen
    };
    let sinfo = JSON.parse(localStorage.getItem("studentInfo"));
    if (sinfo != null) {
        sinfo.studInfo.push(sdata);
        localStorage.setItem("studentInfo", JSON.stringify(sinfo));
    } else {
        data.studInfo = [sdata];
        localStorage.setItem("studentInfo", JSON.stringify(data));
    }
    document.studform.reset();
    display();

});
function display() {
    let std = JSON.parse(localStorage.getItem("studentInfo"));
    let sd = ''; // Declare and initialize outside the if block

    if (std != null) {
        sd += "<tr>";
        sd += "<th>Name</th>";
        sd += "<th>Age</th>";
        sd += "<th>Salary</th>";
        sd += "<th>Gender</th>";
        sd += "</tr>";

        for (let i = 0; i < std.studInfo.length; i++) {
            sd += "<tr>";
            sd += "<td>" + std.studInfo[i].name + "</td>";
            sd += "<td>" + std.studInfo[i].age + "</td>";
            sd += "<td>" + std.studInfo[i].salary + "</td>";
            sd += "<td>" + std.studInfo[i].gender + "</td>";
            sd += "</tr>";
        }
    }
    document.getElementById("studtable").innerHTML = sd;
}
