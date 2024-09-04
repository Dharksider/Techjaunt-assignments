//Assignment 1
// Function Calculate

function calculate (num1, num2, opp) {
    if ((typeof num1 && typeof num2) === 'number' && isFinite(num1 && num2))
    {
        if ((opp == 'add')||(opp == 'ADD'))
            return num1 + num2

        else if ((opp == 'sub') ||(opp == 'SUB'))
            return num1 - num2

        else if ((opp == 'MUL')|| (opp == 'mul'))
            return num1 * num2
    
        else if ((opp == 'div')||(opp == 'DIV'))
            return num1 / num2
        
        else
            console.log('Enter a valid Operator')
    }
    
    else 
        console.log('The value entered is not a number')

}

//Test cases
console.log(calculate(3.2,5,'add'));
console.log(calculate(3,5,'sub'));
console.log(calculate(3,5,'mul'));
console.log(calculate(3,5,'DIV'));
console.log(calculate(3,5,'sdfd'));
console.log(calculate(3,'sdf','sub'));

calculate(3,5,'sdfd');




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


  

