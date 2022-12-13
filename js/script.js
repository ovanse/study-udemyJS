'use strict';

console.log('Запрос данных...');

setTimeout(() => {
  console.log('Подготовка данных...');

  const product = {
    name: 'TV',
    price: '2000',
  };

  setTimeout(() => {
    product.status = 'ordered';
    console.log(product);
  }, 2000);
}, 2000);
