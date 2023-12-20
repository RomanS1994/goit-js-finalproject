import { galleryItems } from "./gallery-items.js";
// Change code below this line
// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },

let list = document.querySelector(".gallery");
/****** Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. ******/

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

list.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

console.log(galleryItems);

/****** Реалізація делегування на ul.gallery і отримання url великого зображення. ******/

list.addEventListener("click", handlerClick);

function handlerClick(evt) {
  console.log(evt.target, "target");
  console.log(evt.currentTarget);
}
