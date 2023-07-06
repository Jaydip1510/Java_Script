display();
document.getElementById("empbtn").addEventListener("click",()=>{
    let name =  document.emp.ename.value;
    let age = document.emp.age.value;
    let salary = document.emp.sal.value;
    let gen = document.emp.g1.value;
    let eid = document.emp.eid.value;
    let hob = document.getElementsByName('h1');
    let h1 = [];
    for(let j = 0;j<hob.length;j++){
        if(hob[j].checked == true){
            h1.push(hob[j].value);
        }
    }

    let e1 = {};
    let empdata = {
        name:name,
        age:age,
        salary:salary,
        gender:gen,
        hobby:h1
    };

    let edata = JSON.parse(localStorage.getItem("empInformation"));
    if(edata != null){
        if(eid != ''){
            for(let i = 0;i<edata.empInfo.length;i++){
                if(eid == i){
                    edata.empInfo[i].name = name;
                    edata.empInfo[i].age = age;
                    edata.empInfo[i].salary = salary;
                    edata.empInfo[i].gender = gen;
                    edata.empInfo[i].hobby = h1;
                    document.emp.value = '';
                }
            }
            localStorage.setItem("empInformation",JSON.stringify(edata));
        }else{
            edata.empInfo.push(empdata);
            localStorage.setItem("empInformation",JSON.stringify(edata));
        }

    }else{
        e1.empInfo = [empdata];
        localStorage.setItem("empInformation",JSON.stringify(e1));
    }
    document.emp.reset();
    document.emp.eid.value = '';
    display();
});

function display(){
    let detail = JSON.parse(localStorage.getItem("empInformation"));
    let sd = '';

    if(detail != null){
        sd +="<tr>";
        sd +="<td><center>Name</center></td>";
        sd +="<td><center>Age</center></td>";
        sd +="<td><center>Salary</center></td>";
        sd +="<td><center>Gender</center></td>";
        sd +="<td><center>Hobby</center></td>";
        sd +="<td><center>Action</center></td>";
        sd +="</tr>";

        for(let i = 0; i< detail.empInfo.length;i++){
            sd +="<tr>";
            sd +="<td><center>"+detail.empInfo[i].name+"</center></td>";
            sd +="<td><center>"+detail.empInfo[i].age+"</center></td>";
            sd +="<td><center>"+detail.empInfo[i].salary+"</center></td>";
            sd +="<td><center>"+detail.empInfo[i].gender+"</center></td>";
            sd +="<td><center>"+detail.empInfo[i].hobby+"</center></td>";
            sd +="<td><center><input type='button' class='btn btn-danger' name='editemp' id='editemp' value='Edit' onclick='editemp("+i+")'>&nbsp;&nbsp;<input type='button' class='btn btn-success'  name='delemp' id='delemp' value='Delete' onclick='delemp("+i+")'></center>";
            sd +="</tr>";
        }
    }
    document.getElementById('emptable').innerHTML = sd;
}

function delemp(id){
    let xyz = JSON.parse(localStorage.getItem("empInformation"));
    if(xyz != null){
       xyz.empInfo.splice(id,1);
       localStorage.setItem("empInformation",JSON.stringify(xyz));
       display();
    }
}

function editemp(id){
     let raj = JSON.parse(localStorage.getItem("empInformation"));
     if(raj != null){
        for(let i = 0; i<raj.empInfo.length;i++){
            if(i == id){
                document.emp.ename.value = raj.empInfo[i].name;
                document.emp.age.value = raj.empInfo[i].age;
                document.emp.sal.value = raj.empInfo[i].salary;
                document.emp.g1.value = raj.empInfo[i].gender;

                let hob = document.getElementsByName('h1');
                let hdata = raj.empInfo[i].hobby;
                for(let j = 0;j<hob.length;j++){
                    if(hdata.includes(hob[j].value)){
                        hob[j].checked = true;
                    }
                }
                document.emp.eid.value = id;
            }
        }
     }
}