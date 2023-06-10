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
        // document.write('qulification is:-'+user.qualification);     
        
        for(let i=0; i<this.qualification.length;i++){
            document.write(''+this.qualification[i]+"<br>");
            
        }
    }
};
user.display();



     






