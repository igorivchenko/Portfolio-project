// Отримуємо елементи DOM
const form = document.getElementById('work-together-form');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalWindow = document.getElementById('modal-window');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('user-comment');

// Функція для відкриття модального вікна
function openModal() {
    modalBackdrop.classList.add('active');
}

// Функція для закриття модального вікна
function closeModal() {
    modalBackdrop.classList.remove('active');
}

// Обробка події на кнопці "SEND MESSAGE"
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Запобігаємо стандартній відправці

    const email = emailInput.value;
    const message = messageInput.value;

    // Перевірка на валідацію (можна додати додаткові перевірки)
    if (!email || !message) {
        alert("Будь ласка, заповніть всі поля.");
        return;
    }

    try {
        // Відправка POST-запиту
        const response = await fetch('https://portfolio-js.b.goit.study/api-docs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, message })
        });

        if (!response.ok) {
            throw new Error('Помилка сервера');
        }

        // Якщо запит успішний
        openModal();
        form.reset(); // Очищення форми

    } catch (error) {
        alert("Сталася помилка: " + error.message);
        // Можна додати додаткову обробку помилок для конкретних полів
    }
});

// Закриття модального вікна по кнопці
modalCloseBtn.addEventListener('click', closeModal);

// Закриття модального вікна при натисканні на backdrop
modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) {
        closeModal();
    }
});

// Закриття модального вікна при натисканні клавіші Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});