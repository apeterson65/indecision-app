class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Thier major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  isTravelling() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let description = super.getGreeting();
    if (this.isTravelling()) {
      description += ` I am visiting from  ${this.homeLocation}.`;
    }
    return description;
  }
}
const me = new Traveler("Andrew Peterson", 52, "Tooele");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
