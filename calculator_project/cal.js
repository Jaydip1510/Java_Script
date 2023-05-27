
let txt = '';
let is_opcode = false;
function getval(no){
    if(no==="/" || no=== "*" || no==="+" || no==="-"){
        if(is_opcode === true)
        {
            return;
        }
       if(txt.length===0){
          return;
       } 
       is_opcode = true;
    }else{
        is_opcode = false;
    }
    txt +=no;
    document.getElementById('no1').value = txt;
    
}
function getans(){
    is_opcode = false;
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

