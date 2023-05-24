function add() {
    let a = document.getElementById('no1').value;
    let b = document.getElementById('no2').value;
    let c = parseInt(a)+parseInt(b);
    document.getElementById('ans').value = c;
}
function sub(){
    let a = document.getElementById('no1').value;
    let b = document.getElementById('no2').value;
    let c = a-b;
    document.getElementById('ans').value = c;
}
function mul(){
    let a = document.getElementById('no1').value;
    let b = document.getElementById('no2').value;
    let c = a*b;
    document.getElementById('ans').value = c;
}
function div(){
    let a = document.getElementById('no1').value;
    let b = document.getElementById('no2').value;
    let c = a/b;
    document.getElementById('ans').value = c;
}
function cleardata(){
   
    document.getElementById('no1').value = '';
    document.getElementById('no2').value = '';
    document.getElementById('ans').value = '';
}