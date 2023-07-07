disp();
document.getElementById("car").addEventListener("click",()=>{
    let cprice = document.cardata.carprice.value;
    let cbrand = document.cardata.carbrand.value;
    let cname = document.cardata.carname.value;
    let ctype = document.cardata.g1.value;
    let cid = document.cardata.cid.value;
    let car = document.getElementsByName('c1');
    let c2 = [];
    for(let j = 0; j<car.length;j++){
        if(car[j].checked == true){
        c2.push(car[j].value);
        }
    }
    let data = {};
    let carinfo = {
        carid:1,
        carprice:cprice,
        carbrand:cbrand,
        carname:cname,
        cartype:ctype,
        carcom:c2
    };

    let detail = JSON.parse(localStorage.getItem("carDetail"));
    if(detail !=null){
        if(cid != ''){
            for(let i = 0; i<detail.inform.length;i++){
                if(cid == i){
                    detail.inform[i].carprice =cprice;
                    detail.inform[i].carbrand = cbrand;
                    detail.inform[i].carname = cname;
                    detail.inform[i].cartype = ctype; 
                    detail.inform[i].carcom = c2;
                }
            }
            localStorage.setItem("carDetail",JSON.stringify(detail));
        }else{
            let len = detail.inform.length;
          carinfo = {
          carid: len+1,
          carprice: cprice,
          carbrand: cbrand,
          carname: cname,
          cartype: ctype,
          carcom: c2,
        };
      
        detail.inform.push(carinfo);

        }
        
        localStorage.setItem("carDetail",JSON.stringify(detail));
    }else{
        data.inform = [carinfo];
        localStorage.setItem("carDetail",JSON.stringify(data));
    }
    document.cardata.reset();
    disp();
});

function disp(){
      let abc = JSON.parse(localStorage.getItem("carDetail"));
      let dt = '';

      if(abc != null){
        dt +="<tr>";
         dt +="<th>CarId</th>";
        dt +="<th>Carprice</th>";
        dt +="<th>Carbrand</th>";
        dt +="<th>Carname</th>";
        dt +="<th>Cartype</th>";
        dt +="<th>Carcompany</th>";
        dt +="<th>Action</th>";
        dt +="</tr>";

        for(let i = 0 ; i<abc.inform.length;i++){
            dt +="<tr>";
            dt += "<td>" + abc.inform[i].carid + "</td>";
            dt +="<td>"+abc.inform[i].carprice+"</td>";
            dt += "<td>" + abc.inform[i].carbrand + "</td>";
            dt += "<td>" + abc.inform[i].carname + "</td>";
            dt += "<td>" + abc.inform[i].cartype + "</td>";
            dt += "<td>" + abc.inform[i].carcom + "</td>";
            dt +="<td><input type='button' name='delcar' id='delcar' value='Delete' onclick='delcar("+i+")'>";
            dt +="<input type='button' name='editcar' id='editcar' value='Edit' onclick='editcar("+i+")'></td>";
            dt +="</tr>";
        }
      }
      document.getElementById("cartable").innerHTML = dt;

}

function delcar(id){
    let rj = JSON.parse(localStorage.getItem("carDetail"));
    if(rj != null){
        rj.inform.splice(id,1);
        localStorage.setItem("carDetail",JSON.stringify(rj));
        disp();
    }
}

function editcar(id){
     let jay = JSON.parse(localStorage.getItem("carDetail"));
     if(jay !=null){
        for(let i = 0; i<jay.inform.length;i++){
            if(i == id){
                document.cardata.carprice.value = jay.inform[i].carprice;
                document.cardata.carbrand.value = jay.inform[i].carbrand;
                document.cardata.carname.value = jay.inform[i].carname;
                document.cardata.g1.value = jay.inform[i].cartype;
                let car = document.getElementsByName("c1");
                let h1 = jay.inform[i].carcom; 
                for(let j=0; j<car.length;j++){
                    if(h1.includes(car[j].value)){
                        car[j].checked = true;
                    }
                }  
            }
            document.cardata.cid.value = id;
        }
     }
     
}