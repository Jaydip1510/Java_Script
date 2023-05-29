let i;
for(i=100;i<=200;i++){
    let a = 0;
    for(let j=1;j<=200;j++){
        if(i%j ==0){
            a++;
        }
    }
    if(a<=2){
        document.write('<br> prime is:-'+i);
        
    }
}