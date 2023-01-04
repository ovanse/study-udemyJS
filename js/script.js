'use strict';

const ans = prompt('Введите ваше имя');

//i независимо от регистра
//g глобальный поиск (не только первое совпадение паттерна)
//m многострочный режим
// const reg = /n/i; // флаг глобальности не работает на простом search
const reg = /n/gi;
console.log(reg.test(ans));

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass);
// console.log(pass.replace(/\./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));
