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
   
    document.getElementById('no1').value = '';
   
}
function bksp(){
    var value = document.getElementById('no1').value;
    document.getElementById('no1').value = value.substr(0,value.length-1);
    
}
function sqrt(){
    var var1 = document.getElementById('no1').value;
    var var2 = Math.sqrt(var1);
    document.getElementById('no1').value = var2;
    txt = '';
    
}
