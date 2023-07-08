display();
document.getElementById('cbtn').addEventListener("click",()=>{
    let price = document.carinfo.price.value;
    let name = document.carinfo.name.value;
    let brand = document.carinfo.brand.value;
    let type = document.carinfo.g1.value;
    let com = document.getElementsByName('c1');
    let h1 = [];
    for(let j = 0;j<com.length;j++){
        if(com[j].checked == true){
            h1.push(com[j].value);
        }
    }

    let d1 ={};
    let cdata ={
        carid:1,
        carprice:price,
        carname:name,
        carbrand:brand,
        cartype:type,
        carcompany:h1
    };
    let abc = JSON.parse(localStorage.getItem("carInfo"));
    if(abc != null){
        let len = abc.cardata.length;
        cdata ={
            carid:len+1,
            carprice:price,
            carname:name,
            carbrand:brand,
            cartype:type,
            carcompany:h1
        };
        abc.cardata.push(cdata);
        localStorage.setItem("carInfo",JSON.stringify(abc));
    }else{
        
        d1.cardata = [cdata];
        localStorage.setItem("carInfo",JSON.stringify(d1));
    }
    document.carinfo.reset();
    display();
});

function display(){
            let rv = JSON.parse(localStorage.getItem("carInfo"));
            let dt = '';
            if(rv != null){
                dt += "<tr>";
                dt +="<th><center><b>CarId</center></b></th>";
                dt +="<th><center><b>Carprice</center></b></th>";
                dt +="<th><center><b>Carname</center></b></th>";
                dt +="<th><center><b>Carbrand</center></b></th>";
                dt +="<th><center><b>Cartype</center></b></th>";
                dt +="<th><center><b>Carcompany</center></b></th>";
                dt +="<th><center><b>Action</center></b></th>";
                dt += "</tr>";

                for(let i = 0;i<rv.cardata.length;i++){
                    dt +="<tr>";
                    dt +="<td><center>"+rv.cardata[i].carid+"</center></td>";
                    dt +="<td><center>"+rv.cardata[i].carprice+"</center></td>";
                    dt +="<td><center>"+rv.cardata[i].carname+"</center></td>";
                    dt +="<td><center>"+rv.cardata[i].carbrand+"</center></td>";
                    dt +="<td><center>"+rv.cardata[i].cartype+"</center></td>";
                    dt +="<td><center>"+rv.cardata[i].carcompany+"</center></td>";
                    dt +="<td><center><input type='button' name='deldata' class='btn btn-danger' id='deldata' value='Delete' onclick='deldata("+i+")'></center></td>";

                    dt +="</tr>";
                }
            }
           document.getElementById('ctable').innerHTML = dt;
}

function deldata(id){
    let mjp = JSON.parse(localStorage.getItem("carInfo"));
    if(mjp != null){
        mjp.cardata.splice(id,1);
        localStorage.setItem("carInfo",JSON.stringify(mjp));
        display();
    }
}