'use strict';

const ans = prompt('Введите ваше имя');

//i независимо от регистра
//g глобальный поиск (не только первое совпадение паттерна)
//m многострочный режим
// const reg = /n/i; // флаг глобальности не работает на простом search
const reg = /n/gi;

// console.log(ans.search(reg));
console.log(ans.match(reg));
