// Получаем форму и элементы для вывода ошибок
const form = document.getElementById('surveyForm');
const resultDiv = document.getElementById('result');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const genderInputs = document.getElementsByName('gender');
const ratingInput = document.getElementById('rating');
const interestInputs = document.getElementsByName('interests');
const commentsInput = document.getElementById('comments');

// Функция для отображения результатов
const displayResults = (name, email, gender, rating, interests, comments) => {
    resultDiv.innerHTML = `
        <p><strong>Имя пользователя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Пол:</strong> ${gender}</p>
        <p><strong>Оценка сервиса:</strong> ${rating}</p>
        <p><strong>Интересы пользователя:</strong> ${interests.join(', ')}</p>
        <p><strong>Дополнительные комментарии:</strong> ${comments}</p>
    `;
};

// Функция для валидации формы
const validateForm = () => {
    let isValid = true;
    
    // Очистить сообщения об ошибках
    document.querySelectorAll('.error').forEach(errorElement => {
        errorElement.textContent = '';
    });

    // Валидация имени
    if (!nameInput.value.trim()) {
        document.getElementById('nameError').textContent = 'Имя обязательно для заполнения!';
        isValid = false;
    }

    // Валидация email
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById('emailError').textContent = 'Введите корректный email!';
        isValid = false;
    }

    // Валидация пола
    if (![...genderInputs].some(input => input.checked)) {
        document.getElementById('genderError').textContent = 'Выберите пол!';
        isValid = false;
    }

    return isValid;
};

// Обработчик отправки формы
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Проверяем валидацию формы
    if (validateForm()) {
        // Получаем данные из формы
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const gender = [...genderInputs].find(input => input.checked).value;
        const rating = ratingInput.value;
        const interests = [...interestInputs].filter(input => input.checked).map(input => input.value);
        const comments = commentsInput.value.trim();

        // Отображаем результаты
        displayResults(name, email, gender, rating, interests, comments);
    }
});