const BASIC_URL = 'https://books-backend.p.goit.global/books/';

const categoriesListWrapper = document.querySelector('.js-categories-list');
const allCategoriesItem = document.querySelector('.js-all-categories');
const booksWrapperEl = document.querySelector('.js-books-wrapper');
const booksTitleEl = document.querySelector('.js-books-title');

allCategoriesItem.addEventListener('click', getTopBooks);
categoriesListWrapper.addEventListener('click', handleCategoryClick);
booksWrapperEl.addEventListener('click', topBooksSeeMore);

let currentCategory = allCategoriesItem;

getAllCategories();
getTopBooks();

function handleCategoryClick(event) {
  if (event.target.nodeName != 'LI') {
    return;
  }
  const category = event.target.innerHTML;
  if (category === 'All categories') {
    getTopBooks();
  }
  addActiveClass(event.target);
  getSelectedCategory(category);
}

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
    console.log(err);
  }
}

function handleCategoryClick(event) {
  if (event.target.nodeName != 'LI') {
    return;
  }
  const category = event.target.innerHTML;
  if (category === 'All categories') {
    getTopBooks();
  }
  addActiveClass(event.target);
  getSelectedCategory(category);
}

async function getTopBooks() {
  try {
    const response = await fetch(`${BASIC_URL}top-books `);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const topBooks = await response.json();
    booksTitleEl.textContent = 'Best sellers book';
    booksWrapperEl.innerHTML = createAllBooksMarkup(topBooks);
    const topBooksBtn = document.querySelectorAll('.home__books-all-wrapper');
  } catch (err) {
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
      ({ book_image, title, author }) =>
        `<li class="home__books-item">
      <img width class="home__books-img" src="${book_image}" alt="${title}" />
      <h3 class="home__books-title">${title}</h3>
      <p class="home__books-author">${author}</p>
    </li>`
    )
    .join('');
}

async function getSelectedCategory(category) {
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
  } catch (err) {
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
