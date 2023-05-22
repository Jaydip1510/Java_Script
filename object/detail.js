// let a = {};

let emp = {
    firstname : "makwana",
    lastname : "jaydip",
    age : "25"
};
// document.write("first name is:-"+c.firstname+"<br>");
// document.write("last name is:-"+c.lastname+"<br>");
// document.write("age is:-"+c.age);
// a.firstname = "jaydip";
// a.lastname = "makwana";
// a.age = "25";
// document.write("first name is"+a.firstname+"<br>");
// document.write("last name is:-"+a.lastname+"<br>");
// document.write("age is:-"+a.age+"<br>");
emp.salary = 25000;
emp.emp_id = 1204;
let b;
for(b in emp){
    document.write(b+"&nbspis:-"+emp[b]+"<br>");
}

