import sprite from '../images/sprite.svg';
import appleLogo from '../images/apple-read-logo.png';
import appleLogoSize from '../images/apple-read-logo@2x-1.png';
import bookShopLogo from '../images/book-shop-logo.png';
import bookShopLogoSize from '../images/book-shop-logo@2x.png';
import emptyPage from '../images/shopping-list-empty.png';
import emptyPageSize from '../images/shopping-list-empty@2x.png';
import * as logOut from './logOut.js';
import * as suport_ukraine from './support_Ukraine.js';
import * as header from './header.js';
import * as auth from './userAutorization.js';
import * as modal from './modal.js';
import './burgerOpen';
import './burger__menu';

const slList = document.querySelector('.sl-list');
document.querySelector('.sl-link').classList.add('current');
document.querySelector('.home-link').classList.remove('current');
document
  .querySelector('.burger-home')
  .classList.remove('burger-menu-nav-item-changed');
document
  .querySelector('.burger-sl')
  .classList.add('burger-menu-nav-item-changed');
const defaultMessage = 'Currently there is no description';

const books = JSON.parse(localStorage.getItem('book-anotation'));
renderCards();
function renderCards() {
  console.log(books);
  if (!books || !books.length) {
    console.log('here');
    slList.innerHTML = `
        <div class="sl-empty-container">
            <h1 class="sl-empty-title">This page is empty, add some books and proceed to order.</h1>
            <picture>
                <source srcset="${emptyPage} 1x, ${emptyPageSize} 2x">
                <img class="sl-empty-img" src="${emptyPage}" alt="book-store">
            </picture>
        </div>`;
  } else {
    const booksMarkUp = createShopListMarkUp(books);
    slList.innerHTML = booksMarkUp;
    slList.addEventListener('click', handleDeleteClick);
  }
}

function handleDeleteClick(event) {
  if (event.target.nodeName != 'BUTTON') {
    return;
  }

  const bookId = event.target.value;
  const parentLi = event.target.closest('.sl-list-item');
  console.log(books);
  books
    .filter(book => book._id === bookId)
    .map(book => {
      console.log(book);
      books.splice(books.indexOf(book), 1);
    });
  console.log(books);
  localStorage.setItem('book-anotation', JSON.stringify(books));
  renderCards();
  console.log(bookId, parentLi);
}

function createShopListMarkUp() {
  return books
    .map(({ title, description, book_image, list_name, author, _id }) => {
      return `<li class="sl-list-item">
                    <div class="sl-list-item-info-book">
                        <div class="sl-img-container">
                          <img src="${book_image}" class="ls-list-item-img" alt="">
                        </div>
                        <div class="sl-list-item-remove-items-container">
                            <div class="sl-list-text-wrapper">
                                <h2 class="sl-list-item-title">${title}</h2>
                                <h3 class="sl-list-item-subtitle">${list_name}</h3>
                                <button value="${_id}" class="sl-list-item-icon-button">
                                    <svg class="sl-list-item-icon sl-list-delete-icon">
                                        <use class="sl-list-delete-icon" href="${sprite}#trash-icon"></use>
                                    </svg>
                                </button>
                                <p class="sl-list-item-description">${
                                  description || defaultMessage
                                }</p>
                            </div>
                            <div class="sl-list-item-description-container">
                              <h4 class="sl-list-item-container-anthor">${author}</h4>
                                <ul class="sl-list-item-container-shops">
                                  <li>
                                    <svg class="sl-list-item-container-shops-amazon-icon">
                                        <use href="${sprite}#amazon-logo"></use>
                                    </svg>
                                  </li>
                                  <li>
                                    <picture>
                                        <source srcset="${appleLogo} 1x, ${appleLogoSize} 2x">
                                        <img class="sl-list-item-container-shops-icon sl-list-item-container-shop-responsive" src="${appleLogo}" alt="apple-read-store">
                                    </picture>
                                  </li>
                                  <li>
                                    <picture>
                                        <source srcset="${bookShopLogo} 1x, ${bookShopLogoSize} 2x">
                                        <img class="sl-list-item-container-shops-icon sl-list-item-container-shop-responsive" src="${bookShopLogo}" alt="book-store">
                                    </picture>
                                  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>`;
    })
    .join('');
}
