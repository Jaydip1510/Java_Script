let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
let arr = pets.reduce(function(t,v){
         if(!t[v]){
            t[v] = 1;
         }else{
            t[v]++;
         }
         return t;

},{});
for(a in arr){
    document.write(a+"---"+arr[a]+"<br>");
}