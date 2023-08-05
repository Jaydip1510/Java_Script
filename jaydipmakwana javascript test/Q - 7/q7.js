//Check occurrences of character using loop
//Str1 = “Hello”; Enter char to count - l answer will be 2

let answer = 0;

let var1 = "hello";

for(let i = 0;i <= var1.length; i++){
    if(var1[i] == 'l'){
        answer = answer + 1;
    }
}

console.log(answer);