const swiperList = document.querySelector('.swiper-wrapper');

const buttonWrapper = document.querySelector('.button-wrapper');

export function createMarkup(data) {
  const markup = data
    .map(({ author, avatar_url, review, _id }) => {
      if (_id === 5) {
        return `<li class="swiper-slide">
					<p class="reviews-text">${review.slice(0, -31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${avatar_url}" alt="${author}">
						<h2 class="reviews-author">${author}</h2>
					</div>
				</li>`;
      }
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

export function notFound() {
  const notFoundMarkup = `<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;
  swiperList.innerHTML = notFoundMarkup;
}
