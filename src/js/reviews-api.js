import axios from 'axios';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { createMarkup, notFound } from './reviews-markup';

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

fetchReviews();
