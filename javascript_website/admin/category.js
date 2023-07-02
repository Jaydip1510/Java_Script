display();
// Insert category
document.getElementById("catdata").addEventListener("click", () => {
    let cat = document.catform.catname.value;
    let uid = document.catform.uid.value;
    let getdata = localStorage.getItem("categoryData");
    // create blank object [localstorege formate]
    let data = {};
    let dt = {
        id: 1,
        name: cat
    }
    if (getdata != null) {
        getdata =  JSON.parse(getdata);
        if (uid.length != 0) {
            for(let i=0; i<getdata.length;i++){
                if(uid == getdata[i].id){
                    getdata[i].name = cat;
                }
            }

            document.getElementById('uid').value = '';
        } else {
           
            let len = getdata.length;
            dt = {
                id: len + 1,
                name: cat
            }
            getdata.push(dt);
   
        }
        localStorage.setItem("categoryData", JSON.stringify(getdata));
    } else {
        data = [dt];
        localStorage.setItem("categoryData", JSON.stringify(data));
    }
    document.catform.reset();
    display();

});
function display() {
    let d1 = '';

    let d2 = JSON.parse(localStorage.getItem("categoryData"));

    if (d2 != null) {
        d1 += "<tr>";
        d1 += "<th>ID</th>";
        d1 += "<th>Name</th>";
        d1 += "<th>Action</th>";
        d1 += "</tr>";

        for (i = 0; i < d2.length; i++) {
            d1 += "<tr>";
            d1 += "<td>" + d2[i].id + "</td>";
            d1 += "<td>" + d2[i].name + "</td>";
            d1 += "<td><center><input type='button' name='catdel' id='catdel' value='Delete' onclick='delCat(" + d2[i].id + ")'>";
            d1 += "   <input type='button' name='catedit' id='catedit' value='Edit' onclick='editCat(" + d2[i].id + ")'></td>";
            d1 += "</tr></center>";
        }
    }
    document.getElementById('tbl').innerHTML = d1;
}

function delCat(id) {
    let user = localStorage.getItem("categoryData");
    if (user != null) {
        let id1 = id - 1;
        let disp = JSON.parse(user);
        disp.splice(id1, 1);
        let j = 1;
        for (let i = 0; i < disp.length; i++) {
            disp[i].id = j;
            j++;
        }
        localStorage.setItem("categoryData", JSON.stringify(disp));
        display();
    }
}

function editCat(id) {
    let editdata = localStorage.getItem("categoryData");
    let data = JSON.parse(editdata);

    for (let i = 0; i < data.length; i++) {
        if (id == data[i].id) {

            document.catform.catname.value = data[i].name;
            document.catform.uid.value = data[i].id;
        }
    }
}
