'use strict';

const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
  if (
    event.target &&
    event.target.matches('button.blue') &&
    event.target.classList.contains('blue')
  ) {
    btns[1].classList.toggle('red');
  }
});

const btn = document.createElement('button');
btn.classList.add('blue');
wrapper.append(btn);
