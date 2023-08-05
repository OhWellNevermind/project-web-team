(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

/*const buttonElem = document.querySelector('.section_button');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = '
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
';
*/
