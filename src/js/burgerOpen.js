const burgerRefs = {
  burgerBtn: document.querySelector('.btn-burger'),
  burgerMenu: document.querySelector('.burger-menu-container'),
};

burgerRefs.burgerBtn.addEventListener('click', toggleHidden);

function toggleHidden(event) {
  burgerRefs.burgerMenu.classList.toggle('burger-hidden');
}
