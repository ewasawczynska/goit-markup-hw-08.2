// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const pageGallery = document.querySelector('.gallery');

const gallery = galleryItems
  .map(
    galleryItem =>
      `<li class = "gallery__item"><a class = "gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/></a></li>`
  )
  .join('');

pageGallery.insertAdjacentHTML('beforeend', gallery);

pageGallery.style.listStyle = 'none';

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
