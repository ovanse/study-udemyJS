'use strict';

// filter
const names = ['Ivan', 'Anna', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name) => {
  return name.length < 5;
});

console.log(shortNames);

// map
let answers = ['IvAn', 'AnnA', 'Hello'];

answers = answers.map((item) => {
  return item.toLowerCase();
});

console.log(answers);

// every|some
const some = [4, 'qwq', 'sfdfsfe'];
console.log(some.some((item) => typeof item === 'number'));
console.log(some.every((item) => typeof item === 'number'));

// reduce
const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

const arrStr = ['apple', 'pear', 'plum'];
const resStr = arrStr.reduce((sum, current) => sum + ', ' + current);
console.log(resStr);

// work example
const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal',
};

const newArr = Object.entries(obj)
  .filter((item) => {
    return item[1] === 'persone';
  })
  .map((item) => {
    return item[0];
  });
console.log(newArr);
