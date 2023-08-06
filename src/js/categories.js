import sprite from "/src/images/sprite.svg";
import appleLogo from '/src/images/apple-read-logo.png'
import appleLogo2x from '/src/images/apple-read-logo@2x-1.png'
import bookShopLogo from '/src/images/book-shop-logo.png'
import bookShopLogo2x from '/src/images/book-shop-logo@2x.png'

const BASIC_URL = 'https://books-backend.p.goit.global/books/';

const categoriesListWrapper = document.querySelector( '.js-categories-list' );
const allCategoriesItem = document.querySelector('.js-all-categories') 
const booksWrapperEl = document.querySelector( '.js-books-wrapper' );
const booksTitleEl = document.querySelector('.js-books-title');
const popUpEl = document.querySelector('.js-popUp');
const backdropPop = document.querySelector('.js-backdrop-pop');


allCategoriesItem.addEventListener( 'click', getTopBooks );
categoriesListWrapper.addEventListener('click', handleCategoryClick);
booksWrapperEl.addEventListener('click', onOpenPopUp);
let currentCategory = allCategoriesItem;
let btnCloseModal = null;

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
    categoriesListWrapper.insertAdjacentHTML( 'beforeend', createAllCategoriesListMarkup( countries ) );
  } catch ( err ) {
    console.log(err);
  }
}

function handleCategoryClick( event ) {
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
    topBooksBtn.forEach(item => {
      item.addEventListener('click', topBooksSeeMore);
    });
  } catch ( err ) {
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

function createAllBooksMarkup( array ) {
  return array.map( category => 
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
      <img class="home__books-img" src="${book_image}" alt="${title}" />
      <h3 class="home__books-title">${title}</h3>
      <p class="home__books-author">${author}</p>
      <p style="display:none" class="book-id">${_id}</p>
    </li>`
    )
    .join('');
}

async function getSelectedCategory( category ) {
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

function addActiveClass( target ) {
  currentCategory.classList.remove( 'home__categories-item-active' );
  target.classList.add( 'home__categories-item-active' );
  currentCategory = target;
}

function topBooksSeeMore( event ) {
  if ( event.target.type != "button" ) {
    return;
  }
    let categoryName = event.currentTarget.children[0].textContent;
    getSelectedCategory( categoryName );
    const categoriesArray = [...categoriesListWrapper.children];
    const target = categoriesArray.find( element => element.textContent === categoryName );
    addActiveClass( target );
}

function onOpenPopUp(event) {
  if (event.target.nodeName != 'IMG') {
    return;
  }
  backdropPop.classList.remove('is-hidden');
  const parentLi = event.target.parentElement;
  const bookId = parentLi.querySelector('.book-id').textContent;
  getBookById(bookId);
  
  
};
function onCloseModalPop(event) {
  backdropPop.classList.add('is-hidden');
  btnCloseModal.removeEventListener('click', onCloseModalPop);
  backdropPop.removeEventListener('click', onCloseModalPop);
};
function onCloseModalPopEsc(event) {
  backdropPop.classList.add('is-hidden');
  window.removeEventListener('keydown', onCloseModalPop);
};

async function getBookById(id) {
  try {
    const response = await fetch(`${BASIC_URL}${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const book = await response.json();
    popUpMarkUp(book)
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
      <div class="js-remove-wraper">
      <button class="btn-add-shop-list bth-remove js-remove" type="button">
        remove from the shopping list
      </button>
      <p class="msg-add-shoplist">
        Сongratulations! You have added the book to the shopping list. To
        delete, press the button “Remove from the shopping list”.
      </p>
      </div>
    </div>`;
  popUpEl.innerHTML = markUp;
  btnCloseModal = document.querySelector('.js-btn-close-modal');
  btnCloseModal.addEventListener('click', onCloseModalPop);
  window.addEventListener('keydown', onCloseModalPopEsc);
  backdropPop.addEventListener('click', onCloseModalPop);
}