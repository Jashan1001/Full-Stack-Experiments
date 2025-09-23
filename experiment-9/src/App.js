import React from "react";

// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

function App() {
  const students = [
    new Student("Jashan", 21, "Computer Science"),
    new Student("Kanika", 22, "Electronics"),
  ];

  const teachers = [
    new Teacher("Monika", 40, "Computer Networks"),
    new Teacher("Richa", 35, "Design and Analysis of Algorithms"),
  ];

  const people = [...students, ...teachers];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Person Class Hierarchy in React</h1>
      <div>
        {people.map((person, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            {person.displayInfo()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
