var cartArray = [];
window.addEventListener("DOMContentLoaded", (event) => {

    var items = document.getElementsByClassName("add-to-cart");
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', fun);
    }
});
  
function fun() 
{
    var cartObj = {"pname":"", "price":"", "qty":1};
    let parentDiv = this.parentNode;
    var firstParagraph = parentDiv.getElementsByTagName('p')[0];
    var span_tag = parentDiv.getElementsByTagName('span')[0];
    var pname = firstParagraph.textContent;
    var price = span_tag.textContent;
    cartObj.pname = pname;
    cartObj.price = price;
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

    updateCartCount();
    let html = "<table class='table'>";
    html+= "<thead>";
    html+= "<tr>";
    html+="<th scope='col'>#</th>";
    html+="<th scope='col'>Product_Name</th>";
    html+="<th scope='col'>Product_price</th>";
    html+="<th scope='col'>Product_qty</th>";
    html+="</tr>";
    html+="</thead>";
    html+="<tr>";
    html+="<td>"+cartObj.pname+"</td>";
    html+="<td>"+cartObj.price+"</td>";
    html+="<td>"+cartObj.qty+"</td>"; 
  
}  



function updateCartCount()
{
    var count = 0;
    var btnCartCount =  document.getElementById("cart");
    var span_tag = btnCartCount.getElementsByTagName('span')[0];
    for(var i = 0;i < cartArray.length; i++)
    {
        count = count + cartArray[i].qty;
    }
    span_tag.textContent = count;

}



