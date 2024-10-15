//version 1.3

// Цей код перехоплює операцію для відправки API (POST) запиту на сервер з електронною поштою та повідомленням
// Тут виконуються всі перевірки щодо полів електронної пошти та повідомлення

document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо елементи DOM
  const form = document.getElementById('work-together-form');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalMessage = document.getElementById('modal-message');
  const emailInput = document.getElementById('email');
  const messageTextarea = document.getElementById('user-comment');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const checkmark = document.querySelector('.work-together-form-input-valid');

  // Функція для відкриття модального вікна
  function openModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalBackdrop.classList.add('active');
  }

  // Функція для закриття модального вікна
  function closeModal() {
    modalBackdrop.classList.remove('active');
  }

  // Валідація email
  function validateEmail(email) {
    const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
  }

  // Очистка повідомлень про помилки
  function clearValidationErrors() {
    emailError.textContent = '';
    messageError.textContent = '';
  }

  // Обробка подій для email input
  emailInput.addEventListener('input', () => {
    clearValidationErrors();
    if (validateEmail(emailInput.value.trim())) {
      emailInput.classList.remove('error');
      emailInput.classList.add('valid');
      checkmark.style.display = 'inline';
    } else {
      emailInput.classList.add('error');
      emailError.textContent = 'Invalid email, try again';
      checkmark.style.display = 'none';
    }
  });

  // Обробка подій для message textarea
  messageTextarea.addEventListener('input', () => {
    if (messageTextarea.value.trim() !== '') {
      messageTextarea.classList.remove('error');
      messageTextarea.classList.add('valid');
      messageError.textContent = '';
    } else {
      messageTextarea.classList.remove('valid');
      messageTextarea.classList.add('error');
      messageError.textContent = 'Message cannot be empty';
    }
  });

  // Обробка подій на формі
  form.addEventListener('submit', async event => {
    event.preventDefault(); // Запобігаємо стандартному відправленню форми

    const email = emailInput.value.trim();
    const comment = messageTextarea.value.trim();

    // Валідація полів перед відправкою
    if (!validateEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      return;
    }
    if (!comment) {
      messageError.textContent = 'Message cannot be empty.';
      return;
    }

    var data = { email, comment };
    // var message = "";
    // data = { email, message };
    const JsonMessage = JSON.stringify(data);

    console.log(JsonMessage);

    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/requests',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JsonMessage,
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        //openModal("Success", responseData.message || "Message sent successfully!");
        openModal(
          modalTitle.textContent,
          modalMessage.textContent || 'Message sent successfully!'
        );
        form.reset(); // Очищення форми
        checkmark.style.display = 'none';
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        // перезаписати властивості заголовка помилки модального вікна
        modalTitle.textContent = 'Error';
        modalTitle.style.color = 'red';
        openModal(
          modalTitle.textContent,
          errorData.message || 'Unexpected error, please try again.'
        );
      }
    } catch (error) {
      const errorData = error.message;
      console.error('Network Error:', errorData);
      // перезаписати властивості заголовка помилки модального вікна
      modalTitle.textContent = 'Network Error';
      modalTitle.style.color = 'red';
      openModal(modalTitle.textContent, `Network error: ${error.message}`);
    }
  });

  // Закриття модального вікна по кнопці
  modalCloseBtn.addEventListener('click', closeModal);

  // Закриття модального вікна по кліку на backdrop
  modalBackdrop.addEventListener('click', event => {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });

  // Закриття модального вікна по клавіші Escape
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
