/*
Request the student's name and 3 grades
  of the two-month period calculate the average for that student.

  The positive average must be greater than 6

  If the student passed the semester, give the
  congratulations.

  If the student did not pass the semester,
  motivate students to do their best on the test
  recovery.

  In both cases, show a message with the student's name and grade
*/


let student = prompt("Student Name: ");

let n1 = Number(prompt("First note: "));

let n2 = Number(prompt("Second note: "));

let n3 = Number(prompt("Third note: "));


let mean = (n1 + n2 + n3)/3;

if (mean >=6){
    alert(`Congratulations ${student}, You're a Crazy!`);
}
else{
    alert(`Sorry ${student}, you're a loser!`);
}
