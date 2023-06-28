document.getElementById("catdata").addEventListener("click",()=>{
    let cat = document.catform.catname.value;
    let getdata = localStorage.getItem("categoryData");
    let dt  = JSON.parse(getdata);
   
    let data = {};

       dt = {
        id:1,
        name:cat
     }
     
    if(data != null){
        data.category.push(dt);
    }else{
        data.category = [dt];
        localStorage.setItem("categoryData",JSON.stringify(data)); 
    }
    localStorage.setItem("categoryData",JSON.stringify(data));
});