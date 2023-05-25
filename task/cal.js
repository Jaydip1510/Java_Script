let txt = '';
function getval(no){
      txt +=no;
      console.log(txt);
      document.getElementById('no1').value = txt;
}
function getans(){
     var t1 = document.getElementById('no1').value;
     var ans = eval(t1);
     document.getElementById('no1').value = ans;
}
function cleardata(){
   
    document.getElementById('no1').value = '0';
   
}