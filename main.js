document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form')
  const email = document.getElementById('email')
  const errorMsg = document.querySelector('.error-msg')

  const modal = document.querySelector('.modal')
  const modalEmail = document.querySelector('.modal-email')
  const modalClose = document.querySelector('.modal-close')

  function showError(msg = 'Valid email required') {
    errorMsg.textContent = msg
    errorMsg.style.visibility = 'visible'
    email.classList.add('is-invalid')
  }
  function clearError() {
    errorMsg.style.visibility = 'hidden'
    email.classList.remove('is-invalid')
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!email.validity.valid) {
      showError()
      email.focus()
      return
    }

    clearError()
    modalEmail.textContent = email.value
    modal.removeAttribute('hidden')
    modalClose.focus()

    document.body.style.overflow = 'hidden'
  })

  function closeModal() {
    modal.setAttribute('hidden', '')
    document.body.style.overflow = ''
    email.focus()
  }

  modalClose.addEventListener('click', closeModal)

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
      closeModal()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (!modal.hasAttribute('hidden') && e.key === 'Escape') {
      closeModal()
    }
  })

  email.addEventListener('input', () => {
    if (email.validity.valid) clearError()
  })
})
