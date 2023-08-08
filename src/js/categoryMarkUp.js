const deafultInfo = 'Coming soon';

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

export {
  createAllBooksMarkup,
  createAllCategoriesListMarkup,
  createSelectCategoryMarkup,
};
