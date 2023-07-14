let pr2 = new Promise((rs,rj)=>{
    setTimeout(()=>{
        rs("Promise called...");
    },2000)
});
async function disp(){
    console.log("hello");
    let res = await pr2;
    console.log(res);
    console.log("hello2");
}
disp();