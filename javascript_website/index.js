var cartArray = [];
const gc_local_storage = 'CartDetail';
window.addEventListener("DOMContentLoaded", (event) => {

    var items = document.getElementsByClassName("add-to-cart");
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', fun);
    }
});
function cartTable()
{
    var count = 0;
    var btnCartCount =  document.getElementById("cart");
    var span_tag = btnCartCount.getElementsByTagName('span')[0];

    if(cartArray.length <= 0)
    {
        localStorage.removeItem(gc_local_storage);
    
      let arrDetail = localStorage.getItem(gc_local_storage);
         document.getElementById('staticBackdrop_body').innerHTML = '';
         span_tag.textContent = count;
         return true;
     }
    let html = "<table class='table table-responsive'>";
    html+= "<thead>";
    html+= "<tr>";
    html+="<th scope='col'>Product Image</th>";
    html+="<th scope='col'>Product Name</th>";
    html+="<th scope='col'>Product price</th>";
    html+="<th scope='col'>qty</th>";
    html+="<th scope='col'>Sub total</th>";
    html+="<th scope='col'>Action</th>";
    html+="</tr>";
    html+="</thead>";
    var tot_price = 0,
         tot_qty  = 0;

    for(let i in cartArray){
        count = count + cartArray[i].qty;
         //for(let i=0;i<cartArray.length;i++){
        let subtot = 0;
        subtot = parseInt(cartArray[i].price) * parseInt(cartArray[i].qty);
        tot_qty = tot_qty + parseInt(cartArray[i].qty);
      html+="<tr>";
      html+="<td><img src='"+cartArray[i].img+"' height='100' width='100'/></td>";
      html+="<td>"+cartArray[i].pname+"</td>";
      html+="<td>"+cartArray[i].price+"</td>";
      html+="<td>"+cartArray[i].qty+"</td>";
      html+="<td>"+subtot+"</td>";
      html+="<td><input type='button' name='del' id='del' value='Delete' onclick= 'delData("+i+")'>";
      html+="</tr>";
      tot_price = tot_price + subtot;
    } 
    html+="<tr>";
      html+="<td colspan='3'>Total</td>";
      html+="<td>"+tot_qty+"</td>";
      html+="<td>"+tot_price+"</td>";
      html+="</tr>";
      html+="</html>";
      span_tag.textContent = count;
   
      localStorage.setItem(gc_local_storage,JSON.stringify(cartArray));
    
      let arrDetail = localStorage.getItem(gc_local_storage);
    document.getElementById('staticBackdrop_body').innerHTML = html;
}
function fun() 
{
    var cartObj = {"pname":"", "price":"", "qty":1,"img":""};
    let parentDiv = this.parentNode;
    let per_parentDiv = parentDiv.parentNode;
    
    var firstParagraph = parentDiv.getElementsByTagName('p')[0];
    var span_tag = parentDiv.getElementsByTagName('span')[0];
    var img = per_parentDiv.getElementsByTagName('img')[0];
    
    var pname = firstParagraph.textContent;
    var price = span_tag.textContent;
    cartObj.pname = pname;
    cartObj.price = price;
    cartObj.img   = img.src;
    if(cartArray.length > 0)
    {
        var foundValue = cartArray.findIndex(item => item.pname === pname);
        if(foundValue === -1)
        {
            cartArray.push(cartObj);

        }else
        {
            cartArray[foundValue].qty += 1; 
        }   
    }else
    {
        cartArray.push(cartObj);
    }
    cartTable();
    
   

 

}
function delData( del_idx ){
        cartArray.splice(del_idx, 1);
        console.log(cartArray);
        cartTable();
       

}


