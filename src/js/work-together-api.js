// 1-й варіант (повідомлення тільки про успішну обробку) // 
// // Отримуємо елементи DOM
// const form = document.getElementById('work-together-form');
// const modalBackdrop = document.getElementById('modal-backdrop');
// const modalCloseBtn = document.getElementById('modal-close-btn');
// const modalWindow = document.getElementById('modal-window');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('user-comment');

// // Функція для відкриття модального вікна
// function openModal() {
//     modalBackdrop.classList.add('active');
// }

// // Функція для закриття модального вікна
// function closeModal() {
//     modalBackdrop.classList.remove('active');
// }

// // Обробка події на кнопці "SEND MESSAGE"
// form.addEventListener('submit', async (event) => {
//     event.preventDefault(); // Запобігаємо стандартній відправці

//     const email = emailInput.value;
//     const message = messageInput.value;

//     // Перевірка на валідацію (можна додати додаткові перевірки)
//     if (!email || !message) {
//         alert("Будь ласка, заповніть всі поля.");
//         return;
//     }

//     try {
//         // Відправка POST-запиту
//         const response = await fetch('https://portfolio-js.b.goit.study/api-docs/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email, message })
//         });

//         if (!response.ok) {
//             throw new Error('Помилка сервера');
//         }

//         // Якщо запит успішний
//         openModal();
//         form.reset(); // Очищення форми

//     } catch (error) {
//         alert("Сталася помилка: " + error.message);
//         // Можна додати додаткову обробку помилок для конкретних полів
//     }
// });

// // Закриття модального вікна по кнопці
// modalCloseBtn.addEventListener('click', closeModal);

// // Закриття модального вікна при натисканні на backdrop
// modalBackdrop.addEventListener('click', (event) => {
//     if (event.target === modalBackdrop) {
//         closeModal();
//     }
// });

// // Закриття модального вікна при натисканні клавіші Escape
// document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//         closeModal();
//     }
// });




// // 2-й варіант (повідомлення тільки про успішну обробку)
// // Отримуємо елементи DOM
// const form = document.getElementById('work-together-form');
// const modalBackdrop = document.getElementById('modal-backdrop');
// const modalCloseBtn = document.getElementById('modal-close-btn');

// // Функція для закриття модального вікна
// function closeModal() {
//     modalBackdrop.classList.remove('active');
// }

// // Функція для відкриття модального вікна
// function openModal() {
//     modalBackdrop.classList.add('active');
// }

// // Обробка події на формі
// form.addEventListener('submit', async (event) => {
//     event.preventDefault(); // Запобігаємо стандартному відправленню форми

//     // Збираємо дані з форми
//     const formData = new FormData(form);
//     const data = {
//         email: formData.get('email'),
//         message: formData.get('message'),
//     };

//     try {
//         // Відправляємо POST запит
//         const response = await fetch('https://portfolio-js.b.goit.study/api-docs/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });

//         if (response.ok) {
//             // Успішна відповідь
//             openModal();
//             form.reset(); // Очищаємо форму
//         } else {
//             // Обробка помилки
//             const errorData = await response.json();
//             const emailError = document.getElementById('email-error');
//             const messageError = document.getElementById('message-error');
//             emailError.textContent = errorData.email ? errorData.email.join(', ') : '';
//             messageError.textContent = errorData.message ? errorData.message.join(', ') : '';
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('Виникла помилка. Будь ласка, спробуйте ще раз.');
//     }
// });

// // Закриття модального вікна по кнопці
// modalCloseBtn.addEventListener('click', closeModal);

// // Закриття модального вікна по кліку на backdrop
// modalBackdrop.addEventListener('click', (event) => {
//     if (event.target === modalBackdrop) {
//         closeModal();
//     }
// });

// // Закриття модального вікна по клавіші Escape
// document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//         closeModal();
//     }
// });







// 3-й варіант (повідомлення тільки про помилку)
// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("work-together-form");
//     const modalBackdrop = document.getElementById("modal-backdrop");
//     const closeModalButton = document.getElementById("modal-close-btn");
//     const modalTitle = document.getElementById("modal-title");
//     const modalMessage = document.getElementById("modal-message");
//     const emailInput = document.getElementById("email");
//     const emailError = document.getElementById("email-error");
//     const messageTextarea = document.getElementById("user-comment");
//     const messageError = document.getElementById("message-error");
//     const checkmark = document.querySelector('.work-together-form-input-valid');

