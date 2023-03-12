// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imagesElements = createGalleryImgElements(galleryItems);
gallery.insertAdjacentHTML('beforeend', imagesElements);


// console.log(imagesElements);
function createGalleryImgElements (galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
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
    }).join(' ');
   
};
let galleryElements = new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    captionDelay: 250
});
galleryElements.on('show.simplelightbox');
