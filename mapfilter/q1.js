let array = [23,33,45,43,12];
let max = array[0];
let i;
//array.sort(function(a,b){return b - a});
//array[0];
for(i=0; i<array.length;i++){
    if(array[i]>max){
        max = array[i];
    }
} 
document.write(max);
if(array.length ===0){
    document.write("&nbspmaximum no not found");
}else{
    document.write("&nbspMaximum number found");
}