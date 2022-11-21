let numberOfFilms;


const personalMovieDB = {
  count: '',
  movies: {},
  actors: {},
  genres: [],
  isPrivate: false,
  start: function() {
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('How many films did you watch?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Which of the last films have you watched?', '').trim(),
      b = prompt('How would you rate it?', '').trim();
      
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Quite a few movies have been viewed');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log('You are an ordinary spectator.');
    } else if (personalMovieDB.count >= 30) {
      console.log('You are a film fan');
    } else {
      console.log('Error occured.');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden)
    console.log(personalMovieDB);
    else
    console.log("I can't show you");
  },
  writeYourGenres: function() {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Enter your ${i + 1} favorite genre?`);
      if (genre == '' || genre == null) {
        i--;
        continue;
      } else {
        personalMovieDB.genres[i] = genre;
      }

    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Your favorite genre #${i + 1} is ${item}`);
    });
  },
  toggleVisibleMyDB: function() {
    if(personalMovieDB.isPrivate) {
      personalMovieDB.isPrivate = false;
    } else {
      personalMovieDB.isPrivate = true;
    }
  },
};
