'use strict';

function showThis() {
  console.log(this);
}

showThis();

// 1) Обычная функция - this = window (или undefined если используется use strict)
