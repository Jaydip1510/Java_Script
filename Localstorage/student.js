display();
document.getElementById('btn1').addEventListener("click",()=>{
    let name = document.studform.uname.value;
    let age = document.studform.age.value;
    let sal = document.studform.sal.value;
    let cr = document.studform.cource.value;

    let data = {};
    let info = {
        name:name,
        age:age,
        salary:sal,
        cource:cr
    };

     let studData = JSON.parse(localStorage.getItem("studentDetail"));
     if(studData != null){
        studData.studetInfo.push(info);
        localStorage.setItem("studentDetail",JSON.stringify(studData));
     }else{
        data.studetInfo = [info];
        localStorage.setItem("studentDetail",JSON.stringify(data));
     }
     document.studform.reset();
     display();

     if(name == ''){
        document.studform.uname.focus();
        document.getElementById('errname').innerHTML = "Please Enter UserName";
        document.getElementById('errname').style.color = 'red';
     }
     if(name.length<2){
        document.studform.uname.focus();
        document.getElementById('errname').innerHTML = "name Must be >2";
        document.getElementById('errname').style.color = 'red';
     }
     if(age == ''){
        document.studform.age.focus();
        document.getElementById('errage').innerHTML = "Please Enter Age";
        document.getElementById('errage').style.color = 'red';
     }
     if(age<1 || age>100){
        document.studform.age.focus();
        document.getElementById('errage').innerHTML = "age must be 1-100";
        document.getElementById('errage').style.color = 'red';
     }
});

function display(){
    let dt = "<tr>";
    dt += "<th>Name</th>";
    dt +="<th>Age</th>";
    dt += "<th>Salary</th>";
    dt +="<th>Cource</th>"
    dt +="<th>Action</th>";
    dt+="</tr>";

    let info = JSON.parse(localStorage.getItem("studentDetail"));
    if(info != null){
        for(let i=0;i<info.studetInfo.length;i++){
            dt += "<tr>";
            dt +="<td>"+info.studetInfo[i].name+"</td>";
            dt +="<td>"+info.studetInfo[i].age+"</td>";
            dt +="<td>"+info.studetInfo[i].salary+"</td>";
            dt +="<td>"+info.studetInfo[i].cource+"</td>";
            dt +="<td><input type='button' name='btndel' id='btndel' value='Delete' onclick='delData("+i+")'";
            dt +="<td><input type='button' name='btdedit' id='btnedit' value='Edit' onclick='editData("+i+")'</td>";
            dt +="</tr>";

        }
    }
    document.getElementById('userData').innerHTML = dt;
}
// Delete Records
function delData(id){
     let info = JSON.parse(localStorage.getItem("studentDetail"));
     info.studetInfo.splice(id,1);
     localStorage.setItem("studentDetail",JSON.stringify(info));
     display();
}