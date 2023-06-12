function customEvent(){
    let e1 = new CustomEvent('userinfo',{
        detail:{
            username : "jaydip",
            surname : "makwana",
            age : 25,
            address : "panshina"
        }
    });
        document.addEventListener('userinfo',(data)=>{
        document.write('Your Name is:-'+data.detail.username+"<br>");
        document.write('Your Surname is:-'+data.detail.surname+"<br>");
        document.write('Your Age is:-'+data.detail.age+"<br>");
        document.write('Address is:-'+data.detail.address);
    });
    document.dispatchEvent(e1);
}