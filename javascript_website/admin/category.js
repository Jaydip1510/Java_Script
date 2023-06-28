document.getElementById("catdata").addEventListener("click",()=>{
    let cat = document.catform.catname.value;
    let getdata = localStorage.getItem("categoryData");
    let udt  = JSON.parse(getdata);
    
   
    let data = {};

    let dt = {
        id:1,
        name:cat
     }
    if(udt != null){
        udt.category.push(dt);
        localStorage.setItem("categoryData",JSON.stringify(udt));
    }else{
        data.category = [dt];
        localStorage.setItem("categoryData",JSON.stringify(data)); 
    }
   
});


// udt.category.push(dt);
// localStorage.setItem("categoryData",JSON.stringify(udt)); 