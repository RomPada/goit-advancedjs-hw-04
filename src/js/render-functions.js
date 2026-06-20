import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <span class="gallery-info-title">Likes</span>
          <span>${likes}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-title">Views</span>
          <span>${views}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-title">Comments</span>
          <span>${comments}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-title">Downloads</span>
          <span>${downloads}</span>
        </li>
      </ul>
    </li>`;
}

export function createGallery(images) {
  const markup = images.map(createGalleryItem).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-active');
}

export function hideLoader() {
  loader.classList.remove('is-active');
}
