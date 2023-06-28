document.getElementById("catdata").addEventListener("click",()=>{
    let cat = document.catform.catname.value;
    let getdata = localStorage.getItem("categoryData");
    
    let data = {};
    let dt = {
        id:1,
        name:cat
     }
    if(getdata != null){
        let udt  = JSON.parse(getdata);
        let len = udt.category.length;
        dt = {
            id:len+1,
            name:cat
         }
        udt.category.push(dt);
        localStorage.setItem("categoryData",JSON.stringify(udt));
    }else{
        data.category = [dt];
        localStorage.setItem("categoryData",JSON.stringify(data)); 
    }
    document.catform.reset();
});

document.getElementById('DelData').addEventListener("click",()=>{
    let getdata = localStorage.getItem("categoryData");
    if(getdata != null){
    getdata = JSON.parse(getdata);
    getdata.category.splice(1,1);
    localStorage.setItem("categoryData",JSON.stringify(getdata));
}
});