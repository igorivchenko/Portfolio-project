import axios from 'axios';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const swiperList = document.querySelector('.swiper-wrapper');

async function fetchReviews(params) {
  try {
    const { data } = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    console.log(data);
    createMarkup(data);
  } catch (error) {}
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
  console.log(markup);
  swiperList.innerHTML = markup;
}

fetchReviews();