//     // Функція для відкриття модального вікна
//     function openModal(title, message) {
//         modalTitle.textContent = title;
//         modalMessage.textContent = message;
//         modalBackdrop.classList.add("active");
//     }

//     // Функція для закриття модального вікна
//     function closeModal() {
//         modalBackdrop.classList.remove("active");
//     }

//     // Валідація email
//     function validateEmail(email) {
//         const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//         return pattern.test(email);
//     }

//     // Очистка повідомлення про помилку
//     function clearValidationError(errorElement) {
//         errorElement.textContent = '';
//     }

//     // Обробка подій для email input
//     emailInput.addEventListener('input', () => {
//         if (validateEmail(emailInput.value.trim())) {
//             emailInput.classList.remove('error');
//             emailInput.classList.add('valid');
//             clearValidationError(emailError);
//             checkmark.style.display = 'inline';
//         } else {
//             emailInput.classList.add('error');
//             emailInput.classList.remove('valid');
//             emailError.textContent = 'Invalid email, try again';
//             checkmark.style.display = 'none';
//         }
//     });

//     // Обробка подій для message textarea
//     messageTextarea.addEventListener('input', () => {
//         if (messageTextarea.value.trim() !== "") {
//             messageTextarea.classList.add('valid');
//             messageError.textContent = '';
//         } else {
//             messageTextarea.classList.remove('valid');
//             messageError.textContent = 'Message cannot be empty';
//         }
//     });

//     // Обробка подій на формі
//     form.addEventListener('submit', async (event) => {
//         event.preventDefault(); // Запобігаємо стандартному відправленню форми

//         const formData = new FormData(form);
//         const data = {
//             email: formData.get('email'),
//             message: formData.get('message'),
//         };

//         console.log("Sending data:", JSON.stringify(data)); // Логування

//         try {
//             const response = await fetch("https://portfolio-js.b.goit.study/api/requests", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 const responseData = await response.json();
//                 openModal("Success", responseData.message);
//                 form.reset(); // Очищаємо форму
//                 checkmark.style.display = 'none';
//             } else {
//                 const errorData = await response.json();
//                 console.error("Error response:", errorData); // Лог для помилок
//                 openModal("Error", errorData.message || "Unexpected error, please try again.");
//             }
//         } catch (error) {
//             console.error("Network Error:", error);
//             openModal("Network Error", `Network error: ${error.message}`);
//         }
//     });

//     // Закриття модального вікна по кнопці
//     closeModalButton.addEventListener("click", closeModal);

//     // Закриття модального вікна по кліку на backdrop
//     modalBackdrop.addEventListener("click", (event) => {
//         if (event.target === modalBackdrop) {
//             closeModal();
//         }
//     });

//     // Закриття модального вікна по клавіші Escape
//     document.addEventListener("keydown", (event) => {
//         if (event.key === "Escape") {
//             closeModal();
//         }
//     });
// });

// 4-й варіант коду (повідомлення тільки про помилку)
// document.addEventListener("DOMContentLoaded", function () {
//     // Отримуємо елементи DOM
//     const form = document.getElementById("work-together-form");
//     const modalBackdrop = document.getElementById("modal-backdrop");
//     const modalCloseBtn = document.getElementById("modal-close-btn");
//     const modalTitle = document.getElementById("modal-title");
//     const modalMessage = document.getElementById("modal-message");
//     const emailInput = document.getElementById("email");
//     const messageTextarea = document.getElementById("user-comment");
//     const emailError = document.getElementById("email-error");
//     const messageError = document.getElementById("message-error");
//     const checkmark = document.querySelector('.work-together-form-input-valid');

//     // Функція для відкриття модального вікна
//     function openModal(title, message) {
//         modalTitle.textContent = title;
//         modalMessage.textContent = message;
//         modalBackdrop.classList.add("active");
//     }

//     // Функція для закриття модального вікна
//     function closeModal() {
//         modalBackdrop.classList.remove("active");
//     }

