'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function () {
  console.log(`User ${this.name} exited.`);
};

const ivan = new User('Ivan', 0);
const alex = new User('Alexey', 1);

ivan.exit();
alex.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
