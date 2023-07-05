display();
document.getElementById("btn").addEventListener("click", () => {
    let name = document.frm.uname.value;
    let age = document.frm.age.value;
    let add = document.frm.add.value;
    let salary = document.frm.sal.value;
    let gen = document.frm.g1.value;

    let u_data = [];
    let udata = {
        name: name,
        age: age,
        add: add,
        salary: salary,
        gender: gen
    };
    let abcdata = localStorage.getItem("studentInfo");
    if (abcdata != null) {

        abcdata.push(udata);
        abcdata = JSON.parse(abcdata);
    } else {
        u_data = [udata];
        localStorage.setItem("stdentInfo", JSON.stringify(u_data));
    }
    document.frm.reset();
    display();
});

function display(){
    let dt = "<tr>";
        dt +="<th>Name</th>";
        dt +="<th>Age</th>";
        dt +="<th>Address</th>";
        dt +="<th>Salary</th>";
        dt +="<th>Gender</th>";
        dt +="<th>Action</th>";
        dt +="</tr>";

        let local = localStorage.getItem("studentInfo");
        if(local != null){
            for(let i = 0; i<abc.length;i++){
                dt +="<tr>";
                dt +="<td>"+abc[i].name+"</td>";
                dt +="<td>"+abc[i].age+"</td>";
                dt +="<td>"+abc[i].add+"</td>";
                dt +="<td>"+abc[i].salary+"</td>";
                dt +="<td>"+abc[i].gender+"</td>";
                dt +="</tr>";
            }
        }
        document.getElementById("usertbl").innerHTML = dt ;
}
