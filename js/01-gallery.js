import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
let modalObj;

const createGalleryItemMarkup = ({ description, original, preview }) => {
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
};
const renderGalleryMarkup = () => {
  galleryContainerEl.innerHTML = galleryItems
    .map(createGalleryItemMarkup)
    .join("");
};
const openModal = (imgSrc) => {
  modalObj = basicLightbox.create(
    `<img src="${imgSrc}" width="800" height="600">`,
    {
      onShow: () => {
        galleryContainerEl.addEventListener("keydown", escKeydownHandler);
      },
      onClose: () => {
        galleryContainerEl.removeEventListener("keydown", escKeydownHandler);
      },
    }
  );
  modalObj.show();
};
const previewClickHandler = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  openModal(e.target.dataset.source);
};
const escKeydownHandler = (e) => {
  if (e.code === "Escape" && modalObj.visible()) {
    modalObj.close();
  }
};

renderGalleryMarkup();
galleryContainerEl.addEventListener("click", previewClickHandler);
