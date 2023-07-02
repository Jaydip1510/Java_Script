document.getElementById("btn").addEventListener("click",()=>{
    let imag = document.product.pimg.value;
    let pname = document.product.pname.value;
    let price = document.product.price.value;

    let pdata = {};
    let pdetail = {
        image:imag,
        prodname:pname,
        price:price
    };
    let data = JSON.parse(data);
    if(data != null){
        data.push(pdetail);
        localStorage.setItem("productDetail",JSON.stringify(pdetail));
    }else{
        pdata = [pdetail];
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
      pdt +="</tr>";

      let prd = localStorage.getItem("productDetail");

      if(prd != null){
        let prddetail = JSON.parse(prd);
        for(let i = 0; i<prddetail.length;i++){
            pdt +="<tr>";
            pdt +="<td>"+prddetail[i].image+"</td>";
            pdt +="<td>"+prddetail[i].prodname+"</td>";
            pdt +="<td>"+prddetail[i].price+"</td>";
            pdt +="</tr>";
        }
      }
      document.getElementById("ptable").innerHTML = pdt;
}