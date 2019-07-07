// jshint esversion : 6
class Person {
  constructor(name, email, fact) {
    this.name = name;
    this.email = email;
    this.fact = fact;
  }

  bio() {
    return `My name is ${this.name} and here is a fact about me: ${this.fact}`;
  }


}

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() {
    return `I'm a student at Lighthouse Labs. ${super.bio()}`;
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }

  bio() {
    return `I'm a mentor at Lighthouse Labs. My name is ${this.name} and here's my fact: ${this.fact}`;
  }
}


const st = new Student('John', 'I love sunset');
console.log(st.bio());