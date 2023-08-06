import sprite from '/src/images/sprite.svg';
import appleLogo from '/src/images/apple-read-logo.png';
import appleLogo2x from '/src/images/apple-read-logo@2x-1.png';
import bookShopLogo from '/src/images/book-shop-logo.png';
import bookShopLogo2x from '/src/images/book-shop-logo@2x.png';
import Notiflix from 'notiflix';
import defoultImg from '../images/deafult-img.jpg';

Notiflix.Loading.pulse({
  svgColor: 'var(--all-categories-active)',
});

const BASIC_URL = 'https://books-backend.p.goit.global/books/';

const categoriesListWrapper = document.querySelector('.js-categories-list');
const allCategoriesItem = document.querySelector('.js-all-categories');
const booksWrapperEl = document.querySelector('.js-books-wrapper');
const booksTitleEl = document.querySelector('.js-books-title');
const popUpEl = document.querySelector('.js-popUp');
const backdropPop = document.querySelector('.js-backdrop-pop');

categoriesListWrapper.addEventListener('click', handleCategoryClick);
booksWrapperEl.addEventListener('click', onOpenPopUp);
booksWrapperEl.addEventListener('click', topBooksSeeMore);

let currentCategory = allCategoriesItem;
let btnCloseModal = null;
let btnAddShopingList = null;
let btnRemoveShopingList = null;
const deafultInfo = 'Coming soon';

getAllCategories();
getTopBooks();

async function getAllCategories() {
  try {
    const response = await fetch(`${BASIC_URL}category-list`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const countries = await response.json();
    categoriesListWrapper.insertAdjacentHTML(
      'beforeend',
      createAllCategoriesListMarkup(countries)
    );
  } catch (err) {
    categoriesListWrapper.innerHTML = `<h2 class="home__books-all-category">Sorry, but there is no categories</h2>`;
    console.log(err);
  }
}

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

async function getTopBooks() {
  Notiflix.Loading.pulse({
    svgColor: 'var(--all-categories-active)',
  });
  try {
    booksWrapperEl.innerHTML = '';
    booksTitleEl.textContent = 'Best sellers book';
    const response = await fetch(`${BASIC_URL}top-books `);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const topBooks = await response.json();
    booksWrapperEl.innerHTML = createAllBooksMarkup(topBooks);
    const topBooksBtn = document.querySelectorAll('.home__books-all-wrapper');

    topBooksBtn.forEach(item => {
      item.addEventListener('click', topBooksSeeMore);
    });
    Notiflix.Loading.remove();
  } catch (err) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Somesing was wrong! Please restart page!');
    console.log(err);
  }
}

function createAllCategoriesListMarkup(array) {
  return array
    .map(
      element => `<li class="home__categories-item">${element.list_name}</li>`
    )
    .join('');
}

function createAllBooksMarkup(array) {
  return array
    .map(
      category =>
        `<li class="home__books-all-wrapper">
      <p class="home__books-all-category">${category.list_name}</p>
      <ul class="home__books-all-items">
        ${createSelectCategoryMarkup(category.books)}
      </ul>
      <button class="home__books-all-btn" type="button">
        See more
      </button>
    </li>`
    )
    .join('');
}

function createSelectCategoryMarkup(array) {
  return array
    .map(
      ({ book_image, title, author, _id }) =>
        `<li class="home__books-item">
      <img class="home__books-img" src="${book_image || defoultImg}" alt="${
          title || deafultInfo
        }" />
      <h3 class="home__books-title">${title || deafultInfo}</h3>
      <p class="home__books-author">${author || deafultInfo}</p>
      <p style="display:none" class="book-id">${_id}</p>
    </li>`
    )
    .join('');
}

