(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
    changeAuth: document.querySelector('.modal-toggle'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.changeAuth.addEventListener('click', event => {
    if (event.target.nodeName != 'BUTTON') {
      return;
    }
    toggleCurrentAuth(event.target);
  });

  function toggleModal() {
    console.log('modal');
    refs.modal.classList.toggle('is-hidden');
    if (!refs.modal.classList.contains('is-hidden')) {
      refs.body.style.overflow = 'hidden';
    } else {
      refs.body.style.overflow = 'auto';
    }
  }

  function toggleCurrentAuth(element) {
    document.querySelectorAll('.modal-form__submit').forEach(el => {
      el.classList.toggle('hidden-submit');
    });
    if (element.nextElementSibling) {
      element.classList.toggle('modal-toggle__el--current');
      element.nextElementSibling.classList.toggle('modal-toggle__el--current');
    } else {
      element.classList.toggle('modal-toggle__el--current');
      element.previousElementSibling.classList.toggle(
        'modal-toggle__el--current'
      );
    }
  }
})();
