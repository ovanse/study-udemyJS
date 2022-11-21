const arr = [2,13,26,8,10];

// Способ правильно отсортировать массив чисел
arr.sort(compareNums);
console.log(arr);
function compareNums(a,b) {
  return a - b;
}

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} in array ${arr}`);
// })

// const str = 'tea, coffee, beef, cheese';
// const products = str.split(', ');
// console.log(products);
// products.sort();
// console.log(products.join('; '));