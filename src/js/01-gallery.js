import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');

const itemsToInsert = galleryItems
  .map(
    item =>
      `<div class = "gallery__item"><a class = "gallery__link" href = "${item.original}"><img class = "gallery__image"src = "${item.preview}"alt = "${item.description}"></div>`
  )
  .join('');

galleryElement.insertAdjacentHTML('beforeend', itemsToInsert);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