//     // Валідація email
//     function validateEmail(email) {
//         const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//         return pattern.test(email);
//     }

//     // Очистка повідомлень про помилки
//     function clearValidationErrors() {
//         emailError.textContent = '';
//         messageError.textContent = '';
//     }

//     // Обробка подій для email input
//     emailInput.addEventListener('input', () => {
//         clearValidationErrors();
//         if (validateEmail(emailInput.value.trim())) {
//             emailInput.classList.remove('error');
//             emailInput.classList.add('valid');
//             checkmark.style.display = 'inline';
//         } else {
//             emailInput.classList.add('error');
//             emailError.textContent = 'Invalid email, try again';
//             checkmark.style.display = 'none';
//         }
//     });

//     // Обробка подій для message textarea
//     messageTextarea.addEventListener('input', () => {
//         if (messageTextarea.value.trim() !== "") {
//             messageTextarea.classList.add('valid');
//             messageError.textContent = '';
//         } else {
//             messageTextarea.classList.remove('valid');
//             messageError.textContent = 'Message cannot be empty';
//         }
//     });

//     // Обробка подій на формі
//     form.addEventListener('submit', async (event) => {
//         event.preventDefault(); // Запобігаємо стандартному відправленню форми

//         const email = emailInput.value.trim();
//         const message = messageTextarea.value.trim();

//         // Валідація полів перед відправкою
//         if (!validateEmail(email)) {
//             emailError.textContent = 'Please enter a valid email address.';
//             return;
//         }
//         if (!message) {
//             messageError.textContent = 'Message cannot be empty.';
//             return;
//         }

//         const data = { email, message };

//         try {
//             const response = await fetch("https://portfolio-js.b.goit.study/api/requests", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 const responseData = await response.json();
//                 openModal("Success", responseData.message || "Message sent successfully!");
//                 form.reset(); // Очищення форми
//                 checkmark.style.display = 'none';
//             } else {
//                 const errorData = await response.json();
//                 console.error("Error response:", errorData);
//                 openModal("Error", errorData.message || "Unexpected error, please try again.");
//             }
//         } catch (error) {
//             console.error("Network Error:", error);
//             openModal("Network Error", `Network error: ${error.message}`);
//         }
//     });

//     // Закриття модального вікна по кнопці
//     modalCloseBtn.addEventListener("click", closeModal);

//     // Закриття модального вікна по кліку на backdrop
//     modalBackdrop.addEventListener("click", (event) => {
//         if (event.target === modalBackdrop) {
//             closeModal();
//         }
//     });

//     // Закриття модального вікна по клавіші Escape
//     document.addEventListener("keydown", (event) => {
//         if (event.key === "Escape") {
//             closeModal();
//         }
//     });
// });


// 5-й варіант 
// document.addEventListener("DOMContentLoaded", function () {
//     // Отримуємо елементи DOM
//     const form = document.getElementById("work-together-form");
//     const modalBackdrop = document.getElementById("modal-backdrop");
//     const modalCloseBtn = document.getElementById("modal-close-btn");
//     const modalTitle = document.getElementById("modal-title");
//     const modalMessage = document.getElementById("modal-message");
//     const emailInput = document.getElementById("email");
//     const messageTextarea = document.getElementById("user-comment");
//     const emailError = document.getElementById("email-error");
//     const messageError = document.getElementById("message-error");
//     const checkmark = document.querySelector('.work-together-form-input-valid');

//     // Функція для відкриття модального вікна
//     function openModal(title, message) {
//         modalTitle.textContent = title;
//         modalMessage.textContent = message;
//         modalBackdrop.classList.add("active");
//     }

//     // Функція для закриття модального вікна
//     function closeModal() {
//         modalBackdrop.classList.remove("active");
//     }

//     // Валідація email
//     function validateEmail(email) {
//         const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//         return pattern.test(email);
//     }

//     // Очистка повідомлень про помилки
//     function clearValidationErrors() {
//         emailError.textContent = '';
//         messageError.textContent = '';
//     }

//     // Обробка подій для email input
//     emailInput.addEventListener('input', () => {
//         clearValidationErrors();
//         if (validateEmail(emailInput.value.trim())) {
//             emailInput.classList.remove('error');
//             emailInput.classList.add('valid');
//             checkmark.style.display = 'inline';
//         } else {
//             emailInput.classList.add('error');
//             emailError.textContent = 'Invalid email, try again';
//             checkmark.style.display = 'none';
//         }
//     });

