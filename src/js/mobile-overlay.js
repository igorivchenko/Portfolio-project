const refs = {
  openModalBtn: document.querySelectorAll('.js-open-menu'),
  closeModalBtn: document.querySelector('.js-close-menu'),
  modal: document.querySelector('.js-menu-container'),
  modalLinks: document.querySelectorAll('.mob-nav-tag'),
};
refs.openModalBtn.forEach(element => {
  element.addEventListener('click', toggleModal);
});
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', removeModal);
function removeModal(e) {
  if (e.target === e.currentTarget) {
    refs.modal.classList.add('is-active');
  }
}
function toggleModal() {
  refs.modal.classList.toggle('is-active');
  document.body.classList.toggle('no-scroll');
}
refs.modalLinks.forEach(link => {
  link.addEventListener('click', () => {
    refs.modal.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  });
});
