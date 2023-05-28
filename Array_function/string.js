let arr = ["abc","pqr","xyz","jay","raj","jaydip"];
let i;
document.write("Array length is:-"+arr.length+"<br>");

//<---------- last element delete ----------->

arr.pop();
    for(i=0;i<arr.length;i++){
        document.write(arr[i]+"<br>");
        
    }
//<--------- last element add ----------->
arr.push("makwana");
     for(i=0;i<arr.length;i++){
        document.write(arr[i]+"<br>");
        
     }
//<--------- array to string ---------->
let arr1 = arr.toString();
     document.write('array to string to:-'+arr1+"<br>");

//<--------- first element delete --------->
arr.shift();
    for(i=0;i<arr.length;i++){
         document.write(arr[i]+"<br>");
         
}

//<--------- first element add -------->
arr.unshift("jaydip");
    for(i=0;i<arr.length;i++){
         document.write(arr[i]+"<br>");
        }
    
//<--------- update any element ---------->
arr[3] = "arjun";
    for(i=0;i<arr.length;i++){
        document.write(arr[i]+"<br>");
         
    }

//<-------- delete any element ----------->
delete arr[3];
 for(i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
    
 }
     