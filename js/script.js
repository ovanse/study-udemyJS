'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}!`);
  };
}
let ivan = new User('Ivan', 0);

// 1) Обычная функция - this = window (или undefined если используется use strict).
// 2) Контекст у методов объекта - сам объект.
// 3) this в конструктарах и классах - это новый экземпляр объекта.
