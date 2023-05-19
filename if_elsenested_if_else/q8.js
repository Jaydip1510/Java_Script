function incrementSalary(salary) {
    if (salary >= 1000 && salary <= 5000) {
      return parseInt(salary) +parseInt(1000);
    } else if (salary > 5000 && salary <= 10000) {
      return parseInt(salary) + parseInt(2000);
    } else if (salary > 10000 && salary <= 20000) {
      return parseInt(salary) + parseInt(3000);
    } else if (salary > 20000 && salary <= 50000) {
      return parseInt(salary) + parseInt(4000);
    } else {
      return salary; 
    }
}
  let salary = prompt("Enter employee salary:-");
  let incrementedSalary = incrementSalary(salary);
  document.write("Incremented Salary is:-"+incrementedSalary);
 