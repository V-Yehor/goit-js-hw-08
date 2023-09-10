// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);

const list = document.querySelector('.gallery');
const markUp = createMarcup(galleryItems);

function createMarcup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}" target="_self" rel="noopener norefferer nofollow">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
        </li>`
    }).join('');
}

list.insertAdjacentHTML('beforeend', markUp);

new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});