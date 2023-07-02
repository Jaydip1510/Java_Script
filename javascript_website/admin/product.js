
window.addEventListener("DOMContentLoaded", (event) => {
    display();
    var cat_html = '';
    let category_data = localStorage.getItem("categoryData");
    if(category_data != null)
    {
        category_data = JSON.parse(category_data);
            category_data.forEach(element => {
                cat_html+="<option value='"+element.id+"'>"+element.name+"</option>"
            });
        
    }
    document.getElementById("category").innerHTML = cat_html;

});

document.getElementById("btn").addEventListener("click",()=>{
    let category_data = localStorage.getItem("categoryData");
    if(category_data != null)
    {
        category_data = JSON.parse(category_data);
    }
    let imag  = document.product.pimg.value;
    let pname = document.product.pname.value;
    let price = document.product.price.value;
    let catid = document.product.category.value;
    let found = category_data.find(function (element) {
        return element.id == catid;
    });
    let catname = found.name;
    console.log(catname);
    
    let pdetail = {
        "product_id" : 0,
        "catogory_id": catid,
        "catogory_name": catname,
        "product_img": imag,
        "product_name": pname,
        "product_price":price

    };
  //  console.log(pdetail);
    let data = JSON.parse(localStorage.getItem("productDetail"));
   // console.log("Data");
    //console.log(data);
    if(data != null){
      //  console.log("If Condition");
        data.push(pdetail);
        //console.log("After Push");
        //console.log(data);
        localStorage.setItem("productDetail",JSON.stringify(data));
    }else{
       // console.log("Else Condition");
        let pdata = [];
        pdata.push(pdetail);
        //console.log("Else Condition + Afer Push");
        //console.log(pdata);
        localStorage.setItem("productDetail",JSON.stringify(pdata));
    }
    document.product.reset();
    display();
});

function display(){
      let pdt = "<tr>";
      pdt +="<th>Id</th>";
      pdt +="<th width='10%'>Image</th>";
      pdt +="<th>Product Name</th>";
      pdt +="<th>Price</th>";
      pdt +="<th>Catogery Id</th>";
      pdt +="<th>Catogory Name</th>";
      pdt +="<th>Action</th>";
      pdt +="</tr>";

      let prd = localStorage.getItem("productDetail");

      if(prd != null){
        let prddetail = JSON.parse(prd);
        for(let i = 0; i<prddetail.length;i++){
            pdt +="<tr>";
            pdt +="<td>"+prddetail[i].product_id+"</td>";
            pdt +="<td>"+prddetail[i].product_img+"</td>";
            pdt +="<td>"+prddetail[i].product_name+"</td>";
            pdt +="<td>"+prddetail[i].product_price+"</td>";
            pdt +="<td>"+prddetail[i].catogory_id+"</td>";
            pdt +="<td>"+prddetail[i].catogory_name+"</td>";
            pdt += "<td><center><input type='button' name='prddel' id='prddel' value='Delete' onclick='delete_product(" + prddetail[i].product_id + ")'>";
            pdt += "   <input type='button' name='prdedit' id='prdedit' value='Edit' onclick='edit_product(" + prddetail[i].product_id + ")'></td>";
            pdt +="</tr>";
        }
      }
      document.getElementById("ptable").innerHTML = pdt;
}
function edit_product(id)
{
  let prodata = localStorage.getItem("productDetail");
  let data = JSON.parse(prodata);  
    for (let i = 0; i < data.length; i++) {
      
  } 
}