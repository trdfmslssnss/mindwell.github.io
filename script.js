// Данные тестов
const testsData = [
    {
        id: 1,
        title: "Уровень тревожности",
        description: "Оцените свой текущий уровень тревожности и получите рекомендации",
        icon: "fa-heart-circle-exclamation",
        time: "5-7 мин",
        category: "Эмоции",
        questions: [
            {
                text: "Как часто вы чувствуете напряжение или беспокойство?",
                options: [
                    { text: "Почти никогда", value: 0 },
                    { text: "Иногда", value: 1 },
                    { text: "Часто", value: 2 },
                    { text: "Постоянно", value: 3 }
                ]
            },
            {
                text: "Бывает ли у вас чувство, что может случиться что-то плохое?",
                options: [
                    { text: "Никогда", value: 0 },
                    { text: "Редко", value: 1 },
                    { text: "Довольно часто", value: 2 },
                    { text: "Почти всегда", value: 3 }
                ]
            },
            {
                text: "Как часто вы испытываете проблемы со сном из-за беспокойства?",
                options: [
                    { text: "Никогда", value: 0 },
                    { text: "1-2 раза в месяц", value: 1 },
                    { text: "1-2 раза в неделю", value: 2 },
                    { text: "Почти каждую ночь", value: 3 }
                ]
            },
            {
                text: "Замечаете ли вы физические симптомы тревоги?",
                options: [
                    { text: "Никогда", value: 0 },
                    { text: "Редко", value: 1 },
                    { text: "Часто", value: 2 },
                    { text: "Очень часто", value: 3 }
                ]
            },
            {
                text: "Трудно ли вам расслабиться?",
                options: [
                    { text: "Нет, легко", value: 0 },
                    { text: "Иногда трудно", value: 1 },
                    { text: "Часто трудно", value: 2 },
                    { text: "Всегда трудно", value: 3 }
                ]
            }
        ],
        results: [
            {
                min: 0,
                max: 5,
                title: "Низкий уровень тревожности",
                description: "У вас низкий уровень тревожности. Вы хорошо справляетесь со стрессом.",
                icon: "😊",
                recommendations: [
                    "Продолжайте практиковать здоровые способы управления стрессом",
                    "Поддерживайте баланс работы и отдыха",
                    "Регулярно занимайтесь спортом"
                ]
            },
            {
                min: 6,
                max: 10,
                title: "Умеренный уровень тревожности",
                description: "У вас умеренный уровень тревожности. Иногда вы испытываете беспокойство.",
                icon: "😐",
                recommendations: [
                    "Попробуйте техники глубокого дыхания",
                    "Ведите дневник эмоций",
                    "Уделите время релаксации"
                ]
            },
            {
                min: 11,
                max: 15,
                title: "Высокий уровень тревожности",
                description: "У вас высокий уровень тревожности. Рекомендуется обратиться к специалисту.",
                icon: "😟",
                recommendations: [
                    "Обратитесь к психологу",
                    "Практикуйте медитацию",
                    "Избегайте стимуляторов"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Эмоциональное выгорание",
        description: "Проверьте, не находитесь ли вы в состоянии эмоционального истощения",
        icon: "fa-battery-empty",
        time: "4-6 мин",
        category: "Работа",
        questions: [
            {
                text: "Чувствуете ли вы эмоциональное истощение к концу дня?",
                options: [
                    { text: "Никогда", value: 0 },
                    { text: "Иногда", value: 1 },
                    { text: "Часто", value: 2 },
                    { text: "Всегда", value: 3 }
                ]
            },
            {
                text: "Испытываете ли вы безразличие к работе?",
                options: [
                    { text: "Нет", value: 0 },
                    { text: "Редко", value: 1 },
                    { text: "Довольно часто", value: 2 },
                    { text: "Постоянно", value: 3 }
                ]
            },
            {
                text: "Чувствуете ли вы снижение эффективности?",
                options: [
                    { text: "Нет", value: 0 },
                    { text: "Незначительно", value: 1 },
                    { text: "Заметно", value: 2 },
                    { text: "Сильно", value: 3 }
                ]
            },
            {
                text: "Как часто вы думаете о работе в нерабочее время?",
                options: [
                    { text: "Никогда", value: 0 },
                    { text: "Редко", value: 1 },
                    { text: "Часто", value: 2 },
                    { text: "Постоянно", value: 3 }
                ]
            },
            {
                text: "Чувствуете ли вы раздражение к коллегам?",
                options: [
                    { text: "Никогда", value: 0 },
                    { text: "Редко", value: 1 },
                    { text: "Часто", value: 2 },
                    { text: "Постоянно", value: 3 }
                ]
            }
        ],
        results: [
            {
                min: 0,
                max: 5,
                title: "Низкий риск выгорания",
                description: "У вас низкий риск эмоционального выгорания.",
                icon: "💪",
                recommendations: [
                    "Продолжайте соблюдать баланс",
                    "Регулярно отдыхайте",
                    "Занимайтесь хобби"
                ]
            },
            {
                min: 6,
                max: 10,
                title: "Средний риск выгорания",
                description: "Есть некоторые признаки выгорания.",
                icon: "⚠️",
                recommendations: [
                    "Устройте цифровой детокс",
                    "Начните медитировать",
                    "Обсудите нагрузку с руководством"
                ]
            },
            {
                min: 11,
                max: 15,
                title: "Высокий риск выгорания",
                description: "Серьезные признаки выгорания.",
                icon: "🔥",
                recommendations: [
                    "Возьмите отпуск",
                    "Обратитесь к психологу",
                    "Пересмотрите свои обязанности"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Отношения с собой",
        description: "Оцените уровень самопринятия и любви к себе",
        icon: "fa-heart",
        time: "5 мин",
        category: "Самооценка",
        questions: [
            {
                text: "Как часто вы критикуете себя?",
                options: [
                    { text: "Почти никогда", value: 0 },
                    { text: "Иногда", value: 1 },
                    { text: "Часто", value: 2 },
                    { text: "Постоянно", value: 3 }
                ]
            },
            {
                text: "Сравниваете ли вы себя с другими?",
                options: [
                    { text: "Никогда", value: 0 },
                    { text: "Редко", value: 1 },
                    { text: "Часто", value: 2 },
                    { text: "Постоянно", value: 3 }
                ]
            },
            {
                text: "Умеете ли вы прощать себя за ошибки?",
                options: [
                    { text: "Всегда", value: 0 },
                    { text: "Часто", value: 1 },
                    { text: "Редко", value: 2 },
                    { text: "Никогда", value: 3 }
                ]
            },
            {
                text: "Чувствуете ли вы себя достойным любви?",
                options: [
                    { text: "Всегда", value: 0 },
                    { text: "Часто", value: 1 },
                    { text: "Редко", value: 2 },
                    { text: "Никогда", value: 3 }
                ]
            },
            {
                text: "Заботитесь ли вы о своих потребностях?",
                options: [
                    { text: "Всегда", value: 0 },
                    { text: "Часто", value: 1 },
                    { text: "Редко", value: 2 },
                    { text: "Никогда", value: 3 }
                ]
            }
        ],
        results: [
            {
                min: 0,
                max: 5,
                title: "Гармоничные отношения с собой",
                description: "У вас здоровые отношения с собой.",
                icon: "🦋",
                recommendations: [
                    "Продолжайте практиковать самопринятие",
                    "Делитесь опытом с другими",
                    "Записывайте достижения"
                ]
            },
            {
                min: 6,
                max: 10,
                title: "Средний уровень самопринятия",
                description: "Вы на пути к гармонии с собой.",
                icon: "🌱",
                recommendations: [
                    "Практикуйте аффирмации",
                    "Ведите дневник благодарности",
                    "Хвалите себя за победы"
                ]
            },
            {
                min: 11,
                max: 15,
                title: "Низкое самопринятие",
                description: "Вам трудно принимать себя.",
                icon: "💔",
                recommendations: [
                    "Работа с психологом",
                    "Группы поддержки",
                    "Техники повышения самооценки"
                ]
            }
        ]
    }
];

// Текущее состояние
let currentTest = null;
let userAnswers = [];
let currentQuestionIndex = 0;

// Загрузка тестов
function loadTests() {
    const testsGrid = document.getElementById('testsGrid');
    if (!testsGrid) return;
    
    testsGrid.innerHTML = '';
    
    testsData.forEach(test => {
        const testCard = document.createElement('div');
        testCard.className = 'test-card';
        testCard.innerHTML = `
            <div class="test-icon">
                <i class="fas ${test.icon}"></i>
            </div>
            <h3>${test.title}</h3>
            <p>${test.description}</p>
            <div class="test-meta">
                <span><i class="fas fa-question-circle"></i> ${test.questions.length} вопросов</span>
                <span><i class="fas fa-clock"></i> ${test.time}</span>
                <span><i class="fas fa-tag"></i> ${test.category}</span>
            </div>
            <button class="start-test-btn" onclick="openTest(${test.id})">Начать тест</button>
        `;
        testsGrid.appendChild(testCard);
    });
}

// Открытие теста
window.openTest = function(testId) {
    currentTest = testsData.find(t => t.id === testId);
    userAnswers = new Array(currentTest.questions.length).fill(null);
    currentQuestionIndex = 0;
    
    document.getElementById('modalTitle').textContent = currentTest.title;
    renderTest();
    
    const modal = document.getElementById('testModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Прокручиваем вверх
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}

// Рендер теста
function renderTest() {
    const container = document.getElementById('testContainer');
    if (!container) return;
    
    const totalQuestions = currentTest.questions.length;
    const answeredCount = userAnswers.filter(a => a !== null).length;
    const progress = (answeredCount / totalQuestions) * 100;
    
    let html = `
        <div class="test-progress">
            <div class="progress-stats">
                <span><i class="fas fa-question-circle"></i> Вопрос <span id="current-question-num">${currentQuestionIndex + 1}</span> из ${totalQuestions}</span>
                <span><i class="fas fa-check-circle"></i> Отвечено: <span id="answered-count">${answeredCount}</span>/${totalQuestions}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" id="progress-fill" style="width: ${progress}%"></div>
            </div>
        </div>
        <div class="question-container" id="question-container">
    `;
    
    currentTest.questions.forEach((question, index) => {
        const isAnswered = userAnswers[index] !== null;
        const selectedValue = userAnswers[index];
        
        html += `
            <div class="question-card ${isAnswered ? 'answered' : ''}" data-question="${index}" id="question-${index}">
                <span class="question-number">Вопрос ${index + 1}</span>
                <div class="question-text">${question.text}</div>
                <div class="options-grid">
        `;
        
        question.options.forEach((option, optIndex) => {
            const isSelected = selectedValue === option.value;
            const letter = String.fromCharCode(65 + optIndex);
            
            html += `
                <label class="option-card">
                    <input type="radio" 
                           name="q${index}" 
                           value="${option.value}"
                           ${isSelected ? 'checked' : ''}
                           onchange="saveAnswer(${index}, ${option.value})">
                    <div class="option-content">
                        <span class="option-marker">
                            <i class="fas fa-check"></i>
                        </span>
                        <span class="option-text">
                            <strong>${letter}.</strong> ${option.text}
                        </span>
                    </div>
                </label>
            `;
        });
        
        html += '</div></div>';
    });
    
    html += `
        <div class="question-navigation">
            <button class="nav-btn" onclick="navigateQuestion('prev')" id="prev-btn" ${currentQuestionIndex <= 0 ? 'disabled' : ''}>
                <i class="fas fa-arrow-left"></i> Назад
            </button>
            <button class="nav-btn" onclick="navigateQuestion('next')" id="next-btn" ${currentQuestionIndex >= totalQuestions - 1 ? 'disabled' : ''}>
                Вперед <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
    
    html += '<div class="answers-indicator" id="answers-indicator">';
    for (let i = 0; i < totalQuestions; i++) {
        const isAnswered = userAnswers[i] !== null;
        const isCurrent = i === currentQuestionIndex;
        html += `
            <div class="answer-dot ${isAnswered ? 'answered' : ''} ${isCurrent ? 'current' : ''}" 
                 onclick="jumpToQuestion(${i})">
                ${i + 1}
            </div>
        `;
    }
    html += '</div>';
    
    const isAllAnswered = answeredCount === totalQuestions;
    html += `
        <button class="submit-test" onclick="calculateResult()" id="submit-test" ${!isAllAnswered ? 'disabled' : ''}>
            <span>Получить результаты</span>
            <i class="fas fa-arrow-right"></i>
        </button>
    </div>`;
    
    container.innerHTML = html;
    
    // Прокрутка к текущему вопросу
    setTimeout(() => {
        const currentCard = document.getElementById(`question-${currentQuestionIndex}`);
        if (currentCard) {
            currentCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, 100);
}

// Сохранение ответа
window.saveAnswer = function(questionIndex, value) {
    userAnswers[questionIndex] = value;
    
    // Визуальная обратная связь
    const selectedOption = document.querySelector(`input[name="q${questionIndex}"][value="${value}"]`);
    if (selectedOption) {
        const optionCard = selectedOption.closest('.option-card');
        if (optionCard) {
            optionCard.style.transform = 'scale(0.98)';
            setTimeout(() => {
                optionCard.style.transform = '';
            }, 100);
        }
    }
    
    // Обновляем отображение
    updateUIState();
    
    // Задержка перед переходом
    const NAVIGATION_DELAY = 800;
    
    if (questionIndex === currentQuestionIndex && 
        currentQuestionIndex < currentTest.questions.length - 1) {
        
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.style.background = 'var(--gradient)';
            nextBtn.style.color = 'white';
            nextBtn.style.animation = 'pulse 1s infinite';
        }
        
        setTimeout(() => {
            currentQuestionIndex++;
            
            // Обновляем все элементы
            document.getElementById('current-question-num').textContent = currentQuestionIndex + 1;
            
            // Обновляем классы вопросов
            document.querySelectorAll('.question-card').forEach((card, index) => {
                if (userAnswers[index] !== null) {
                    card.classList.add('answered');
                }
            });
            
            // Обновляем индикаторы
            document.querySelectorAll('.answer-dot').forEach((dot, index) => {
                dot.classList.toggle('answered', userAnswers[index] !== null);
                dot.classList.toggle('current', index === currentQuestionIndex);
            });
            
            // Обновляем кнопки навигации
            document.getElementById('prev-btn').disabled = currentQuestionIndex <= 0;
            document.getElementById('next-btn').disabled = currentQuestionIndex >= currentTest.questions.length - 1;
            
            // Прокрутка к текущему вопросу
            const currentCard = document.getElementById(`question-${currentQuestionIndex}`);
            if (currentCard) {
                currentCard.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
            
            if (nextBtn) {
                nextBtn.style.background = '';
                nextBtn.style.color = '';
                nextBtn.style.animation = '';
            }
        }, NAVIGATION_DELAY);
    }
}

// Обновление UI
function updateUIState() {
    const totalQuestions = currentTest.questions.length;
    const answeredCount = userAnswers.filter(a => a !== null).length;
    const progress = (answeredCount / totalQuestions) * 100;
    
    // Обновляем счетчики
    const currentNumEl = document.getElementById('current-question-num');
    if (currentNumEl) currentNumEl.textContent = currentQuestionIndex + 1;
    
    const answeredCountEl = document.getElementById('answered-count');
    if (answeredCountEl) answeredCountEl.textContent = answeredCount;
    
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) progressFill.style.width = progress + '%';
    
    // Обновляем классы вопросов
    document.querySelectorAll('.question-card').forEach((card, index) => {
        card.classList.toggle('answered', userAnswers[index] !== null);
    });
    
    // Обновляем индикаторы
    document.querySelectorAll('.answer-dot').forEach((dot, index) => {
        dot.classList.toggle('answered', userAnswers[index] !== null);
        dot.classList.toggle('current', index === currentQuestionIndex);
    });
    
    // Обновляем кнопки навигации
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-test');
    
    if (prevBtn) prevBtn.disabled = currentQuestionIndex <= 0;
    if (nextBtn) nextBtn.disabled = currentQuestionIndex >= totalQuestions - 1;
    if (submitBtn) submitBtn.disabled = answeredCount !== totalQuestions;
}

// Навигация
window.navigateQuestion = function(direction) {
    if (direction === 'prev' && currentQuestionIndex > 0) {
        currentQuestionIndex--;
    } else if (direction === 'next' && currentQuestionIndex < currentTest.questions.length - 1) {
        currentQuestionIndex++;
    }
    
    // Обновляем отображение
    updateUIState();
    
    // Прокрутка
    const currentCard = document.getElementById(`question-${currentQuestionIndex}`);
    if (currentCard) {
        currentCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Прыжок к вопросу
window.jumpToQuestion = function(index) {
    if (index >= 0 && index < currentTest.questions.length) {
        currentQuestionIndex = index;
        updateUIState();
        
        const targetCard = document.getElementById(`question-${index}`);
        if (targetCard) {
            targetCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
}

// Расчет результата
window.calculateResult = function() {
    const totalScore = userAnswers.reduce((sum, value) => sum + value, 0);
    
    const result = currentTest.results.find(r => 
        totalScore >= r.min && totalScore <= r.max
    );
    
    showResult(result);
}

// Показ результата
function showResult(result) {
    document.getElementById('testModal').style.display = 'none';
    
    const container = document.getElementById('resultContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="result-content">
            <div class="result-icon">${result.icon}</div>
            <h3 class="result-title">${result.title}</h3>
            <p class="result-description">${result.description}</p>
            <div class="recommendations">
                <h4>Рекомендации:</h4>
                <ul>
                    ${result.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            </div>
            <button class="submit-test" onclick="closeResultAndRestart()" style="margin-top: 2rem;">
                Пройти другой тест
            </button>
        </div>
    `;
    
    document.getElementById('resultModal').style.display = 'block';
}

// Закрытие результатов
window.closeResultAndRestart = function() {
    document.getElementById('resultModal').style.display = 'none';
    document.body.style.overflow = '';
    document.getElementById('tests').scrollIntoView({ behavior: 'smooth' });
}

// Переключение темы
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        if (document.body.hasAttribute('data-theme')) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
}

// Мобильное меню
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Закрытие при клике на ссылку
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Закрытие при изменении размера окна
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Модальные окна
function initModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    loadTests();
    initTheme();
    initMobileMenu();
    initModals();
});
