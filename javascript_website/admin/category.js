document.getElementById("catdata").addEventListener("click",()=>{
    let cat = document.catform.catname.value;
    let getdata = localStorage.getItem("categoryData");
    let dt  = JSON.parse(getdata);

    if(dt != null){
        dt.Category.push(cat);
        catdata = dt;
    }else{
         let catdata = {};
         catdata.Category = [cat];
    }
    localStorage.setItem("categoryData",JSON.stringify(catdata));
});