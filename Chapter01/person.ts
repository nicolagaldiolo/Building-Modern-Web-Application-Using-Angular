class Person {
  name: string;
  constructor(name: string){
    this.name = name;
  }
  sayHello() {
    return 'Hello ' + this.name;
  }
}

var person = new Person('Nicola');
console.log(person.name);
console.log(person.sayHello);