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

const map = new Map();

map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);

console.log(map);
