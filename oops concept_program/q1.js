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
        var str_con = '';
        for(let i=0; i<this.qualification.length;i++){
            if(str_con!=''){ str_con += ","; }
            console.log("Before Concat ["+i+"]"+str_con);
            str_con += this.qualification[i];
            console.log("After Concat ["+i+"]"+str_con);
        }
        document.write('qualification is:-'+str_con+"<br>"); 
    }
};
user.display();



     






