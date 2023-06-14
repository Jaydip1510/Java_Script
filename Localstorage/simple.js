let name = "jaydip";
localStorage.setItem("username",name);
localStorage.setItem("username","jaydip makwana");
document.getElementById('demo').innerHTML = localStorage.getItem('username');

document.getElementById('btn1').addEventListener("click",function(){
    localStorage.removeItem('username');
});
