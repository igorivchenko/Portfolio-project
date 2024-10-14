const refs = {
  openModalBtn: document.querySelectorAll('.js-open-menu'),
  closeModalBtn: document.querySelector('.js-close-menu'),
  modal: document.querySelector('.js-menu-container')


};
refs.openModalBtn.forEach((element) => {
  element.addEventListener("click", toggleModal);
});
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.modal.addEventListener("click", removeModal);
function removeModal(e) {
  if (e.target === e.currentTarget) {
    refs.modal.classList.add("is-hidden");
  }
}

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scroll");
};
