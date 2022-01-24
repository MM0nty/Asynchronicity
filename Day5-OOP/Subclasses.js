class Person {
  constructor(name, fact) {
    this.name = name;
    this.fact = fact;
  }
  bio() {
    return `My name is ${this.name} and my fact is ${this.fact}`;
  }
}

class Student extends Person {
  bio() {
    return `I'm a student at Lighthouse Labs. ${super.bio()}`;
  };
  enroll(cohort) {
    this.cohort = cohort;
  }
}
let student = new Student("Stu", "Dent");
console.log(student.bio());

class Mentor extends Person {
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  };
  onShift() {
    this.shift = true;
  }
  onShift() {
    this.shift = false;
  } 
}
let mentor = new Mentor("Ment", "Or");
console.log(mentor);