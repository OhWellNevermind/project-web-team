import Notiflix from 'notiflix';
import { categoriesElements } from './categoriesElements';
import {
  createAllBooksMarkup,
  createAllCategoriesListMarkup,
  createSelectCategoryMarkup,
} from './categoryMarkUp';

const BASIC_URL = 'https://books-backend.p.goit.global/books/';

async function getAllCategories() {
  try {
    const response = await fetch(`${BASIC_URL}category-list`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const books = await response.json();
    categoriesElements.categoriesListWrapper.insertAdjacentHTML(
      'beforeend',
      createAllCategoriesListMarkup(books)
    );
  } catch (err) {
    categoriesElements.categoriesListWrapper.innerHTML = `<h2 class="home__books-all-category">Sorry, but there is no categories</h2>`;
    console.log(err);
  }
}

async function getTopBooks() {
  Notiflix.Loading.pulse();
  try {
    categoriesElements.booksWrapperEl.innerHTML = '';
    categoriesElements.booksTitleEl.textContent = 'Best sellers book';
    const response = await fetch(`${BASIC_URL}top-books `);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const topBooks = await response.json();
    categoriesElements.booksWrapperEl.innerHTML =
      createAllBooksMarkup(topBooks);
    Notiflix.Loading.remove();
  } catch (err) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Somesing was wrong! Please restart page!');
    console.log(err);
  }
}

async function getSelectedCategory(category) {
  Notiflix.Loading.pulse();

  categoriesElements.booksTitleEl.textContent = category;
  categoriesElements.booksWrapperEl.innerHTML = '';
  try {
    const response = await fetch(`${BASIC_URL}category?category=${category}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    categoriesElements.booksWrapperEl.innerHTML = createSelectCategoryMarkup(
      booksOfSelectegCategory
    );
    Notiflix.Loading.remove();
  } catch (err) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Somesing was wrong! Please restart page!');
    console.log(err);
  }
}

async function getBookById(id) {
  try {
    const response = await fetch(`${BASIC_URL}${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    book = await response.json();
    return book;
  } catch (error) {}
}

export { getAllCategories, getTopBooks, getSelectedCategory, getBookById };
