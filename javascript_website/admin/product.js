window.addEventListener("DOMContentLoaded", (event) => {
    var cat_html = '';
    let category_data = localStorage.getItem("categoryData");
    console.log(category_data);
    if(category_data != null)
    {
        category_data = JSON.parse(category_data);
       
        
            category_data.forEach(element => {
                console.log(element);
                cat_html+="<option value='"+element.id+"'>"+element.name+"</option>"
            });
        
    }
    document.getElementById("category").innerHTML = cat_html;

});

document.getElementById("btn").addEventListener("click",()=>{
    let imag  = document.product.pimg.value;
    let pname = document.product.pname.value;
    let price = document.product.price.value;

    
    let pdetail = {
        image:imag,
        prodname:pname,
        price:price,
        catgory_id:1,
    };
    console.log(pdetail);
    let data = JSON.parse(localStorage.getItem("productDetail"));
    console.log("Data");
    console.log(data);
    if(data != null){
        console.log("If Condition");
        data.push(pdetail);
        console.log("After Push");
        console.log(data);
        localStorage.setItem("productDetail",JSON.stringify(data));
    }else{
        console.log("Else Condition");
        
        let pdata = [];
        pdata.push(pdetail);
        console.log("Else Condition + Afer Push");
        console.log(pdata);
        localStorage.setItem("productDetail",JSON.stringify(pdata));
    }
    document.product.reset();
    display();
});

function display(){
      let pdt = "<tr>";
      pdt +="<th>P_Image</th>";
      pdt +="<th>P_Name</th>";
      pdt +="<th>P_price</th>";
      pdt +="<th>Catogery_id</th>";
      pdt +="</tr>";

      let prd = localStorage.getItem("productDetail");

      if(prd != null){
        let prddetail = JSON.parse(prd);
        for(let i = 0; i<prddetail.length;i++){
            pdt +="<tr>";
            pdt +="<td>"+prddetail[i].image+"</td>";
            pdt +="<td>"+prddetail[i].prodname+"</td>";
            pdt +="<td>"+prddetail[i].price+"</td>";
            pdt +="<td>"+prddetail[i].catgory_id+"<td>";
            pdt +="</tr>";
        }
      }
      document.getElementById("ptable").innerHTML = pdt;
}