display();
document.getElementById('btn1').addEventListener("click",()=>{
     let name = document.studform.uname.value;
     let age = document.studform.age.value;
     let sal = document.studform.salary.value;
     let gen = document.studform.gender.value;
     let hobby = document.studform.hobby.value;
     let uid = document.studform.uid.value;


     let data = {};
     let info = {
          name:name,
          age:age,
          salary:sal,
          gender:gen,
          hobby:hobby
     };
     let empData = JSON.parse(localStorage.getItem("empDetail"));
     if(empData != null){
        if(uid != ''){
         for(let i=0; i<empData.empInfo.length;i++){
            if(uid == i){
               empData.empInfo[i].name = name;
               empData.empInfo[i].age = age;
               empData.empInfo[i].salary = sal;
               empData.empInfo[i].gender = gen;
               empData.empInfo[i].hobby = hobby;
               document.studform.value = '';

            }
         }
         localStorage.setItem("empDetail",JSON.stringify(empData));
         
        }else{
         empData.empInfo.push(info);
         localStorage.setItem("empDetail",JSON.stringify(empData));
        }
        
     }else{
        data.empInfo = [info];
        localStorage.setItem("empDetail",JSON.stringify(data));
     }
     document.studform.reset();
     document.studform.uid.value = '';
     display();
});

function display(){
     let dt = "<tr>";
     dt += "<th>Name</th>";
     dt += "<th>Age</th>";
     dt += "<th>Salary</th>";
     dt += "<th>Gender</th>";
     dt += "<th>Hobby</th>";
     dt += "<th>Action</th>"
     dt += "</tr>";
 
    let info = JSON.parse(localStorage.getItem("empDetail"));       
    if(info != null){
        for(let i=0;i<info.empInfo.length;i++){
            dt += "<tr>";
            dt += "<td>"+info.empInfo[i].name+"</td>";
            dt += "<td>"+info.empInfo[i].age+"</td>";
            dt += "<td>"+info.empInfo[i].salary+"</td>";
            dt += "<td>"+info.empInfo[i].gender+"</td>";
            dt += "<td>"+info.empInfo[i].hobby+"</td>";
            dt += "<td><input type='button' name='btndel' id='btndel' value='Delete' onclick = 'delData("+i+")'>";
            dt +=" <input type='button' name='btnedit' id='btnedit' value='Edit' onclick = 'editData("+i+")'> </td>";
            dt += "</tr>";
        }
    }
    document.getElementById("userData").innerHTML = dt;
}

function delData(id){
       let info = JSON.parse(localStorage.getItem("empDetail"));
       info.empInfo.splice(id,1);
       localStorage.setItem("empDetail",JSON.stringify(info));
       display();   
}

function editData(id){
    let info = JSON.parse(localStorage.getItem("empDetail"));
     if (info != null){
        for(let i = 0;i<info.empInfo.length;i++){
            if(i == id){
            document.studform.uname.value = info.empInfo[i].name;
            document.studform.age.value = info.empInfo[i].age;
            document.studform.salary.value = info.empInfo[i].salary;
            document.studform.gender.value = info.empInfo[i].gender;
            document.studform.hobby.value = info.empInfo[i].hobby;
            document.studform.uid.value = id;
        }
      }
    }
}