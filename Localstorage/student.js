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

    let studData = JSON.parse(localStorage.getItem("StudentDetail"));
});

function display(){
    let dt = "<tr>";
    dt += "<th>Name</th>";
    dt+="</tr>";
}