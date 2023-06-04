// Функція для додавання блокування прокрутки
const enableScrollLock = () => {
  const body = document.querySelector('body');
  bodyScrollLock.disableBodyScroll(body);
};

// Функція для видалення блокування прокрутки
const disableScrollLock = () => {
  const body = document.querySelector('body');
  bodyScrollLock.enableBodyScroll(body);
};

document.addEventListener('DOMContentLoaded', function () {
  const modalButtons = document.querySelectorAll('.js-open-modal');
  const overlay = document.querySelector('.js-overlay-modal');
  const closeButtons = document.querySelectorAll('.js-modal-close');

  const openModal = function (modalId) {
    const modalElem = document.querySelector(
      '.modal[data-modal="' + modalId + '"]'
    );
    modalElem.classList.add('active');
    overlay.classList.add('active');
    enableScrollLock(); // Включаємо блокування прокрутки
  };

  const closeModal = function () {
    const activeModal = document.querySelector('.modal.active');
    activeModal.classList.remove('active');
    overlay.classList.remove('active');
    disableScrollLock(); // Вимикаємо блокування прокрутки
  };

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  });

  document.body.addEventListener('keyup', function (e) {
    const key = e.keyCode;
    if (key === 27) {
      closeModal();
    }
  });

  overlay.addEventListener('click', function () {
    closeModal();
  });
});
