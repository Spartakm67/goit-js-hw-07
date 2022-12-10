import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup();
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

let lightbox;

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>`;
    })
    .join("");
}

lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