async function getSelectedCategory(category) {
  Notiflix.Loading.pulse({
    svgColor: 'var(--all-categories-active)',
  });

  booksTitleEl.textContent = category;
  booksWrapperEl.innerHTML = '';
  try {
    const response = await fetch(`${BASIC_URL}category?category=${category}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const booksOfSelectegCategory = await response.json();
    booksWrapperEl.innerHTML = createSelectCategoryMarkup(
      booksOfSelectegCategory
    );
    Notiflix.Loading.remove();
  } catch (err) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Somesing was wrong! Please restart page!');
    console.log(err);
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
  getSelectedCategory(categoryName);
  const categoriesArray = [...categoriesListWrapper.children];
  const target = categoriesArray.find(
    element => element.textContent === categoryName
  );
  addActiveClass(target);
}

function onOpenPopUp(event) {
  if (event.target.nodeName != 'IMG') {
    return;
  }
  backdropPop.classList.remove('is-hidden');
  const parentLi = event.target.parentElement;
  const bookId = parentLi.querySelector('.book-id').textContent;
  getBookById(bookId);
}
function onCloseModalPop(event) {
  backdropPop.classList.add('is-hidden');
  btnCloseModal.removeEventListener('click', onCloseModalPop);
  backdropPop.removeEventListener('click', onCloseModalPop);
  btnAddShopingList.removeEventListener('click', onAddShopingList);
  btnRemoveShopingList.removeEventListener('click', onRemoveShopingList);
}
function onCloseModalPopEsc(event) {
  backdropPop.classList.add('is-hidden');
  window.removeEventListener('keydown', onCloseModalPop);
  btnAddShopingList.removeEventListener('click', onAddShopingList);
  btnRemoveShopingList.removeEventListener('click', onRemoveShopingList);
}

function onAddShopingList(event) {
  btnAddShopingList.classList.add('is-hidden');
  btnRemoveShopingList.classList.remove('is-hidden');
}

function onRemoveShopingList(event) {
  btnRemoveShopingList.classList.add('is-hidden');
  btnAddShopingList.classList.remove('is-hidden');
}
async function getBookById(id) {
  try {
    const response = await fetch(`${BASIC_URL}${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const book = await response.json();
    popUpMarkUp(book);
  } catch (error) {}
}

function popUpMarkUp(book) {
  const { author, buy_links, description, book_image, title } = book;
  const defaultInfo = 'coming soon';
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
            <a href="${amazonUrl}" class="icon-wraper">
              <svg class="amazon-icon">
                <use href="${sprite}#amazon-logo"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="${appleUrl}" class="icon-wraper">
              <img
                class="img-shop-icon"
                src="${appleLogo}"
                alt="apple"
              />
            </a>
          </li>
          <li>
            <a href="${bookShopUrl}" class="icon-wraper">
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

      <div class="wraper-remove js-wraper-remove is-hidden">
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
  btnCloseModal = document.querySelector('.js-btn-close-modal');
  btnCloseModal.addEventListener('click', onCloseModalPop);
  window.addEventListener('keydown', onCloseModalPopEsc);
  // backdropPop.addEventListener('click', onCloseModalPop);
  btnAddShopingList = document.querySelector('.js-add');
  btnAddShopingList.addEventListener('click', onAddShopingList);
  console.log(btnAddShopingList);
  btnRemoveShopingList = document.querySelector('.js-wraper-remove');
  console.log(btnRemoveShopingList);
  btnRemoveShopingList.addEventListener('click', onRemoveShopingList);
}

function onOpenPopUp(event) {
  if (event.target.nodeName != 'IMG') {
    return;
  }
  backdropPop.classList.remove('is-hidden');
  const parentLi = event.target.parentElement;
  const bookId = parentLi.querySelector('.book-id').textContent;
  getBookById(bookId);
}
function onCloseModalPop(event) {
  backdropPop.classList.add('is-hidden');
  btnCloseModal.removeEventListener('click', onCloseModalPop);
  backdropPop.removeEventListener('click', onCloseModalPop);
  btnAddShopingList.removeEventListener('click', onAddShopingList);
  btnRemoveShopingList.removeEventListener('click', onRemoveShopingList);
}
function onCloseModalPopEsc(event) {
  backdropPop.classList.add('is-hidden');
  window.removeEventListener('keydown', onCloseModalPop);
  btnAddShopingList.removeEventListener('click', onAddShopingList);
  btnRemoveShopingList.removeEventListener('click', onRemoveShopingList);
}

function onAddShopingList(event) {
  btnAddShopingList.classList.add('is-hidden');
  btnRemoveShopingList.classList.remove('is-hidden');
}

function onRemoveShopingList(event) {
  btnRemoveShopingList.classList.add('is-hidden');
  btnAddShopingList.classList.remove('is-hidden');
}
async function getBookById(id) {
  try {
    const response = await fetch(`${BASIC_URL}${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const book = await response.json();
    popUpMarkUp(book);
  } catch (error) {}
}

function popUpMarkUp(book) {
  const { author, buy_links, description, book_image, title } = book;
  const defaultInfo = 'coming soon';
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
            <a href="${amazonUrl}" class="icon-wraper">
              <svg class="amazon-icon">
                <use href="${sprite}#amazon-logo"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="${appleUrl}" class="icon-wraper">
              <img
                class="img-shop-icon"
                src="${appleLogo}"
                alt="apple"
              />
            </a>
          </li>
          <li>
            <a href="${bookShopUrl}" class="icon-wraper">
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

      <div class="wraper-remove js-wraper-remove is-hidden">
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
  btnCloseModal = document.querySelector('.js-btn-close-modal');
  btnCloseModal.addEventListener('click', onCloseModalPop);
  window.addEventListener('keydown', onCloseModalPopEsc);
  // backdropPop.addEventListener('click', onCloseModalPop);
  btnAddShopingList = document.querySelector('.js-add');
  btnAddShopingList.addEventListener('click', onAddShopingList);
  console.log(btnAddShopingList);
  btnRemoveShopingList = document.querySelector('.js-wraper-remove');
  console.log(btnRemoveShopingList);
  btnRemoveShopingList.addEventListener('click', onRemoveShopingList);
}
