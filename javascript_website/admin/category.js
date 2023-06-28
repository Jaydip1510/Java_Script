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
});
 