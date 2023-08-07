import sprite from "../images/sprite.svg";
import appleLogo from "../images/apple-read-logo.png";
import appleLogoSize from "../images/amazon-logo@2x.png";
import bookShopLogo from '../images/book-shop-logo.png'
import bookShopLogoSize from '../images/book-shop-logo@2x.png'
import emptyPage from '../images/shopping-list-empty.png'
import emptyPageSize from '../images/shopping-list-empty@2x.png'

const booksData = [
  {
    list_name: 'Combined Print and E-Book Nonfiction',
    _id: '642fd89ac8cf5ee957f12361',
    title: 'WISH',
    author: "Barbara O'Connor",
    description:
      'Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
  },
  {
    list_name: 'Combined Print and E-Book Nonfiction',
    _id: '642fd89ac8cf5ee957f12361',
    title:
      'WISH 2 Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara',
    author: "Barbara O'Connor 2",
    description: 'Це дуже цікава книга про...2',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
  },
];

// localStorage.setItem("books", JSON.stringify(booksData))
console.log(JSON.parse(localStorage.getItem("books")));

const slList = document.querySelector(".sl-list");
slList.addEventListener('click', handleDeleteClick)

const books = JSON.parse(localStorage.getItem("books"));
renderCards()
function renderCards() {
    if (!books.length || !books[0]) {
        console.log('asdasdasdas')
        slList.innerHTML = `
        <div class="sl-empty-container">
            <h1 class="sl-empty-title">This page is empty, add some books and proceed to order.</h1>
            <picture>
                <source srcset="${emptyPage} 1x, ${emptyPageSize} 2x">
                <img class="sl-empty-img" src="${emptyPage}" alt="book-store">
            </picture>
        </div>`
    } else {
        const booksMarkUp = createShopListMarkUp(books);
        slList.innerHTML = booksMarkUp;
    }
}

function handleDeleteClick(event) {
    console.log(event.target.classList.contains('sl-list-item-icon-button'), event.target.classList.contains('sl-list-delete-icon'))
    if (event.target.nodeName != "BUTTON") {
        return
    }

    const bookId = event.target.value;
    const parentLi = event.target.closest('.sl-list-item');
    const newBooks =
        books.filter(book => book._id === bookId).map((book) => {
            books.splice(books.indexOf(book), 1);
        })
    console.log(newBooks)
    localStorage.setItem('books', JSON.stringify(newBooks))
    renderCards()
    console.log(bookId, parentLi)
}

function createShopListMarkUp() {
    return books.map(({ title, description, book_image, list_name, author, _id }) => {
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
                </li>`
}).join("")
}