class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

const student1 = new Student("Jashan", 21, "Computer Science");
const student2 = new Student("Kanika", 22, "Electronics");

const teacher1 = new Teacher("Monika", 40, "Computer Networks");
const teacher2 = new Teacher("Richa", 35, "Design and Analysis of Algorithms");

console.log(student1.displayInfo());
console.log(student2.displayInfo());
console.log(teacher1.displayInfo());
console.log(teacher2.displayInfo());
