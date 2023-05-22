// let a = {};

let c = {
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
c.salary = 25000;
let b;
for(b in c){
    document.write(b+"value is"+c[b]+"<br>");
}

