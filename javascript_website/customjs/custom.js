let userdata = localStorage.getItem("categoryData");
let userdata1 = {};
let row = '';
for(let i=0; i<userdata.category.length;i++){
   row += "<li><a class='dropdown-item' href='#'>"+userdata.category[i].catname+"</a></li>";
}
document.getElementById('catid').innerHTML = row;