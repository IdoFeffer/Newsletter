document.addEventListener('DOMContentLoaded', () => {
  const form       = document.getElementById('signup-form');
  const email      = document.getElementById('email');
  const errorMsg   = document.querySelector('.error-msg');

  const modal      = document.querySelector('.modal');
  const modalEmail = document.querySelector('.modal-email');
  const modalClose = document.querySelector('.modal-close');

  function showError(msg='Valid email required') {
    errorMsg.textContent = msg;
    errorMsg.style.visibility = 'visible';
    email.classList.add('is-invalid'); // CSS שלך צובע מסגרת/רקע
  }
  function clearError() {
    errorMsg.style.visibility = 'hidden';
    email.classList.remove('is-invalid');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!email.validity.valid) {
      showError();
      email.focus();
      return;
    }

    clearError();
    // פותחים מודל + מציגים אימייל
    modalEmail.textContent = email.value;
    modal.removeAttribute('hidden');
    modalClose.focus();

    // אופציונלי: לנעול גלילה ברקע
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = ''; // משחרר גלילה
    email.focus();
  }

  // כפתור סגירה
  modalClose.addEventListener('click', closeModal);

  // סגירה בלחיצה על הרקע (כי עכשיו הוא ילד של .modal)
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });

  // סגירה עם ESC
  document.addEventListener('keydown', (e) => {
    if (!modal.hasAttribute('hidden') && e.key === 'Escape') {
      closeModal();
    }
  });

  // בזמן הקלדה – נקה כשהופך לתקין
  email.addEventListener('input', () => {
    if (email.validity.valid) clearError();
  });
});
