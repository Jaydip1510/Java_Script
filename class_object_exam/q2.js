let val = 0;
const user = {
  username: "jaydip",
  surname: "makwana",
  age: 12,
  salary: 25000,
  qualifications: ["10th", "12th", "bca", "mca"],

  display :function (){
      document.write("username is : "+user.username+"<br>");
      document.write("surname is : "+user.surname+"<br>");
      document.write("age is : "+user.age+"<br>");
      document.write("salary is : "+user.salary+"<br>");
      for(let qualification of user.qualifications)
      {
          document.write("Qualification is :"+qualification+"<br>");   
      }
  }
};
for(let sum  in user){
  val =val+1;
}

document.write("Total is : "+val);


