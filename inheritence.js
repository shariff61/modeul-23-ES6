class Parent {
  constructor(name) {
    this.fathersName = name;
    this.job = "business";
  }
}

class Child extends Parent {
  constructor(name, id) {
    super(name);
    this.myName = name;
    this.myId = id;
  }
  getFullDetails() {
    return `My name is ${this.myName}. i id number is ${this.myId}..`;
  }
}
const child1 = new Child("shariful islam", 121);
const child2 = new Child("shafiqul islam", 121);
console.log(child1, child2);
