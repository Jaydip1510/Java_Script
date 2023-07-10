display();
document.getElementById('ebtn').addEventListener("click", () => {
    let name = document.emp.ename.value;
    let age = document.emp.age.value;
    let salary = document.emp.sal.value;
    let gender = document.emp.g1.value;
    let eid = document.emp.eid.value;
    let hob = document.getElementsByName('h1');
    let h1 = [];
    for (let j = 0; j < hob.length; j++) {
        if (hob[j].checked == true) {
            h1.push(hob[j].value);
        }
    }
    let e1 = {};
    let edata = {
        id: 1,
        name: name,
        age: age,
        salary: salary,
        gender: gender,
        hobby: h1
    }
    let jay = JSON.parse(localStorage.getItem("empDetail"));
    if (jay != null) {
        if (eid != '') {
            for (let i = 0; i < jay.empInfo.length; i++) {
                if (eid == i) {
                    jay.empInfo[i].name = name;
                    jay.empInfo[i].age = age;
                    jay.empInfo[i].salary = salary;
                    jay.empInfo[i].gender = gender;
                    jay.empInfo[i].hobby = h1;
                }
            }
            localStorage.setItem("empDetail", JSON.stringify(jay));

        } else {
            let len = jay.empInfo.length;
            edata = {
                id: len + 1,
                name: name,
                age: age,
                salary: salary,
                gender: gender,
                hobby: h1
            }
            jay.empInfo.push(edata);

        }

        localStorage.setItem("empDetail", JSON.stringify(jay));
    } else {
        e1.empInfo = [edata];
        localStorage.setItem("empDetail", JSON.stringify(e1));
    }
    document.emp.reset();
    display();
});

function display() {
    let raj = JSON.parse(localStorage.getItem("empDetail"));
    let dt = '';

    if (raj != null) {
        dt += "<tr>";
        dt += "<th>Emp Id</th>";
        dt += "<th>Name</th>";
        dt += "<th>Age</th>";
        dt += "<th>Salary</th>";
        dt += "<th>Gender</th>";
        dt += "<th>Hobby</th>";
        dt += "<th>Action</th>";
        dt += "</tr>";

        for (let i = 0; i < raj.empInfo.length; i++) {
            dt += "<tr>";
            dt += "<td>" + raj.empInfo[i].id + "</td>";
            dt += "<td>" + raj.empInfo[i].name + "</td>";
            dt += "<td>" + raj.empInfo[i].age + "</td>";
            dt += "<td>" + raj.empInfo[i].salary + "</td>";
            dt += "<td>" + raj.empInfo[i].gender + "</td>";
            dt += "<td>" + raj.empInfo[i].hobby + "</td>";
            dt += "<td><input type='button' name='empdel' id='empdel' value='Delete' onclick = 'empdel(" + i + ")'>";
            dt += "&nbsp;&nbsp;<input type='button' name='empedit' id='empid' value='Edit' onclick = 'empedit(" + i + ")'</td>";
            dt += "</tr>";
        }
    }
    document.getElementById('emptable').innerHTML = dt;
}

function empdel(id) {
    let mjp = JSON.parse(localStorage.getItem("empDetail"));
    if (mjp != null) {
        mjp.empInfo.splice(id, 1);
        localStorage.setItem("empDetail", JSON.stringify(mjp));
        display();
    }
}

function empedit(id) {
    let pqr = JSON.parse(localStorage.getItem("empDetail"));
    if (pqr != null) {
        for (let i = 0; i < pqr.empInfo.length; i++) {
            if (i == id) {
                document.emp.ename.value = pqr.empInfo[i].name;
                document.emp.age.value = pqr.empInfo[i].age;
                document.emp.sal.value = pqr.empInfo[i].salary;
                document.emp.g1.value = pqr.empInfo[i].gender;
                let hob = document.getElementsByName('h1');
                let j1 = pqr.empInfo[i].hobby;
                for (let j = 0; j < hob.length; j++) {
                    if (j1.includes(hob[j].value)) {
                        hob[j].checked = true;
                    }
                }
            }
            document.emp.eid.value = id;
        }
    }
}