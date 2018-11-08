'use strict'
var studentProt = {
  courses : ['Math', 'More math', 'Oh God Help', 'Even more Math']
}
function createStudent(base, name, surname, id){
  let newStudent = Object.create(base);
  newStudent.name = name;
  newStudent.surname = surname;
  newStudent.id = id;
  return newStudent;
}
var stud = createStudent(studentProt, 'Borys', 'Melnyk', 11);
function printProperties(obj){
  for(var key in obj){
    console.log(typeof obj[key] + ' : ' + obj[key]);
  }
}
printProperties(stud);
console.log(stud.__proto__)
