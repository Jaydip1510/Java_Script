let user = ["jaydip",25];
let str = JSON.stringify(user);

localStorage.setItem("userDetail",str);

let strarray = JSON.parse(localStorage.getItem('userDetail'));

document.getElementById('demo').innerHTML = "name is:-"+strarray[0]+"Age is:-"+strarray[1];


document.getElementById("btn1").addEventListener("click",function(){
         localStorage.removeItem('username1');
         localStorage.clear();
});