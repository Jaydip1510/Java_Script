document.getElementById("btn1").addEventListener("click", ()=>{
       let obj = new XMLHttpRequest();

       obj.onreadystatechange = function(){
        if(this.status == 200){
            document.getElementById("demo1").innerHTML = this.responseText;
        }
       }
       obj.open("POST","jstext.txt",true);
       obj.send();
       console.log(obj);
});