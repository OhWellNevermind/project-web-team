import Notiflix from 'notiflix';
import { categoriesElements } from './categoriesElements';
import {
  getAllCategories,
  getTopBooks,
  getSelectedCategory,
  getBookById,
} from './api';
import * as popUp from './popUp';

Notiflix.Loading.init({
  className: 'notiflix-loading',
  zindex: 4000,
  backgroundColor: 'rgba(0,0,0,1)',
  rtl: false,
  fontFamily: 'Quicksand',
  cssAnimation: true,
  cssAnimationDuration: 400,
  clickToClose: false,
  customSvgUrl: null,
  customSvgCode: null,
  svgSize: '80px',
  svgColor: 'var(--all-categories-active)',
  messageID: 'NotiflixLoadingMessage',
  messageFontSize: '15px',
  messageMaxLength: 34,
  messageColor: '#dcdcdc',
});

Notiflix.Loading.pulse();

categoriesElements.categoriesListWrapper.addEventListener(
  'click',
  handleCategoryClick
);
categoriesElements.booksWrapperEl.addEventListener('click', topBooksSeeMore);

let currentCategory = categoriesElements.allCategoriesItem;

getAllCategories();
getTopBooks();

function handleCategoryClick(event) {
  if (event.target.nodeName != 'LI') {
    return;
  }
  const category = event.target.textContent.trim();
  addActiveClass(event.target);
  if (category === 'All categories') {
    getTopBooks();
  } else {
    getSelectedCategory(category);
  }
}

function addActiveClass(target) {
  currentCategory.classList.remove('home__categories-item-active');
  target.classList.add('home__categories-item-active');
  currentCategory = target;
}

function topBooksSeeMore(event) {
  if (event.target.type != 'button') {
    return;
  }
  let categoryName = event.target.parentElement.querySelector(
    '.home__books-all-category'
  ).textContent;
  console.log(categoryName);
  getSelectedCategory(categoryName);
  const categoriesArray = [
    ...categoriesElements.categoriesListWrapper.children,
  ];
  const target = categoriesArray.find(
    element => element.textContent === categoryName
  );
  addActiveClass(target);
}

async function getBookById(id) {
  try {
    const response = await fetch(`${BASIC_URL}${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    book = await response.json();
    popUpMarkUp(book);
  } catch (error) {}
}

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
        delete, press the button “Remove from the shopping list”.
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

function onOpenPopUp(event) {
  if (event.target.nodeName != 'IMG') {
    return;
  }
  document.body.style.overflow = 'hidden';
  const parentLi = event.target.parentElement;
  const bookId = parentLi.querySelector('.book-id').textContent;
  getBookById(bookId);
}

function onCloseModalPopEsc(event) {
  if (event.key != 'Escape') {
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
    (event.target.nodeName == 'BUTTON' ||
      event.target.classList.contains('backdrop-pop ')) &&
    !event.target.classList.contains('btn-add-shop-list')
  ) {
    document.body.style.overflow = '';
    backdropPop.classList.add('pop-up-is-hidden');
    window.removeEventListener('keydown', onCloseModalPop, true);
    btnCloseModal.removeEventListener('click', onCloseModalPop);
    backdropPop.removeEventListener('click', onCloseModalPop);
    btnAddShopingList.removeEventListener('click', onAddShopingList);
    btnRemoveShopingList.removeEventListener('click', onRemoveShopingList);
  } else {
    return;
  }
}

function checkLocalStorage(id) {
  const books = localStorage.getItem('book-anotation');
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
