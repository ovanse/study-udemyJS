'use strict';

function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }

  console.log(sum());
}

showThis(4, 5);

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
  },
};
obj.sum();

// 1) Обычная функция - this = window (или undefined если используется use strict)
// 2) Контекст у методов объекта - сам объект.