//     // Обробка подій для message textarea
//     messageTextarea.addEventListener('input', () => {
//         if (messageTextarea.value.trim() !== "") {
//             messageTextarea.classList.add('valid');
//             messageError.textContent = '';
//         } else {
//             messageTextarea.classList.remove('valid');
//             messageError.textContent = 'Message cannot be empty';
//         }
//     });

//     // Обробка подій на формі
//     form.addEventListener('submit', async (event) => {
//         event.preventDefault(); // Запобігаємо стандартному відправленню форми

//         const email = emailInput.value.trim();
//         const message = messageTextarea.value.trim();

//         // Валідація полів перед відправкою
//         if (!validateEmail(email)) {
//             emailError.textContent = 'Please enter a valid email address.';
//             return;
//         }
//         if (!message) {
//             messageError.textContent = 'Message cannot be empty.';
//             return;
//         }

//         const data = { email, message };

//         try {
//             const response = await fetch("https://portfolio-js.b.goit.study/api/requests", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 const responseData = await response.json();
//                 openModal("Success", responseData.message || "Message sent successfully!");
//                 form.reset(); // Очищення форми
//                 checkmark.style.display = 'none';
//             } else {
//                 const errorData = await response.json();
//                 console.error("Error response:", errorData);
//                 openModal("Error", errorData.message || "Unexpected error, please try again.");
//             }
//         } catch (error) {
//             console.error("Network Error:", error);
//             openModal("Network Error", `Network error: ${error.message}`);
//         }
//     });

//     // Закриття модального вікна по кнопці
//     modalCloseBtn.addEventListener("click", closeModal);

//     // Закриття модального вікна по кліку на backdrop
//     modalBackdrop.addEventListener("click", (event) => {
//         if (event.target === modalBackdrop) {
//             closeModal();
//         }
//     });

//     // Закриття модального вікна по клавіші Escape
//     document.addEventListener("keydown", (event) => {
//         if (event.key === "Escape") {
//             closeModal();
//         }
//     });
// });



// 7-й варіант
document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо елементи DOM
    const form = document.getElementById("work-together-form");
    const modalBackdrop = document.getElementById("modal-backdrop");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    const emailInput = document.getElementById("email");
    const messageTextarea = document.getElementById("user-comment");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const checkmark = document.querySelector('.work-together-form-input-valid');

    // Функція для відкриття модального вікна
    function openModal(title, message) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modalBackdrop.classList.add("active");
    }

    // Функція для закриття модального вікна
    function closeModal() {
        modalBackdrop.classList.remove("active");
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
        if (messageTextarea.value.trim() !== "") {
            messageTextarea.classList.add('valid');
            messageError.textContent = '';
        } else {
            messageTextarea.classList.remove('valid');
            messageError.textContent = 'Message cannot be empty';
        }
    });

    // Обробка подій на формі
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Запобігаємо стандартному відправленню форми

        const email = emailInput.value.trim();
        const message = messageTextarea.value.trim();

        // Валідація полів перед відправкою
        if (!validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            return;
        }
        if (!message) {
            messageError.textContent = 'Message cannot be empty.';
            return;
        }

        const data = { email, message };

        try {
            const response = await fetch("https://portfolio-js.b.goit.study/api/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                openModal("Success", responseData.message || "Message sent successfully!");
                form.reset(); // Очищення форми
                checkmark.style.display = 'none';
            } else {
                const errorData = await response.json();
                console.error("Error response:", errorData);
                openModal("Error", errorData.message || "Unexpected error, please try again.");
            }
        } catch (error) {
            console.error("Network Error:", error);
            openModal("Network Error", `Network error: ${error.message}`);
        }
    });

    // Закриття модального вікна по кнопці
    modalCloseBtn.addEventListener("click", closeModal);

    // Закриття модального вікна по кліку на backdrop
    modalBackdrop.addEventListener("click", (event) => {
        if (event.target === modalBackdrop) {
            closeModal();
        }
    });

    // Закриття модального вікна по клавіші Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});