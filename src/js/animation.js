import 'animate.css';
import WOW from 'wow.js';
import { categoriesElements } from './categoriesElements';

new WOW().init();

const supportUkraineEl = document.querySelector( '.support-ukraine-container' );

export function animOnScroll() {
  const array = [...(categoriesElements.booksWrapperEl.children)];
  array.forEach(element => {
    element.classList.add( 'animate__animated' );
    element.classList.add( 'animate__bounceInRight' );
    element.classList.add( 'wow' );
    element.setAttribute( 'data-wow-duration', '2s' );
  });
}

export function selectedCategorieAnimation() {
  categoriesElements.booksWrapperEl.classList.add( 'animate__animated' );
  categoriesElements.booksWrapperEl.classList.add( 'animate__bounceInRight' ); 
  categoriesElements.booksWrapperEl.classList.add( 'animate__slow' ); 
}

export function allCategoriesAnimation() {
  categoriesElements.categoriesListWrapper.classList.add( 'animate__animated' );
  categoriesElements.categoriesListWrapper.classList.add( 'animate__bounceInLeft' );
  categoriesElements.categoriesListWrapper.classList.add( 'animate__slower' );
  
  supportUkraineEl.classList.add( 'animate__bounceInLeft' );
  supportUkraineEl.classList.add( 'animate__animated' );
  supportUkraineEl.classList.add( 'animate__slower' );
  supportUkraineEl.classList.add( 'animate__delay-1s' );
}