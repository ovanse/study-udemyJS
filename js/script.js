'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

  // Funtions ===

  const createMovieList = (films, parent) => {
    parent.innerHTML = '';
    sortArr(films);
    films.forEach((film, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
      </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  };

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = 'драма';
    poster.style.backgroundImage = "url('../img/bg.jpg')";
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  // ======================

  // Event Listeners ======

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilmTitle = addInput.value;
    const isFavorite = checkbox.checked;

    if (newFilmTitle) {
      if (newFilmTitle.length > 21) {
        newFilmTitle = `${newFilmTitle.substring(0, 22)}...`;
      }

      if (isFavorite) {
        console.log('Add favorite film');
      }

      movieDB.movies.push(newFilmTitle);
      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
  });

  // ===================

  deleteAdv(adv);

  makeChanges();

  createMovieList(movieDB.movies, movieList);
});
