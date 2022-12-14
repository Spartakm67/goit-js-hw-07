import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup();
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", getBigSizeImage);

let bigSizeImage;

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
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
    .join("");
}

function getBigSizeImage(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  clickOpenBigImage(evt);
}

function clickOpenBigImage(evt) {
  let clickOnImage = evt.target.dataset.source;

  bigSizeImage = basicLightbox.create(`
    <img src="${clickOnImage}" width="800" height="600">
    `);
  bigSizeImage.show();
  window.addEventListener("keydown", eventCloseBigImage);
}

function eventCloseBigImage(evt) {
  if (evt.code === "Escape") {
    bigSizeImage.close();
    window.removeEventListener("keydown", eventCloseBigImage);
  }
}

console.log(galleryItems);
