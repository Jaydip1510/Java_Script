function add() {
    let a = document.getElementById('no1').value;
    let c = eval(a);
    document.getElementById('no1').value = c;
}
function sub(){
    let a = document.getElementById('no1').value;
    let c = eval(a);
    document.getElementById('no1').value = c;
}
function mul(){
    let a = document.getElementById('no1').value;
    let c = eval(a);
    document.getElementById('no1').value = c;
}
function div(){
    let a = document.getElementById('no1').value;
    let c = eval(a);
    document.getElementById('no1').value = c;
}
function operation(val)
{

 let operation_code = val.getAttribute("opcode");
 console.log(operation_code);
 if(operation_code == 'cls');
 {
    document.getElementById('no1').value = '0';
    document.getElementById('no1').value;
 }
}
function btn(val){
    let val_no1 = document.getElementById('no1').value;
    if(val_no1)
    {
        if(val_no1.length === 1 && val_no1 == '0')
        {
            val_no1  = '';
        }
        document.getElementById('no1').value = val_no1 + val.getAttribute("opcode");
    }else
    {
        document.getElementById('no1').value = val.getAttribute("opcode");
    }
    
}
