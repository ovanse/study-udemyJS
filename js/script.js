'use strict';

const user = {
  firstName: 'Alex',
  secondName: 'Smith',
  birthDate: '04/20/1993',
  showMyPublicData: function () {
    console.log(`${this.firstName} ${this.secondName}`);
  },
};

const userMap = new Map(Object.entries(user));

console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);
