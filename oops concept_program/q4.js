let student = {
    name: "jaydip makwana",
    age: 20,
    marks: [85, 90, 95, 80, 75],
  };
  
  function average(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  }     
  
  function displaystudent(student) {
    document.write("Name: " + student.name+"<br>");
    document.write("Age: " + student.age+"<br>");
    document.write("Marks: " + student.marks+"<br>");
    document.write("Average Marks: " + average(student.marks));
  }
  
displaystudent(student);