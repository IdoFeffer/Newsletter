const form = document.getElementById('signup-form')
const email = document.getElementById('email')
const errorMsg = document.querySelector('.error-msg')

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
  // אם לא תקין – אל תשלח והצג עיצוב שגיאה
  if (!email.validity.valid) {
    e.preventDefault()
    showError()
      email.style.color = 'red'

    email.focus()
  } else {
    clearError()
    // כאן אפשר להמשיך לשליחה/ניווט
  }
})

// בזמן הקלדה – נקה כשנהיה תקין
email.addEventListener('input', () => {
  if (email.validity.valid) clearError()
})
