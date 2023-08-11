import 'animate.css';
import WOW from 'wow.js';

new WOW().init();

export function animOnScroll(booksWrapperEl) {
const array = [...(booksWrapperEl.children)];
array.forEach(element => {
  element.classList.add( 'animate__animated' );
  element.classList.add( 'animate__bounceInRight' );
  element.classList.add( 'wow' );
  element.setAttribute( 'data-wow-duration', '2s' );
});
}
export function selectedCategorieAnimation(booksWrapperEl) {
  booksWrapperEl.classList.add( 'animate__animated' );
  booksWrapperEl.classList.add( 'animate__bounceInRight' ); 
  booksWrapperEl.classList.add( 'animate__slow' ); 
}

export function allCategoriesAnimation(categoriesListWrapper, supportUkraineEl) {
  categoriesListWrapper.classList.add( 'animate__animated' );
  categoriesListWrapper.classList.add( 'animate__bounceInLeft' );
  categoriesListWrapper.classList.add( 'animate__slower' );
  
  supportUkraineEl.classList.add( 'animate__bounceInLeft' );
  supportUkraineEl.classList.add( 'animate__animated' );
  supportUkraineEl.classList.add( 'animate__slower' );
  supportUkraineEl.classList.add( 'animate__delay-1s' );
}





