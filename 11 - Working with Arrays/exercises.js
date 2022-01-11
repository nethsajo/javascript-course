//Exercises from the web

// 1. Array Squared
const arraySquared = function (numbers) {
  const squared = numbers.map(i => Math.pow(i, 2));

  return squared;
};

console.log(`Array of Squared: ${arraySquared([1, 2, 3, 4, 5])}`);

// 2. Sum of every positive element
const positiveInputs = function (numbers) {
  const sumPositive = numbers
    .filter(positive => positive > 0)
    .reduce((acc, positive) => acc + positive, 0);

  return sumPositive;
};

console.log(`Sum: ${positiveInputs([1, -4, 12, 0, -3, 29, -150])}`);

// 3. Get name initials
const inputName = function (name) {
  const initials = name
    .split(' ')
    .map(i => i[0])
    .join('');

  return initials;
};

console.log(`Initials: ${inputName('George Raymond Richard Martin')}`);

// 4. Retrieving only the name of the students and all the names should be in caps.

const studentRecords = [
  { name: 'John', id: 123, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'yaga', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 },
];

const upperNames = studentRecords.map(student => student.name.toUpperCase());

console.log(upperNames);

// 5. Get the details of students who scored more than 50 marks.

const scoredAbove = studentRecords.filter(student => student.marks > 50);

console.log(scoredAbove);

// 6. Retrieve the details of students who scored more than 50 marks and have id greater than 120.

const checkScoreId = studentRecords.filter(
  student => student.marks > 50 && student.id > 120
);

console.log(checkScoreId);

// 7. Get the sum total of the marks of the students.

const totalSumMarks = studentRecords
  .map(student => student.marks)
  .reduce((acc, marks) => acc + marks, 0);

console.log(totalSumMarks);

// 8. Get only the names of the students who scored more than 50 marks using map() and filter
const scoredAboveName = studentRecords
  .filter(student => student.marks > 50)
  .map(student => student.name);

console.log(scoredAboveName);

// 9. Sum marks
const sumMarks = studentRecords
  .filter(student => student.id > 120)
  .map(student => student.marks)
  .reduce((acc, current) => acc + current, 0);

console.log(sumMarks);

// 10. Print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

const displayTotalMarks = studentRecords
  .map(student => {
    if (student.marks < 50) student.marks += 15;
    return student;
  })
  .filter(student => student.marks > 50)
  .reduce((acc, current) => acc + current.marks, 0);

console.log(displayTotalMarks);
