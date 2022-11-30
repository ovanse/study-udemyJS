'use strict';

/* const user = {
  firstName: 'Alex',
  secondName: 'Smith',
  birthDate: '04/20/1993',
  showMyPublicData: function () {
    console.log(`${this.firstName} ${this.secondName}`);
  },
};

console.log(user); */

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];
const budget = [5000, 15000, 25000];

const map = new Map([[{ paper: 400 }, 8000]]);

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

console.log(map);

const goods = [];
for (let shop of map.keys()) {
  console.log(shop);
  goods.push(Object.keys(shop)[0]);
}

console.log(goods);
