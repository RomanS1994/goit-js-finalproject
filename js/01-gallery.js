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
const image = document.querySelector("img");

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

list.addEventListener("click", handlerClick);

function handlerClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  evt.preventDefault();
  console.dir(evt.target);
  const instance = basicLightbox.create(
    `
  <img src="${evt.target.dataset.source}" width="800" height="600">
    `,
    {
      onShow: (instance) => {
        list.addEventListener("keydown", onKeydown);
      },
      onClose: (instance) => {
        list.removeEventListener("keydown", onKeydown);
      },
    }
  );
  function onKeydown(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
