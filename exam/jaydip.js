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
         dt +="<th><center>CarId</center</th>";
        dt +="<th><center>Carprice</center></th>";
        dt +="<th><center>Carbrand</center></th>";
        dt +="<th><center>Carname</center></th>";
        dt +="<th><center>Cartype</center></th>";
        dt +="<th><center>Carcompany</center></th>";
        dt +="<th><center>Action</center></th>";
        dt +="</tr>";

        for(let i = 0 ; i<abc.inform.length;i++){
            dt +="<tr>";
            dt += "<td><center>" + abc.inform[i].carid + "</center></td>";
            dt +="<td><center>"+abc.inform[i].carprice+"</center></td>";
            dt += "<td><center>" + abc.inform[i].carbrand + "</center></td>";
            dt += "<td><center>" + abc.inform[i].carname + "</center></td>";
            dt += "<td><center>" + abc.inform[i].cartype + "</center></td>";
            dt += "<td><center>" + abc.inform[i].carcom + "</center></td>";
            dt +="<td><center><input type='button' name='editcar' id='editcar' class='btn btn-primary' value='Edit' onclick='editcar("+i+")'>";
            dt +="&nbsp;&nbsp;<input type='button' name='delcar' class='btn btn-danger' id='delcar' value='Delete' onclick='delcar("+i+")'></center></td>";
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