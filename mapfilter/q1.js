let array = [23,33,45,43,12];
let max = array[0];
let i;
for(i=0; i<array.length;i++){
    if(array[i]>max){
        max = array[i];
    }
} 
document.write(max);
if(array.length ===0){
    document.write("maximum no not found");
}else{
    document.write("Maximum number found");

}