document.getElementById("catdata").addEventListener("click",()=>{
    let cat = document.catform.catname.value;
    let getdata = localStorage.getItem("categoryData");
    let dt  = JSON.parse(getdata);
   
    let data = {};

     data.category = [
        {
         id:1,
         name:cat
      }
    ];
    if(data != null){
        data.category.push();
    }else{
        localStorage.setItem("categoryData",JSON.stringify(data)); 
    }
    localStorage.setItem("categoryData",JSON.stringify(data));
});