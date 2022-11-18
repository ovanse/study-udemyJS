let numberOfFilms;

function start() {
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На скольок оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.coun < 10) {
    console.log('Просмотренно довольно мало фильмов');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden)
    console.log(personalMovieDB);
  else
    console.log("I can't show you");
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
  let answer;
  for (let i = 0; i < 3; i++) {
    answer = prompt(`Ваш любимый жан под номером ${i + 1}?`);
    if (answer == '' || answer == null) {
      i--;
      continue;
    } else {
      personalMovieDB.genres[i] = answer;
    }
  }
}

writeYourGenres();
