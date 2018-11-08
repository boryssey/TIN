function Student(name, surname, id, grades){
  this.name = name;
  this.surname = surname;
  this.id = id;
  this.grades = grades;
  this.printStudent = () => {
    var avrg = 0;
    for(var i =0; i < grades.length; i++){
      avrg += grades[i];
    }
    avrg /= grades.length;
    console.log(this.name + ' ' + surname + ' ' + Number((avrg).toFixed(2)));
  };
}
var stud = new Student('Borys', 'Melnyk', 14224, [2,3,2,3,4,5]);
stud.printStudent();
