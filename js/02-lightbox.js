import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");

const createGalleryItemMarkup = ({ description, original, preview }) => {
  return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
};
const renderGalleryMarkup = () => {
  galleryContainerEl.innerHTML = galleryItems
    .map(createGalleryItemMarkup)
    .join("");
};

renderGalleryMarkup();
new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
