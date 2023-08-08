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
  backgroundColor: 'rgba(0,0,0,0.8)',
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

async function getAllCategories() {
  try {
    const response = await fetch(`${BASIC_URL}category-list`);
    console.log(response);
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
