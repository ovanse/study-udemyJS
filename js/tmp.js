const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
const btn = document.getElementsByTagName('button')[1];
console.log(btns);
console.log(btn);
console.log(btns[2]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach((item) => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
