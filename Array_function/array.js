let arr = ["abc","pqr","xyz","jay","raj","yas"];
document.write("String length is:-"+arr.length+"<br>");
let i;

//<--------- Last element delete ---------->

// arr.pop();
//     for(i=0;i<arr.length;i++){
//      document.write(arr[i]+"<br>"); 
//     }

//<--------- last element add ----------->

//     arr.push('jaydip');
//       for(i=0;i<arr.length;i++){
//        document.write(arr[i]+'<br>');
//    }

//<--------- array to convert string ---------->
  
// let arr1 = arr.toString();
//    document.write('array to string is:-'+arr1+"<br>");

//<---------- first element delete --------->

// arr.shift();
//      for(i=0;i<arr.length;i++){
//         document.write(arr[i]+"<br>"); 
//      }

//<---------- first element add ----------->

    // arr.unshift('jaydip');
    //     for(i=0;i<arr.length;i++){
    //         document.write(arr[i]+"<br>");    
    //     }

//<--------- positionwish update --------->

// arr[3] = "arjun";
//    for(i=0;i<arr.length;i++){
//       document.write(arr[i]+'<br>');   
//    }

//<-------- positionwish delete --------->

//    delete arr[3];
//    for(i=0;i<arr.length;i++){
//      document.write(arr[i]+'<br>');     
//    }
    
//<--------- concat two string --------->

let a = ["makwana","jaydip"];
let b = ["arjun"];
let c = arr.concat(a,b);
    for(i=0;i<c.length;i++){
        document.write(c[i]+"<br>");
        
    }