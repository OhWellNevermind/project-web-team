import './modal';

const refs = {
  openModalBtn: document.querySelector('[data-modal-burger-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
  changeAuth: document.querySelector('.modal-toggle'),
};

console.log(refs.openModalBtn);

refs.openModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  console.log('modal');
  refs.modal.classList.toggle('is-hidden');
  if (!refs.modal.classList.contains('is-hidden')) {
    refs.body.style.overflow = 'hidden';
  } else {
    refs.body.style.overflow = 'auto';
  }
}
