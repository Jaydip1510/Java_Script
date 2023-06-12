let a = document.getElementsByTagName('p');
console.log(a);
for(let i=0;i<a.length;i++){
    if((i+1)%2==0){
        a[i].style.color = "green";
    }
}
let b = document.getElementsByClassName('box');
document.getElementById('uimg').src="natural.jpg";
document.getElementById('txt1').innerHTML = "<table border='1'><tr><td>jaydip</td></tr><tr><td>raj</td></tr>";
// document.getElementById('btn1').onclick = function(){
//     alert("helllo hiii....");
// }
// document.getElementById('btn1').ondblclick = function(){
//     alert('Double click pressed..');
    
// }

document.getElementById('btn1').addEventListener('click',disp);
function disp(){
    alert('Event called...')
}

