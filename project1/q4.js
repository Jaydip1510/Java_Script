let baseSalary = 100;
let hra = 0.1; 
let da = 0.05; 
let ta = 0.08; 


let totalAllowances = (hra + da + ta) * baseSalary;


let grossSalary = baseSalary + totalAllowances;


document.write("The gross salary is :-"+grossSalary);
