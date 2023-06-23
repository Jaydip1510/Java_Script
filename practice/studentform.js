display();
document.getElementById('btn1').addEventListener("click", () => {
    let name = document.studform.uname.value;
    let age = document.studform.age.value;
    let sal = document.studform.salary.value;
    let gen = document.studform.gender.value;
    let uid = document.studform.uid.value;
    let hob = document.getElementsByName('h1');
    let h1 = [];
    for (let j = 0; j < hob.length; j++) {
        if (hob[j].checked == true) {
            h1.push(hob[j].value);
        }
    }

    let data = {};
    let info = {
        name: name,
        age: age,
        salary: sal,
        gender: gen,
        hobby: h1
    };
    let empData = JSON.parse(localStorage.getItem("empDetail"));
    if (empData != null) {
        if (uid != '') {
            for (let i = 0; i < empData.empInfo.length; i++) {
                if (uid == i) {
                    empData.empInfo[i].name = name;
                    empData.empInfo[i].age = age;
                    empData.empInfo[i].salary = sal;
                    empData.empInfo[i].gender = gen;
                    empData.empInfo[i].hobby = h1;
                    document.studform.value = '';

                }
            }
            localStorage.setItem("empDetail", JSON.stringify(empData));

        } else {
            empData.empInfo.push(info);
            localStorage.setItem("empDetail", JSON.stringify(empData));
        }

    } else {
        data.empInfo = [info];
        localStorage.setItem("empDetail", JSON.stringify(data));
    }
    document.studform.reset();
    document.studform.uid.value = '';
    display();
});

function display() {
    let dt = '';
    dt += "<tr>";
    dt += "<th><center><b>Name</b></center></th>";
    dt += "<th><center><b>Age</b></center></th>"
    dt += "<th><center><b>Salary</b></center></th>"
    dt += "<th><center><b>Gender</b></center></th>"
    dt += "<th><center><b>Hobby</b></center></th>"
    dt += "<th><center><b>Action</b></center></th>"
    dt += "</tr>";

    let info = JSON.parse(localStorage.getItem("empDetail"));
    if (info != null) {
        for (let i = 0; i < info.empInfo.length; i++) {
            dt += "<tr>";
            dt += "<td><center>" + info.empInfo[i].name + "</center></td>";
            dt += "<td><center>" + info.empInfo[i].age + "</center></td>";
            dt += "<td><center>" + info.empInfo[i].salary + "</center></td>";
            dt += "<td><center>" + info.empInfo[i].gender + "<center></td>";
            dt += "<td><center>" + info.empInfo[i].hobby + "</center></td>";
            dt += "<td><center><input type='button' name='btndel' id='btndel' value='Delete' onclick = 'delData(" + i + ")'>";
            dt += " <input type='button' name='btnedit' id='btnedit' value='Edit' onclick = 'editData(" + i + ")'></center> </td>";
            dt += "</tr>";
        }
    }
    document.getElementById("userData").innerHTML = dt;
}

function delData(id) {
    let info = JSON.parse(localStorage.getItem("empDetail"));
    info.empInfo.splice(id, 1);
    localStorage.setItem("empDetail", JSON.stringify(info));
    display();
}

function editData(id) {
    let info = JSON.parse(localStorage.getItem("empDetail"));
    if (info != null) {
        for (let i = 0; i < info.empInfo.length; i++) {
            if (i == id) {
                document.studform.uname.value = info.empInfo[i].name;
                document.studform.age.value = info.empInfo[i].age;
                document.studform.salary.value = info.empInfo[i].salary;
                document.studform.gender.value = info.empInfo[i].gender;

                let hob = document.getElementsByName('h1');
                let hdata = info.empInfo[i].hobby;
                for (let j = 0; j < hob.length; j++) {
                    if (hdata.includes(hob[j].value)) {
                        hob[j].checked = true;
                    }
                }
                document.studform.uid.value = id;
            }
        }
    }
}