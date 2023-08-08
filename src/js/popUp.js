import sprite from '/src/images/sprite.svg';
import appleLogo from '/src/images/apple-read-logo.png';
import appleLogo2x from '/src/images/apple-read-logo@2x-1.png';
import bookShopLogo from '/src/images/book-shop-logo.png';
import bookShopLogo2x from '/src/images/book-shop-logo@2x.png';
import defoultImg from '../images/deafult-img.jpg';
import { categoriesElements } from './categoriesElements';
import { getBookById } from './api';

const popUpEl = document.querySelector('.js-popUp');
const backdropPop = document.querySelector('.js-backdrop-pop');
const bookStorage = JSON.parse(localStorage.getItem('book-anotation')) || [];

let btnCloseModal = null;
let btnAddShopingList = null;
let btnRemoveShopingList = null;
let addBtnShopList = null;
let removeBtnShopList = null;
let book = {};

categoriesElements.booksWrapperEl.addEventListener('click', onOpenPopUp);

function popUpMarkUp(book) {
  const { author, buy_links, description, book_image, title, _id } = book;
  const defaultInfo =
    'Currently there is no description! Please come and check later;)';
  const amazonUrl = buy_links[0].url;
  const appleUrl = buy_links[1].url;
  const bookShopUrl = buy_links[2].url;
  let markUp = `<button class="close-btn-modal js-btn-close-modal">
      <svg class="close-btn-modal-icon" width="24" height="24">
        <use href="${sprite}#close-icon"></use>
      </svg>
    </button>
    <div class="title-author-discrp">
      <img
        class="img-book"
        src="${book_image}"
        alt="poster book"
      />
      <div class="wrap-anotations">
        <h2 class="title-book-pop-up">${title || defaultInfo}</h2>
        <p class="author">${author || defaultInfo}</p>
        <p class="discrition-book">
         ${description || defaultInfo}
        </p>
        <ul class="resource-shoping">
          <li>
            <a href="${amazonUrl}" class="icon-wraper" target="_blank">
              <svg class="amazon-icon">
                <use href="${sprite}#amazon-logo"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="${appleUrl}" class="icon-wraper" target="_blank">
              <img
                class="img-shop-icon"
                src="${appleLogo}"
                alt="apple"
              />
            </a>
          </li>
          <li>
            <a href="${bookShopUrl}" class="icon-wraper" target="_blank">
              <img
                class="img-shop-icon"
                src="${bookShopLogo}"
                alt="apple"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="wraper">
      <button class="btn-add-shop-list js-add" type="button">
        add to shopping
      </button>

      <div class="wraper-remove js-wraper-remove pop-up-is-hidden">
      <button class="btn-add-shop-list btn-remove js-remove  " type="button">
        remove from the shopping list
      </button>

      <p class="msg-add-shoplist js-remove " >
        Сongratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
      </div>
      </div>
    </div>`;
  popUpEl.innerHTML = markUp;
  backdropPop.classList.remove('pop-up-is-hidden');
  backdropPop.addEventListener('click', onCloseModalPop);
  btnCloseModal = document.querySelector('.js-btn-close-modal');
  btnAddShopingList = document.querySelector('.js-add');
  btnRemoveShopingList = document.querySelector('.js-wraper-remove');
  btnCloseModal.addEventListener('click', onCloseModalPop, true, {
    once: true,
  });
  window.addEventListener('keydown', onCloseModalPopEsc, { once: true });
  btnAddShopingList.addEventListener('click', onAddShopingList);
  btnRemoveShopingList.addEventListener('click', onRemoveShopingList);
  addBtnShopList = document.querySelector('.js-add');
  removeBtnShopList = document.querySelector('.js-remove');

  checkLocalStorage(_id);
}

async function onOpenPopUp(event) {
  if (event.target.nodeName != 'IMG') {
    return;
  }
  document.body.style.overflow = 'hidden';
  const parentLi = event.target.parentElement;
  const bookId = parentLi.querySelector('.book-id').textContent;
  await getBookById(bookId).then(element => {
    book = element;
  });
  popUpMarkUp(book);
}

function onCloseModalPopEsc(event) {
  if (event.key !== 'Escape') {
    return;
  }
  document.body.style.overflow = '';
  backdropPop.classList.add('pop-up-is-hidden');
  btnAddShopingList.removeEventListener('click', onAddShopingList);
  btnRemoveShopingList.removeEventListener('click', onRemoveShopingList);
  addBtnShopList.removeEventListener('click', onAddShopingList);
  removeBtnShopList.removeEventListener('click', onRemoveShopingList);
}

function onAddShopingList(event) {
  btnAddShopingList.classList.add('pop-up-is-hidden');
  btnRemoveShopingList.classList.remove('pop-up-is-hidden');
  addBookStorage();
}

function onRemoveShopingList(event) {
  btnRemoveShopingList.classList.add('pop-up-is-hidden');
  btnAddShopingList.classList.remove('pop-up-is-hidden');
  removeBookStorage();
}

function onCloseModalPop(event) {
  if (
    event.target.nodeName != 'BUTTON' ||
    !event.target.classList.contains('close-btn-modal-icon')
  ) {
    return;
  }
  document.body.style.overflow = '';
  backdropPop.classList.add('pop-up-is-hidden');
  window.removeEventListener('keydown', onCloseModalPop, true);
  btnCloseModal.removeEventListener('click', onCloseModalPop);
  backdropPop.removeEventListener('click', onCloseModalPop);
  btnAddShopingList.removeEventListener('click', onAddShopingList);
  btnRemoveShopingList.removeEventListener('click', onRemoveShopingList);
}

function checkLocalStorage(id) {
  const books = localStorage.getItem('book-anotation');
  if (!books) {
    return;
  }
  JSON.parse(books).forEach(element => {
    if (element._id === id) {
      btnAddShopingList.classList.add('pop-up-is-hidden');
      btnRemoveShopingList.classList.remove('pop-up-is-hidden');
    }
  });
}

function addBookStorage() {
  bookStorage.push(book);
  localStorage.setItem('book-anotation', JSON.stringify(bookStorage));
}

function removeBookStorage() {
  const books = JSON.parse(localStorage.getItem('book-anotation'));
  books.forEach((element, idx) => {
    if (element._id === book._id) {
      bookStorage.splice(idx, 1);
      localStorage.setItem('book-anotation', JSON.stringify(bookStorage));
    }
  });
}
