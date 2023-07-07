disp();
document.getElementById('add').addEventListener("click",()=>{
    let name = document.user.name.value;
    let age = document.user.age.value;
    let sal = document.user.sal.value;
    let gen = document.user.g1.value;

    let rj = {};

    let rv ={
        id:1,
        name:name,
        age:age,
        salary:sal,
        gender:gen
    };

    let jp = JSON.parse(localStorage.getItem("localData"));
    if(jp !=null){
    
        jp.inform.push(rv);
        localStorage.setItem("localData",JSON.stringify(jp));
    }else{
         
        rv.id+1;
        rj.inform = [rv];
        localStorage.setItem("localData",JSON.stringify(rj));
    }
    document.user.reset();
    disp();
});

function disp(){
    let mjp = JSON.parse(localStorage.getItem("localData"));
    let mj = '';

    if(mjp != null){
        mj +="<tr>";
        mj +="<th>ID</th>"
        mj +="<th>Name</th>";
        mj +="<th>Age</th>";
        mj +="<th>Salary</th>";
        mj +="<th>Gender</th>";
        mj +="<th>Action</th>";
        mj +="</tr>";
       
      for(let i = 0;i<mjp.inform.length;i++){
        mj +="<tr>";
        mj +="<td>"+mjp.inform[i].id+"</td>";
        mj +="<td>"+mjp.inform[i].name+"</td>";
        mj +="<td>"+mjp.inform[i].age+"</td>";
        mj +="<td>"+mjp.inform[i].salary+"</td>";
        mj +="<td>"+mjp.inform[i].gender+"</td>";
        mj +="<td><input type='button' id='delinfo' name='delinfo' value='Delete' onclick='delinfo("+i+")'</td>";
        mj +="</tr>";
      }
    }
    document.getElementById("datatable").innerHTML = mj;
}

function delinfo(id){
    let jk = JSON.parse(localStorage.getItem("localData"));
    if(jk != null){
        jk.inform.splice(id,1);
        localStorage.setItem("localData",JSON.stringify(jk));
        disp();
    }
}