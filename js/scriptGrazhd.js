const planes = [
    {name: "Airbus A320", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Airbus A330", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Airbus A350", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Airbus A380", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "ATR 72", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "ATR 42", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Boeing 737", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Boeing 747", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Boeing 757", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Boeing 767", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Boeing 777", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Boeing 787", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "McDonnell Douglas DC-9", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "McDonnell Douglas MD-80", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "McDonnell Douglas MD-11", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Lockheed L-1011 TriStar ", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Convair 880", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Embraer E170", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Embraer E175", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Embraer E190", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Embraer E195", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Embraer E195-E2", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Fokker 50", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Fokker 70", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Fokker 100", image: "./images/testImages/tefal.jpg", country: "США"},
    {name: "Il-62", image: "./images/testImages/tefal.jpg", country: "СССР"},

];

let selectedPlanes = [];
let remainingPlanes = [];
let correctPlane = null;
let score = 0;
let questionsAsked = 0;
let startTime;
let timerInterval;
let difficulty = 'easy';
let hardcoreMode = false;
let questionLimit = 10;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateInfoPanel() {
    const elapsed = Math.floor((new Date() - startTime) / 1000);
    document.getElementById('info-panel').innerHTML = `
        <div style="margin-top: 10vh; font-size: 16px;">
            Время: ${elapsed} сек<br>
        </div>`;
}

function loadQuestion() {
    if (remainingPlanes.length === 0 || (!hardcoreMode && questionsAsked >= questionLimit)) {
        endQuiz();
        return;
    }

    correctPlane = remainingPlanes.shift();
    questionsAsked++;

    document.getElementById('plane-image').src = correctPlane.image;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    if (difficulty === 'easy') {
        const options = shuffle([correctPlane, ...shuffle(selectedPlanes.filter(p => p.name !== correctPlane.name)).slice(0, 3)]);
        options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.name;
            button.onclick = () => checkAnswer(button, option.name);
            optionsDiv.appendChild(button);
        });
    } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Введите название самолета';
        input.onkeydown = (e) => {
            if (e.key === 'Enter') checkInputAnswer(input);
        };
        optionsDiv.appendChild(input);
        input.focus();
    }
}

function checkAnswer(button, selected) {
    if (selected === correctPlane.name) {
        button.classList.add('correct');
        score++;
        setTimeout(loadQuestion, 400);
    } else {
        button.classList.add('incorrect');
        if (hardcoreMode) {
            endQuiz();
        } else {
            setTimeout(loadQuestion, 400);
        }
    }
}

function checkInputAnswer(input) {
    const entered = input.value.trim();
    if (entered.toLowerCase() === correctPlane.name.toLowerCase()) {
        input.style.backgroundColor = '#28a745';
        score++;
        setTimeout(loadQuestion, 400);
    } else {
        input.style.backgroundColor = '#dc3545';
        if (hardcoreMode) {
            endQuiz();
        } else {
            setTimeout(loadQuestion, 400);
        }
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById('info-panel').style.display = 'none';
    const totalTime = Math.floor((new Date() - startTime) / 1000);
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = 
        `<div style="font-size: 20px;">
            <h2 style="margin-top: 15px;">Тест успешно проёбан!</h2>
            <p style="margin-top: 15px;">Ваш IQ: ${score}</p>
            <p style="margin-top: 15px;">Осталось жить: ${totalTime} секунд</p>
            <button onclick="restartQuiz()" style="font-size: 20px; margin-top: 25px; width: 50vw; height: 6vh; border-radius: 7px; cursor: pointer; border: 1px solid black; background-color: rgba(0, 0, 0, 0.425); color: white;">
                Родиться снова
            </button>
        </div>`;
}

function saveSelectedCountries() {
    const selected = Array.from(document.querySelectorAll('.flag-option input[type=checkbox]'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    localStorage.setItem('selectedCountries', JSON.stringify(selected));
}

function loadSelectedCountries() {
    const saved = JSON.parse(localStorage.getItem('selectedCountries'));
    document.querySelectorAll('.flag-option input[type=checkbox]').forEach(checkbox => {
        if (Array.isArray(saved)) {
            checkbox.checked = saved.includes(checkbox.value);
        } else {
            checkbox.checked = true;
        }
    });
}

function updateFlagVisuals() {
    document.querySelectorAll('.flag-option').forEach(label => {
        const checkbox = label.querySelector('input[type=checkbox]');
        const img = label.querySelector('img');
        if (!checkbox.checked) {
            img.classList.add('inactive');
        } else {
            img.classList.remove('inactive');
        }
    });
}

function startQuiz() {
    const selectedCountries = Array.from(document.querySelectorAll('#start-screen input[type=checkbox]:checked')).map(input => input.value);
    if (selectedCountries.length < 2) {
        alert('Выберите минимум две страны.');
        return;
    }

    difficulty = document.getElementById('difficulty').value;
    const questionSetting = document.getElementById('question-count').value;
    hardcoreMode = (questionSetting === 'hardcore');
    questionLimit = hardcoreMode ? Infinity : parseInt(questionSetting);
    questionsAsked = 0;

    selectedPlanes = planes.filter(plane => selectedCountries.includes(plane.country));

    if (selectedPlanes.length < 4) {
        alert('Выберите больше стран или добавьте самолёты. Нужно минимум 4 самолета.');
        return;
    }

    remainingPlanes = shuffle([...selectedPlanes]);
    score = 0;
    startTime = new Date();
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'inline-block';
    loadQuestion();
    timerInterval = setInterval(updateInfoPanel, 1000);
}

function restartQuiz() {
    document.location.reload();
}

// Ждём загрузки DOM перед инициализацией чекбоксов
window.addEventListener('DOMContentLoaded', () => {
    loadSelectedCountries();
    updateFlagVisuals();

    document.querySelectorAll('.flag-option input[type=checkbox]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateFlagVisuals();
            saveSelectedCountries();
        });
    });
});