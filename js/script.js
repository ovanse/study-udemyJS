const obj = {
  name: 'test',
  [Symbol('id')]: 1,
};

// let id = Symbol('id');
// obj[id] = 1;

console.log(obj);
// console.log(obj[id]);

for (let value in obj) {
  console.log(value);
}
