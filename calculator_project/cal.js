let txt = '';
function getval(no){
    txt +=no;
    document.getElementById('no1').value = txt;


}
function getans(){
    var t1 = document.getElementById('no1').value;
    var ans = eval(t1);
    document.getElementById('no1').value = ans;
    txt = ''; 
}
function cleardata(){
     document.getElementById('no1').value = '0';
     txt = '';
}
function bksp(){
    var v1 = document.getElementById('no1').value;
    document.getElementById('no1').value = v1.substr(0,v1.length-1);
}