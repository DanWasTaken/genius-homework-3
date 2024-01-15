const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.getElementById('open-modal-btn');
const modalBtnClose = document.getElementById('close-modal-btn');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);