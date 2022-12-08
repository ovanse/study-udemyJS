'use strict';

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log(this);
  this.style.backgroundColor = 'red';
});

const obj = {
  nym: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
    };

    say();
  },
};

obj.sayNumber();
