import axios from 'axios';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const swiperList = document.querySelector('.swiper-wrapper');

const buttonWrapper = document.querySelector('.button-wrapper');

async function fetchReviews(params) {
  try {
    const { data } = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );

    createMarkup(data);
  } catch (error) {
    notFound();
    iziToast.error({
      position: 'topRight',
      message: error.message,
    });
  }
}

function createMarkup(data) {
  const markup = data
    .map(({ author, avatar_url, review }) => {
      return `<li class="swiper-slide">
					<p class="reviews-text">${review}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${avatar_url}" alt="${author}">
						<h2 class="reviews-author">${author}</h2>
					</div>
				</li>`;
    })
    .join('');
  swiperList.innerHTML = markup;
  buttonWrapper.classList.remove('visually-hidden');
}

function notFound() {
  const notFoundMarkup = `<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;
  swiperList.innerHTML = notFoundMarkup;

  //   buttonWrapper.classList.remove('visually-hidden');
}

fetchReviews();
