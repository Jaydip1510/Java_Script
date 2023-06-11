class emp {
      constructor(id, name, age) {
            this.id = id;
            this.name = name;
            this.age = age;
      }
      displaydata() {

            return this.id + "<br>Data is:-" + this.name + "<br>Data is:-" + this.age + "<br>";

      }

}
let a = new emp();
let arr = [];
let edit_position = '';
function editdata(index) {
      document.getElementById('btnEditSave').style.visibility = 'visible';
      document.getElementById('btnSubmit').style.visibility = 'hidden';
      document.getElementById('t_name').value = arr[index].name;
      document.getElementById('t_age').value = arr[index].age;
      edit_position = index;
      var tbl = '<table id="tblData" border="1" align="center">';
      tbl += '<tr>';
      tbl += '<td width="15%">Id</td>';
      tbl += '<td width="60%">Name</td>';
      tbl += '<td width="15%">Age</td>';
      tbl += '<td width="10%">Operation</td>';
      tbl += '</tr>';

      arr.forEach(a => {
            
            var index = a.id - 1;
            let opration_html = '<a href="#" onclick="editdata(' + index + ')">Edit</a>';
            let trHtml = '<tr>';
            if(index === edit_position)
            {
                  trHtml += '<td><mark>' + a.id +'</mark></td>';
                  trHtml += '<td><mark>' + a.name +'</mark></td>';
                  trHtml += '<td><mark>' + a.age + '</mark></td>';
                  trHtml += '<td><mark>' + opration_html + '</mark></td>';
            }else{
                  trHtml += '<td>' + a.id + '</td>';
                  trHtml += '<td>' + a.name + '</td>';
                  trHtml += '<td>' + a.age + '</td>';
                  trHtml += '<td>' + opration_html + '</td>';
            }
            
            
            trHtml += '</tr>';
            tbl = tbl + trHtml;
      });
      tbl = tbl + '</table>';
      document.getElementById("outPut").innerHTML = tbl;
      }

function savedata(a) {
      var data = document.getElementById('t_name').value;
      var age = document.getElementById('t_age').value;
      if (a == "Add") {
            let id = arr.length;
            if (id === 0) { id = 1; } else { id = id + 1; }
            let obj = new emp(id, data, age);
            arr.push(obj)
            //console.log(arr);

      } else if (a == "Edit") {
            arr[edit_position].name = data;
            arr[edit_position].age = age;
            document.getElementById('btnEditSave').style.visibility = 'hidden';
            document.getElementById('btnSubmit').style.visibility = 'visible';
            document.getElementById('t_name').value = '';
            document.getElementById('t_age').value = '';
            edit_position = '';

      }
      var tbl = '<table id="tblData" border="1" align="center">';
      tbl += '<tr>';
      tbl += '<td width="15%">Id</td>';
      tbl += '<td width="60%">Name</td>';
      tbl += '<td width="15%">Age</td>';
      tbl += '<td width="10%">Operation</td>';
      tbl += '</tr>';

      arr.forEach(a => {
            var index = a.id - 1;
            let opration_html = '<a href="#" onclick="editdata(' + index + ')">Edit</a>';
            let trHtml = '<tr>';
            trHtml += '<td>' + a.id + '</td>';
            trHtml += '<td>' + a.name + '</td>';
            trHtml += '<td>' + a.age + '</td>';
            trHtml += '<td>' + opration_html + '</td>';
            trHtml += '</tr>';
            tbl = tbl + trHtml;
            
            
      });
      tbl = tbl + '</table>';
      document.getElementById("outPut").innerHTML = tbl;
}

// document.write("Data is:-"+a.displaydata());

emp = class {
      constructor(id, name, age) {
            this.id = id;
            this.name = name;
            this.age = age;
      }
      //       displaydata(){
      //       return this.id+"---"+this.name+"---"+this.age;
      //    }

};
emp.prototype.displaydata = function () {
      return this.id + "---" + this.name + "---" + this.age;
}
let obj = new emp(1204, "jaydip", 26);
//document.write("disp data is:-"+obj.displaydata());
