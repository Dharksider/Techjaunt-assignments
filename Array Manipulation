//Assignmet 2
// Create an array of objects representing students
const students = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 19, grade: "B" },
    { name: "Charlie", age: 22, grade: "A" },
    { name: "David", age: 17, grade: "C" },
    { name: "Joshua", age: 19, grade: "C" },
    { name: "Philemon", age: 23, grade: "D" },
  ];
  
  // Function to filter students by grade
  function filterByGrade(students, grade) {
    return students.filter(student => student.grade === grade);
  }
  
  // Function to calculate average age
  function averageAge(students) {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
  }
  
  // Test Cases
  const aStudents = filterByGrade(students, "C");
  console.log("Students with grade C:", aStudents);

  console.log('Students with grade A', filterByGrade(students, "A"))
  
  const average = averageAge(students);
  console.log("Average age of students:", average.toFixed(2));

