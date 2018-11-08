class Student {
  constructor(name, surname, id, grades) {
    this.name = name;
    this.surname = surname;
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

  get fullname() {
    return this.name + ' ' + this.surname;
  }
  set fullname(fulln) {
    var splitFullname = fulln.split(" ");
    this.surname = splitFullname[1];
    this.name = splitFullname[0];
  }

  printStudent(){
    console.log(this.name + ' ' + this.surname + ' ' + this.averageGrade);
  }
}

let stud = new Student('Borys', 'Melnyk', 14224, [
  2,
  3,
  2,
  3,
  4,
  5
]);
stud.fullname = 'Andrew Smith';
stud.printStudent();
