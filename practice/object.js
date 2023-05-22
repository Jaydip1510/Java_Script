let emp = {
       firstname : "jaydip",
       lastname : "makwana",
       age: "25"     
};
// document.write("First name is:-"+emp.firstname+"<br>");
// document.write("last name is:-"+emp.lastname+"<br>");
// document.write("age is:-"+emp.age);

// let a = {};
 
//   a.firstname = "jaydip";
//   a.lastname = "makwana";
//   a.age = "25";

//   document.write("first name is:-"+a.firstname+"<br>");
//   document.write("last name is:-"+a.lastname+"<br>");
//   document.write("age is:-"+a.age);
emp.salary = 25000;
let b;
for(b in emp){
    document.write(b+" is:-"+emp[b]+"<br>");
}