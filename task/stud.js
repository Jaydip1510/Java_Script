document.getElementById('btn').addEventListener("click",()=>{
    let name = document.studform.sname.value;
    let age = document.studform.age.value;
    let sal = document.studform.sal.value;
    let gen = document.studform.g1.value;

    let s1 = {};

    let sdata = {
        name:name,
        age:age,
        salary:sal,
        gender:gen
    };
    let sinfo = JSON.parse(localStorage.getItem("studentInfo"));
     if(sinfo != null){
        sinfo.push(sdata);
        localStorage.setItem("studentInfo",JSON.stringify(sinfo));
    }else{
       s1 = [sdata];
       localStorage.setItem("studentInfo",JSON.stringify(s1));
    }
    document.studform.reset();
    display();

});
function display(){
    let sd='';
    sd +="<tr>";
    sd +="<th>Name</th>";
    sd +="<th>Age</th>";
    sd +="<th>Salary</th>";
    sd +="<th>Gender</th>";
    sd +="</tr>";
     let st = localStorage.getItem("studentInfo");
     if(st !=null){
       let stud = JSON.parse(st); 
        for(let i=0; i<stud.length;i++){
            st +="<tr>";
            st +="<td>"+stud[i].name+"</td>";
            st +="<td>"+stud[i].age+"</td>";
            st +="<td>"+stud[i].salary+"</td>";
            st +="<td>"+stud[i].gender+"</td>";
            st +="</tr>";
        }    
    }
    document.getElementById("studtable").innerHTML = st;
}