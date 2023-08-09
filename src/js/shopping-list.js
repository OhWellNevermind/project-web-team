import sprite from '../images/sprite.svg';
import appleLogo from '../images/apple-read-logo.png';
import appleLogoSize from '../images/amazon-logo@2x.png';
import bookShopLogo from '../images/book-shop-logo.png';
import bookShopLogoSize from '../images/book-shop-logo@2x.png';
import emptyPage from '../images/shopping-list-empty.png';
import emptyPageSize from '../images/shopping-list-empty@2x.png';
import * as logOut from './logOut.js';
import * as suport_ukraine from './support_Ukraine.js';
import * as header from './header.js';
import * as auth from './userAutorization.js';
import * as modal from './modal.js';

const slList = document.querySelector('.sl-list');
document.querySelector('.sl-link').classList.add('active');
document.querySelector('.home-link').classList.remove('active');
slList.addEventListener('click', handleDeleteClick);

const books = JSON.parse(localStorage.getItem('books'));
renderCards();
function renderCards() {
  if (!books.length || !books[0]) {
    console.log('asdasdasdas');
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
  }
}

function handleDeleteClick(event) {
  console.log(
    event.target.classList.contains('sl-list-item-icon-button'),
    event.target.classList.contains('sl-list-delete-icon')
  );
  if (event.target.nodeName != 'BUTTON') {
    return;
  }

  const bookId = event.target.value;
  const parentLi = event.target.closest('.sl-list-item');
  const newBooks = books
    .filter(book => book._id === bookId)
    .map(book => {
      books.splice(books.indexOf(book), 1);
    });
  console.log(newBooks);
  localStorage.setItem('books', JSON.stringify(newBooks));
  renderCards();
  console.log(bookId, parentLi);
}

function createShopListMarkUp() {
  return books
    .map(({ title, description, book_image, list_name, author, _id }) => {
      return `<li class="sl-list-item">
                    <div class="sl-list-item-info-book">
                        <img src="${book_image}" class="ls-list-item-img" alt="">
                        <div class="sl-list-item-remove-items-container">
                            <div class="sl-list-text-wrapper">
                                <h2 class="sl-list-item-title">${title}</h2>
                                <h3 class="sl-list-item-subtitle">${list_name}</h3>
                                <button value="${_id}" class="sl-list-item-icon-button">
                                    <svg class="sl-list-item-icon sl-list-delete-icon">
                                        <use class="sl-list-delete-icon" href="${sprite}#trash-icon"></use>
                                    </svg>
                                </button>
                                <p class="sl-list-item-description">${description}</p>
                            </div>
                            <ul class="sl-list-item-description-container">
                                <li class="sl-list-item-description-list-item">
                                    <h4 class="sl-list-item-container-anthor">${author}</h4>
                                    <div class="sl-list-item-container-shops">
                                        <svg class="sl-list-item-container-shops-amazon-icon">
                                            <use href="${sprite}#amazon-logo"></use>
                                        </svg>
                                        <picture>
                                            <source srcset="${appleLogo} 1x, ${appleLogoSize} 2x">
                                            <img class="sl-list-item-container-shops-icon sl-list-item-container-shop-responsive" src="${appleLogo}" alt="apple-read-store">
                                        </picture>
                                        <picture>
                                            <source srcset="${bookShopLogo} 1x, ${bookShopLogoSize} 2x">
                                            <img class="sl-list-item-container-shops-icon sl-list-item-container-shop-responsive" src="${bookShopLogo}" alt="book-store">
                                        </picture>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>`;
    })
    .join('');
}
