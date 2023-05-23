let array = [23,33,45,43,12];
let a = array.filter(function(t){
     return (t===45);
});
document.write(a);
if(a.length ===0){
    document.write("no element fount");
}else{
    document.write("&nbspelement found");
}