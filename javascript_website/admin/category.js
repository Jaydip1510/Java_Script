
// Insert category
document.getElementById("catdata").addEventListener("click",()=>{
    let cat = document.catform.catname.value;
    let getdata = localStorage.getItem("categoryData");
// create blank object [localstorege formate]
    let data = {};
    let dt = {
        id:1,
        name:cat
     }
    if(getdata != null){
        let udt  = JSON.parse(getdata);
        let len = udt.category.length;
        dt = {
            id:len+1,
            name:cat
         }
        udt.category.push(dt);
        localStorage.setItem("categoryData",JSON.stringify(udt));
    }else{
        data.category = [dt];
        localStorage.setItem("categoryData",JSON.stringify(data)); 
    }
    document.catform.reset();
     display();

});
function display(){
    let d1 = '';

    let d2 = JSON.parse(localStorage.getItem("categoryData"));

    if(d2 != null){
        d1 +="<tr>";
        d1 +="<th>ID</th>";
        d1 +="<th>Name</th>";
        d1 +="<th>Action</th>";
        d1 +="</tr>";

           for(i = 0; i<d2.category.length;i++){
            d1 += "<tr>";
            d1 += "<td>"+d2.category[i].id+"</td>";
            d1 += "<td>"+d2.category[i].name+"</td>";
            d1 +="<td><center><input type='button' name='catdel' id='catdel' value='Delete' onclick='delCat("+i+")'>";
            d1 +="   <input type='button' name='catedit' id='catedit' value='Edit' onclick='editCat("+i+")'></td>";
            d1 +="</tr></center>";
        
        }
    }
    document.getElementById('tbl').innerHTML = d1;
}

function delCat(id) {
    let user = localStorage.getItem("categoryData");
    if(user != null){
        let disp = JSON.parse(user);
        disp.category.splice(id,1);
        localStorage.setItem("categoryData",JSON.stringify(disp));
        display();
    }
}

function editCat(id){
    let editdata = localStorage.getItem("categoryData");
    let data = JSON.parse(editdata);
    
       for(let i = 0; i<data.category.length;i++){
        if(id == i){
            
                document.catform.catname.value = data.category[i].name;
                document.catform.uid.value = i;
        }
       } 
    }


