class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  get fullname() {
    return this.name + ' ' + this.surname;
  }
  set fullname(fulln) {
    var splitFullname = fulln.split(" ");
    this.surname = splitFullname[1];
    this.name = splitFullname[0];
  }
}

class Student extends Person {
  constructor(name, surname, id, grades) {
    super(name, surname);
    this.id = id;
    this.grades = grades;
  }
  get averageGrade() {
    var avrg = 0;
    for (var i = 0; i < this.grades.length; i++) {
      avrg += this.grades[i];
    }
    return Number((avrg / this.grades.length).toFixed(2));
  }

  printStudent() {
    console.log(this.name + ' ' + this.surname + ' ' + this.averageGrade);
  }
}

function printProperties(obj) {
  for (var key in obj) {
    console.log(typeof obj[key] + ' : ' + obj[key]);
  }
}
var stud = new Student('Borys', 'Melnyk', 14, [
  4,
  5,
  4,
  3,
  4,
  4
]);
stud.fullname = 'Andrew Smith';
stud.printStudent();
