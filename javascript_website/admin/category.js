document.getElementById("catdata").addEventListener("click",()=>{
    let catname = document.catform.catname.value;
    let catdata = {};
    let category = {
        id:id,
        name:catname
    }
    let catinfo =  localStorage.setItem("categorydata",JSON.stringify(catname));
    if(catname != null){
        catinfo.push(category);
        let cat = catinfo;
    }else{
         
    }
})