let pr = new Promise((rv,rj)=>{
     setTimeout(()=>{
        let p = 500, q = 300;
        if(p>q){
            rv("Promise Done...");
        }else{
           rj("Promise Rejected...");
        }
     },5000);
}).then((e)=>{
    console.log(e);
}).catch((e)=>{
   console.log(e);
});