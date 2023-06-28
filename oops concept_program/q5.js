function add(txt){
     ch = txt.value.slice(txt.value.length-1);
     if(!((ch>='a' && ch<='z') || (ch>='A' && ch<='Z'))){
        document.getElementById('t1').value = txt.value.slice(0,-1);
     }else{
       
     }
}