import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
console.log(galleryList);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`
    )
    .join("");
}
galleryList.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
console.log(cloudflare);
