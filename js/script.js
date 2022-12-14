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
