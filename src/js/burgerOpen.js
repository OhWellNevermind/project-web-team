import { checkAuthState } from './userAutorization';

const burgerRefs = {
  burgerBtn: document.querySelector('.btn-burger'),
  burgerBtnClose: document.querySelector('.btn-close-burger'),
  burgerMenu: document.querySelector('.burger-menu-container'),
};

burgerRefs.burgerBtn.addEventListener('click', toggleHidden);
burgerRefs.burgerBtnClose.addEventListener('click', toggleHidden);

function toggleHidden(event) {
  checkAuthState();
  burgerRefs.burgerMenu.classList.toggle('burger-hidden');
  burgerRefs.burgerBtn.classList.toggle('hidden-burger');
  burgerRefs.burgerBtnClose.classList.toggle('hidden-burger');
}
