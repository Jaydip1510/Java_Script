let user = {
    username : "jaydip",
    surname : "makwana",
    age : "25",
    salary : "25000",
    qualification : ["10th","12th","bca","mca"],

    display(){
        document.write('username is:-'+user.username+"<br>");
        document.write('surname is:-'+user.surname+"<br>");
        document.write('Age is:-'+user.age+"<br>");
        document.write('salary is:-'+user.salary+"<br>");
        for(let qualification of user.qualification)
      {
          document.write("Qualification is :"+qualification+"<br>");   
      }
       
    }

};
user.display();



     






