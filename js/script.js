'use strict';

const arr = ['Alex', 'Anna', 'Oleg', 'Alex'];
const set = new Set(arr);

function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique(arr));

set.add('Ivan');
set.add('Oleg');
console.log(set);

if (set.has('Anna')) {
  set.delete('Anna');
}
console.log(set);

console.log(set.size);

for (let value of set) {
  console.log(value);
}

set.forEach((value, valueAgain, set) => {
  console.log(value, valueAgain);
});

console.log(set.values());
console.log(set.keys());
console.log(set.entries());

set.clear();
console.log(set);
