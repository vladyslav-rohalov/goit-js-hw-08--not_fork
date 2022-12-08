// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryCollectionRef = document.querySelector('.gallery');

function createMarkup() {
  const galleryCollection = galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join('');
  galleryCollectionRef.insertAdjacentHTML('beforeend', galleryCollection);
}

createMarkup();

galleryCollectionRef.addEventListener('click', onOpenModal);

const gallery = new SimpleLightbox('.gallery a');

function onOpenModal(evt) {
  evt.preventDefault();
}
