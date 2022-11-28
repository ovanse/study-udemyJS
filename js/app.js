// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (event) => {
    event.preventDefault();
    console.log('Start');
    console.log(event.targetTouches);
  });

  box.addEventListener('touchmove', (event) => {
    event.preventDefault();
    console.log(`x: ${event.targetTouches[0].pageX}; y: ${event.targetTouches[0].pageY} `);
  });

  box.addEventListener('touchend', (event) => {
    event.preventDefault();
    console.log('End');
  });
});

// touches
// targetTouches
// changedTouches
