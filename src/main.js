import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'pure-css-loader/dist/css-loader.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');

const PER_PAGE = 15;
let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

searchForm.addEventListener('submit', handleSearchSubmit);
loadMoreButton.addEventListener('click', handleLoadMoreClick);

async function handleSearchSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  totalHits = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    const images = data.hits;
    totalHits = data.totalHits;

    if (!images.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(images);

    if (isEndOfCollection()) {
      showEndOfCollectionMessage();
      return;
    }

    showLoadMoreButton();
  } catch {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    searchForm.reset();
  }
}

async function handleLoadMoreClick() {
  const nextPage = currentPage + 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, nextPage);
    const images = data.hits;

    if (!images.length) {
      showEndOfCollectionMessage();
      return;
    }

    currentPage = nextPage;
    createGallery(images);
    scrollPageByGalleryCardHeight();

    if (isEndOfCollection()) {
      showEndOfCollectionMessage();
      return;
    }

    showLoadMoreButton();
  } catch {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    showLoadMoreButton();
  } finally {
    hideLoader();
  }
}

function isEndOfCollection() {
  return currentPage * PER_PAGE >= totalHits;
}

function showEndOfCollectionMessage() {
  hideLoadMoreButton();
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
  });
}

function scrollPageByGalleryCardHeight() {
  const galleryCard = document.querySelector('.gallery-item');

  if (!galleryCard) {
    return;
  }

  const { height: cardHeight } = galleryCard.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
