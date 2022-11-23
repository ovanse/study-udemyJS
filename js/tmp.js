const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';

// hearts.forEach((item) => {
//   item.style.backgroundColor = 'blue';
// });

const div = document.createElement('div');
// const text = document.createTextNode('I was here');

div.classList.add('black');
document.body.append(div);
// document.querySelector('.wrapper').append(div);
// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = 'Hello World';
