function operation(val) {
    let opcode = val.getAttribute("opcode");
    let val_no1 = document.getElementById('no1').value;
    switch (opcode) {
        case "cls":
            document.getElementById('no1').value = '0';
            break;
        case "/": case "*": case  "-": case  "+":
            document.getElementById('no1').value = val_no1 + val.getAttribute("opcode");
            break;
        case "=":
            document.getElementById('no1').value = eval(val_no1);
            break;
        default:
            break;
    }
}
function btn(val) {
    let val_no1 = document.getElementById('no1').value;
    if (val_no1) {
        if (val_no1.length === 1 && val_no1 == '0') {
            val_no1 = '';
        }
        document.getElementById('no1').value = val_no1 + val.getAttribute("opcode");
    } else {
        document.getElementById('no1').value = val.getAttribute("opcode");
    }
}
