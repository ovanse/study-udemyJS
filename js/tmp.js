function first() {
  setTimeout(() => {
    console.log(1);
  },500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`I study ${lang}.`);
  callback();
}

function done() {
  console.log('I passed this lesson.');
}

learnJS('JavaScript', done);