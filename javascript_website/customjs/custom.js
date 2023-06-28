let storageData= localStorage.getItem("categoryData");
console.log("LocalStorage =>"+storageData);
let userdata =JSON.parse(storageData);

console.log(userdata);
let row = '';
for(let i=0; i<userdata.category.length;i++){
   row += "<li><a class='dropdown-item' href='#'>"+userdata.category[i].name+"</a></li>";
}
document.getElementById('catid').innerHTML = row;