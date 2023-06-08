class emp{
     fname = "jaydip";
     lname = "makwana";
     age = 25;
     fullname = () => this.fname+" "+this.lname;
        
     }
    let e1 = new emp();
    document.write('Your fullname is:-'+e1.fullname()+"<br>");
    document.write('Your Age is:-'+e1.age);
    
    