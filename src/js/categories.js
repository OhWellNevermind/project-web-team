const BASIC_URL = 'https://books-backend.p.goit.global/books/';

const categoriesListWrapper = document.querySelector( '.js-categories-list' );
const allCategoriesItem = document.querySelector('.js-all-categories') 
const booksWrapperEl = document.querySelector( '.js-books-wrapper' );
const booksTitleEl = document.querySelector( '.js-books-title' );

allCategoriesItem.addEventListener( 'click', getTopBooks );

let currentCategoty = allCategoriesItem;

getAllCategories();
getTopBooks();

async function getAllCategories() {
  try {
    const response = await fetch( `${BASIC_URL}category-list` );
      if ( !response.ok ) {
        throw new Error(response.statusText)
      }
    const countries = await response.json();
    categoriesListWrapper.insertAdjacentHTML( 'beforeend', createAllCategoriesListMarkup( countries ) );
    categoriesListWrapper.addEventListener( 'click', changeCategory );
  } catch ( err ) {
    console.log(err);
  } 
}

async function getTopBooks() {
  try {
    const response = await fetch( `${BASIC_URL}top-books ` );
      if ( !response.ok ) {
        throw new Error(response.statusText)
      }
    const topBooks = await response.json();
    booksTitleEl.textContent = 'Best sellers book';
    booksWrapperEl.innerHTML = createAllBooksMarkup( topBooks );
  } catch ( err ) {
    console.log(err);
  } 
}

function createAllCategoriesListMarkup( array ) {
  return array.map( element =>
  `<li class="home__categories-item">${element.list_name}</li>`).join( '' );
}

function createAllBooksMarkup( array ) {
  return array.map( category => 
    `<li class="home__books-all-wrapper">
      <p class="home__books-all-categoty">${category.list_name}</p>
      <ul class="home__books-all-items">
        ${createSelectCategoryMarkup(category.books)}
      </ul>
      <button class="home__books-all-btn" type="button">
        See more
      </button>
    </li>`).join( '' );
}

function createSelectCategoryMarkup( array ) {
  return array.map( ( { book_image, title, author} ) =>
  `<li class="home__books-item">
      <img class="home__books-img" src="${book_image}" alt="${title}" />
      <h3 class="home__books-title">${title}</h3>
      <p class="home__books-author">${author}</p>
    </li>`).join( '' );
}

async function changeCategory( event ) {
  let selectedCategory = event.target.textContent;
  addActiveClass( event.target );
  booksTitleEl.textContent = selectedCategory;
  booksWrapperEl.innerHTML = '';
  try {
    const response = await fetch( `${BASIC_URL}category?category=${selectedCategory}` );
      if ( !response.ok ) {
        throw new Error(response.statusText)
    }
    const booksOfSelectegCategory = await response.json();
    booksWrapperEl.innerHTML = createSelectCategoryMarkup( booksOfSelectegCategory );
  } catch ( err ) {
    console.log(err);
  } 
}

function addActiveClass(target) {
  currentCategoty.classList.remove( 'home__categories-item-active' );
  target.classList.add( 'home__categories-item-active' );
  currentCategoty = target;
}






