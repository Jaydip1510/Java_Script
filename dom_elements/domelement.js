let a = document.getElementsByTagName('p');
console.log(a);
for(let i=0;i<a.length;i++){
    if((i+1)%2==0){
        a[i].style.color = "green";
    }
}
let b = document.getElementsByClassName('box');
document.getElementById('uimg').src="natural.jpg";