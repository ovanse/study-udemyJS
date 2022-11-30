'use strict';

const btns = document.querySelectorAll('button');

btns[0].addEventListener('click', () => {
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
});

console.log(btns[0].className);
