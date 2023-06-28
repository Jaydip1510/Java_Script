document.getElementById("catdata").addEventListener("click",()=>{
    let catname = document.catform.catname.value;
    let catdata = {};
    let catinfo =  localStorage.setItem("categorydata",JSON.stringify(catname));
    if(catname != null){
        catinfo.push(catdata);
        
    }else{

    }
})