'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

const clientWidth = box.clientWidth;
const clientHeight = box.clientHeight;
console.log(`clientWidth: ${clientWidth}, clientHeight: ${clientHeight}`);

const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;
console.log(`offsetWidth: ${offsetWidth}, offsetHeight: ${offsetHeight}`);

const scrollWidth = box.scrollWidth;
const scrollHeight = box.scrollHeight;
console.log(`scrollWidth: ${scrollWidth}, scrollHeight: ${scrollHeight}`);

btn.addEventListener(
  'click',
  () => {
    box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
  },
  false
);

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTo);
