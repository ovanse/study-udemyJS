'use strict';

function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const user = {
  name: 'John',
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
  return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// 1) Обычная функция - this = window (или undefined если используется use strict).
// 2) Контекст у методов объекта - сам объект.
// 3) this в конструктарах и классах - это новый экземпляр объекта.
// 4) Ручная привязка this: call, apply, bind
