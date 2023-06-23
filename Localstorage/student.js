display();
document.getElementById('btn1').addEventListener("click",()=>{
    let name = document.studform.uname.value;
    let age = document.studform.age.value;
    let sal = document.studform.sal.value;
    let cr = document.studform.cource.value;
    let gen = document.studform.gender.value;
    let uid = document.studform.uid.value;
    let hob = document.getElementsByName('h1');
    let h1 = [];
    for(let j=0;j<hob.length;j++){
      if(hob[j].checked == true){
          h1.push(hob[j].value);
      }
    }

    let data = {};
    let info = {
        name:name,
        age:age,
        salary:sal,
        cource:cr,
        gender: gen,
        hobby:h1
    };

     let userData = JSON.parse(localStorage.getItem("studentDetail"));
     if(userData != null){
        if(uid != ''){
         for(let i=0; i<userData.studetInfo.length;i++){
            if(uid == i){
               userData.studetInfo[i].name = name;
               userData.studetInfo[i].age = age;
               userData.studetInfo[i].salary = sal;
               userData.studetInfo[i].cource = cr;
               userData.studetInfo[i].gender = gen;
               userData.studetInfo[i].hobby = h1;
               document.studform.value = '';

            }
         }
         localStorage.setItem("studentDetail",JSON.stringify(userData));
         
        }else{
         userData.studetInfo.push(info);
         localStorage.setItem("studentDetail",JSON.stringify(userData));
        }
        
     }else{
        data.studetInfo = [info];
        localStorage.setItem("studentDetail",JSON.stringify(data));
     }
     document.studform.reset();
     document.studform.uid.value = '';
     display();

});

function display(){
    let dt = "<tr>";
    dt += "<th>Name</th>";
    dt +="<th>Age</th>";
    dt += "<th>Salary</th>";
    dt +="<th>Cource</th>";
    dt +="<th>Gender</th>";
    dt +="<th>Hobby</th>";
    dt +="<th>Action</th>";
    dt+="</tr>";
   
    let info = JSON.parse(localStorage.getItem("studentDetail"));
    if(info && info.studetInfo.length > 0){     
        for(let i=0;i<info.studetInfo.length; i++){
            dt += "<tr>";
            dt +="<td>"+info.studetInfo[i].name+"</td>";
            dt +="<td>"+info.studetInfo[i].age+"</td>";
            dt +="<td>"+info.studetInfo[i].salary+"</td>";
            dt +="<td>"+info.studetInfo[i].cource+"</td>";
            dt +="<td>"+info.studetInfo[i].gender+"</td>";
            dt +="<td>"+info.studetInfo[i].hobby+"</td>";
            dt +="<td><input type='button' name='btndel' id='btndel' value='Delete' onclick='delData("+i+")'>";
            dt +="   <input type='button' name='btdedit' id='btnedit' value='Edit' onclick='editData("+i+")'></td>";
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

function editData(id){
   
        let info = JSON.parse(localStorage.getItem("studentDetail")); 
        
        if(info != null){
          for(let i=0;i<info.studetInfo.length;i++){
            if(i == id){
               document.studform.uname.value = info.studetInfo[i].name;
               document.studform.age.value = info.studetInfo[i].age;
               document.studform.sal.value = info.studetInfo[i].salary;
               document.studform.cource.value = info.studetInfo[i].cource;
               document.studform.gender.value = info.studetInfo[i].gender;

               let hob = document.getElementsByName('h1');
               let hdata = info.studetInfo[i].hobby;
               for(let j=0;j<hob.length;j++){
                  if(hdata.includes(hob[j].value)){
                     hob[j].checked = true;
                  }
               }
               document.studform.uid.value = id;
            }
          }
        }   
}