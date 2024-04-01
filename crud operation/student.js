function numberToWords(num) {
   const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

   if (num === 0) return 'zero';

   const addAnd = (num) => (num ? ' and ' : '');

   let words = '';

   if (num >= 1000) {
      words += numberToWords(Math.floor(num / 1000)) + ' thousand';
      num %= 1000;
   }

   if (num >= 100) {
      words += addAnd(words) + ones[Math.floor(num / 100)] + ' hundred';
      num %= 100;
   }

   if (num >= 20) {
      words += addAnd(words) + tens[Math.floor(num / 10)];
      num %= 10;
   }

   if (num >= 11 && num <= 19) {
      words += addAnd(words) + teens[num - 10];
      num = 0;
   }

   if (num >= 1 && num <= 9) {
      words += addAnd(words) + ones[num];
      num = 0;
   }

   return words;
}


display();


document.getElementById('btn1').addEventListener("click", () => {
   let item = document.studform.item.value.trim();
   let qty = document.studform.qty.value.trim();
   let rate = document.studform.rate.value.trim();
   let amount = document.studform.amount.value.trim();
   let gstr = document.studform.gstr.value.trim();
   let uid = document.studform.uid.value.trim();

   // Check if any of the fields are empty
   if (item === '' || qty === '' || rate === '' || amount === '' || gstr === '') {

      return;
   }

   let data = {};
   let info = {
      item: item,
      qty: qty,
      rate: rate,
      gstr: gstr,
      amount: amount,
   };
   let userData = JSON.parse(localStorage.getItem("studentDetail")) || { studetInfo: [] }; // Initialize if no data exists
   // Edit existing data
   if (uid !== '') {

      for (let i = 0; i < userData.studetInfo.length; i++) {
         if (uid == i) {
            userData.studetInfo[i].name = name;
            userData.studetInfo[i].qty = qty;
            userData.studetInfo[i].rate = rate;
            userData.studetInfo[i].gstr = gstr;
            userData.studetInfo[i].amount = amount;
            document.studform.value = '';
         }
      }
   } else {
      // Add new data
      userData.studetInfo.push(info);
   }

   localStorage.setItem("studentDetail", JSON.stringify(userData));

   document.studform.reset();
   document.studform.uid.value = '';
   display();
});


function display() {
   let dt = '';
   let totalAmount = 0; // Initialize total amount

   let info = JSON.parse(localStorage.getItem("studentDetail"));

   if (info && info.studetInfo.length > 0) {
      dt += "<tr>";
      dt += "<th><center><b>Item</b></center></th>";
      dt += "<th><center><b>Qty</b></center></th>";
      dt += "<th><center><b>Rate</b></center></th>";
      dt += "<th><center><b>Amount</b></center></th>"
      dt += "<th><center><b>GST Rate</b></center></th>";
      dt += "<th><center><b>CGST</b></center></th>";
      dt += "<th><center><b>SGST</b></center></th>";
      dt += "<th><center><b>Total</b></center></th>";
      dt += "<th><center><b>Action</b></center></th>";
      dt += "</tr>";

      for (let i = 0; i < info.studetInfo.length; i++) {
         let item = info.studetInfo[i];
         let subtotal = item.qty * item.rate;
         let cgst = (subtotal * item.gstr) / 200; // Assuming GST rate is in percentage
         let sgst = cgst;
         let total = subtotal + cgst + sgst;

         // Add the total amount to the running total
         totalAmount += total;

         dt += "<tr>";
         dt += "<td><center>" + item.item + "</center></td>";
         dt += "<td><center>" + item.qty + "</center></td>";
         dt += "<td><center>" + item.rate + "</center></td>";
         dt += "<td><center>" + item.amount + "</center></td>";
         dt += "<td><center>" + item.gstr + "%</center></td>";
         dt += "<td><center>" + cgst.toFixed(2) + "</center></td>";
         dt += "<td><center>" + sgst.toFixed(2) + "</center></td>";
         dt += "<td><center>" + total.toFixed(2) + "</center></td>";
         dt += " <td><center><i class='fas fa-edit text-success name='btnedit'  onclick='editData(" + i + ")''></i>";
         dt += "<i class='fas fa-trash-alt text-danger name='btndel' onclick='delData(" + i + ")''></i></center></td>";
         dt += "</tr>";
      }
   }

   // Convert total amount to words
   let totalInWords = numberToWords(Math.floor(totalAmount));

   // Add total amount in words to the table
   dt += "<tr><td colspan='8'><b>Total Amount in Words: </b>" + totalInWords + "</td></tr>";

   document.getElementById('userData').innerHTML = dt;
}
// Delete Records
function delData(id) {
   let info = JSON.parse(localStorage.getItem("studentDetail"));
   info.studetInfo.splice(id, 1);
   localStorage.setItem("studentDetail", JSON.stringify(info));
   display();
}

function editData(id) {

   let info = JSON.parse(localStorage.getItem("studentDetail"));

   if (info != null) {
      for (let i = 0; i < info.studetInfo.length; i++) {
         if (i == id) {
            document.studform.item.value = info.studetInfo[i].item;
            document.studform.qty.value = info.studetInfo[i].qty;
            document.studform.rate.value = info.studetInfo[i].rate;
            document.studform.amount.value = info.studetInfo[i].amount;
            document.studform.gstr.value = info.studetInfo[i].gstr;
         }
         document.studform.uid.value = id;
      }
   }
}   
