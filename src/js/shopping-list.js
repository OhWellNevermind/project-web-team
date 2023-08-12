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
const Pagination = require('./tui-pagination');

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

const options = {
  // below default value of options
  totalItems: books?.length,
  itemsPerPage: 3,
  visiblePages: 3,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn"><span>{{page}}</span></a>',
    currentPage:
      '<a class="tui-page-btn tui-is-selected tui-bullet"><span>{{page}}</span></a>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} tui-active"> ' +
      '<span class="tui-ico-{{type}} tui-ico-text">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}} tui-ico-text">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

let instance;

function showItemsForPage(page) {
  const itemsPerPage = options.itemsPerPage;
  console.log(slList.childNodes);
  if (slList.childNodes[0].nodeName != 'LI') {
    console.log('bla');
    document.querySelector('.tui-wrapper').style.display = 'none';
    return;
  }
  slList.childNodes.forEach((item, index) => {
    console.log(item);
    if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
      item.style.display = 'list-item';
    } else {
      item.style.display = 'none';
    }
  });
}

renderCards();

function renderCards() {
  if (!books || !books.length) {
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
    createPagnation();
  }
}

function handleDeleteClick(event) {
  if (event.target.nodeName != 'BUTTON') {
    return;
  }

  const bookId = event.target.value;
  const parentLi = event.target.closest('.sl-list-item');
  books
    .filter(book => book._id === bookId)
    .map(book => {
      books.splice(books.indexOf(book), 1);
    });
  localStorage.setItem('book-anotation', JSON.stringify(books));
  renderCards();
  createPagnation();
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
                                <button aria-label="Delete book" value="${_id}" class="sl-list-item-icon-button">
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

function setPagesCount() {
  if (window.outerWidth < 320) {
    options.visiblePages = 1;
  } else if (window.outerWidth >= 320 && window.outerWidth < 374) {
    options.visiblePages = 1;
  } else if (window.outerWidth >= 375 && window.outerWidth < 767) {
    options.visiblePages = 2;
  } else {
    options.visiblePages = 3;
  }
  if (instance) {
    instance._options = options;
  }
}

function createPagnation() {
  if (books) {
    showItemsForPage(1);
    const container = document.querySelector('#tui-pagination-container');
    setPagesCount();
    instance = new Pagination(container, options);
    instance.on('afterMove', eventData => {
      showItemsForPage(eventData.page);
    });

    window.addEventListener('resize', setPagesCount);
  }
}
