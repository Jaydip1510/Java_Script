function incrementSalary(salary) {
    if (salary >= 1000 && salary <= 5000) {
      return salary + 1000;
    } else if (salary > 5000 && salary <= 10000) {
      return salary + 2000;
    } else if (salary > 10000 && salary <= 20000) {
      return salary + 3000;
    } else if (salary > 20000 && salary <= 50000) {
      return salary + 4000;
    } else {
      return salary; 
    }
}
  let salary = 6000;
  let incrementedSalary = incrementSalary(salary);
  document.write("Incremented Salary is:-"+incrementedSalary);
 