'use strict';

const persone = {
  name: 'Alex',
  tel: '+74444444444',
  parents: {
    mother: 'Olga',
    father: 'Mike',
  },
};

// console.log(JSON.stringify(persone));
// console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mother = 'Ann';
console.log(persone);
console.log(clone);
