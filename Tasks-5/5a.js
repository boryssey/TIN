var someobject = {
  name: 'Andrew',
  surname: 'Smith',
  age: 24,
  printName: function(){
    console.log('My name is ' + name);
  },
  printSurname: function(){
    console.log('My surname is ' + surname);
  },
  printAge: function(){
    console.log('My age is ' + age);
  }
};

function printProperties(obj){
  for(var key in obj){
    console.log(typeof obj[key] + ' : ' + obj[key]);
  }
}
printProperties(someobject);
