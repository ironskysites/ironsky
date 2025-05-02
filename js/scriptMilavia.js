const planes = [
    {name: "A-10A", image: "images/testImages/usa/avia/a_10a.png", country: "США"},
    {name: "A-10C", image: "images/testImages/usa/avia/a_10c.png", country: "США"},
    {name: "AV-8B Plus", image: "images/testImages/usa/avia/av_8b_plus.png", country: "США"},
    {name: "F-14B", image: "images/testImages/usa/avia/f_14b.png", country: "США"},
    {name: "F-15A", image: "images/testImages/usa/avia/f_15a.png", country: "США"},
    {name: "F-15C", image: "images/testImages/usa/avia/f_15c_msip2.png", country: "США"},
    {name: "F-15E", image: "images/testImages/usa/avia/f_15e.png", country: "США"},
    {name: "F-16A", image: "images/testImages/usa/avia/f_16a.png", country: "США"},
    {name: "F-16C", image: "images/testImages/usa/avia/f_16c.png", country: "США"},
    {name: "F-111A", image: "images/testImages/usa/avia/f_111a.png", country: "США"},
    {name: "F-111F", image: "images/testImages/usa/avia/f_111f.png", country: "США"},
    {name: "F-4C", image: "images/testImages/usa/avia/f-4c.png", country: "США"},
    {name: "F-4E", image: "images/testImages/usa/avia/f-4e.png", country: "США"},
    {name: "F-4J", image: "images/testImages/usa/avia/f-4j.png", country: "США"},
    {name: "F/A-18A", image: "images/testImages/usa/avia/fa_18a.png", country: "США"},
    {name: "F/A-18C", image: "images/testImages/usa/avia/fa_18c.png", country: "США"},

    {name: "Alpha Jet A", image: "images/testImages/germ/avia/alpha_jet_a.png", country: "Германия"},
    {name: "EF-2000", image: "images/testImages/germ/avia/ef_2000.png", country: "Германия"},
    {name: "F-4F KWS LV", image: "images/testImages/germ/avia/f-4f_kws_lv.png", country: "Германия"},
    {name: "F-104G", image: "images/testImages/germ/avia/f-104g.png", country: "Германия"},
    {name: "Hunter F.58", image: "images/testImages/germ/avia/hunter_f58.png", country: "Германия"},
    {name: "MiG-23MLA", image: "images/testImages/germ/avia/mig_23mla.png", country: "Германия"},
    {name: "MiG-29G", image: "images/testImages/germ/avia/mig_29g.png", country: "Германия"},
    {name: "MiG-29 (Germany)", image: "images/testImages/germ/avia/mig_29germ.png", country: "Германия"},
    {name: "Su-22M4 (Germany)", image: "images/testImages/germ/avia/su_22m4.png", country: "Германия"},
    {name: "Su-22UM3K", image: "images/testImages/germ/avia/su_22um3k.png", country: "Германия"},
    {name: "Tornado IDS ASSTA1", image: "images/testImages/germ/avia/tornado_ids.png", country: "Германия"},

    {name: "MiG-23M", image: "images/testImages/sssr/avia/mig_23m.png", country: "СССР"},
    {name: "MiG-23MLD", image: "images/testImages/sssr/avia/mig_23mld.png", country: "СССР"},
    {name: "MiG-27K", image: "images/testImages/sssr/avia/mig_27k.png", country: "СССР"},
    {name: "MiG-27M", image: "images/testImages/sssr/avia/mig_27m.png", country: "СССР"},
    {name: "MiG-29", image: "images/testImages/sssr/avia/mig_29.png", country: "СССР"},
    {name: "MiG-29SMT", image: "images/testImages/sssr/avia/mig_29smt.png", country: "СССР"},
    {name: "MiG-21SMT", image: "images/testImages/sssr/avia/mig-21_smt.png", country: "СССР"},
    {name: "Su-17M2", image: "images/testImages/sssr/avia/su_17m2.png", country: "СССР"},
    {name: "Su-17M4", image: "images/testImages/sssr/avia/su_17m4.png", country: "СССР"},
    {name: "Su-24M", image: "images/testImages/sssr/avia/su_24m.png", country: "СССР"},
    {name: "Su-25", image: "images/testImages/sssr/avia/su_25.png", country: "СССР"},
    {name: "Su-25T", image: "images/testImages/sssr/avia/su_25t.png", country: "СССР"},
    {name: "Su-25SM3", image: "images/testImages/sssr/avia/su_25sm3.png", country: "СССР"},
    {name: "Su-27", image: "images/testImages/sssr/avia/su_27.png", country: "СССР"},
    {name: "Su-27SM", image: "images/testImages/sssr/avia/su_27sm.png", country: "СССР"},
    {name: "Su-30SM", image: "images/testImages/sssr/avia/su_30sm.png", country: "СССР"},
    {name: "Su-34", image: "images/testImages/sssr/avia/su_34.png", country: "СССР"},
    {name: "Su-7B", image: "images/testImages/sssr/avia/su-7b.png", country: "СССР"},
    {name: "Su-7BKL", image: "images/testImages/sssr/avia/su-7bkl.png", country: "СССР"},
    {name: "Yak-141", image: "images/testImages/sssr/avia/yak_141.png", country: "СССР"},
    {name: "Yak-28B", image: "images/testImages/sssr/avia/yak-28b.png", country: "СССР"},
    {name: "Yak-38M", image: "images/testImages/sssr/avia/yak-38m.png", country: "СССР"},

    {name: "Typhoon FGR.4", image: "images/testImages/eng/avia/typhoon_fgr4.png", country: "Великобритания"},
    {name: "JAS39C (UK)", image: "images/testImages/eng/avia/.png", country: "Великобритания"},
    {name: "Sea Harrier FRS.1 (e)", image: "images/testImages/eng/avia/harrier_frs1.png", country: "Великобритания"},
    {name: "Sea Harrier FA 2", image: "images/testImages/eng/avia/sea_harrier_fa2.png", country: "Великобритания"},
    {name: "Tornado F.3 Late", image: "images/testImages/eng/avia/tornado_f3_late.png", country: "Великобритания"},
    {name: "Tornado F.3", image: "images/testImages/eng/avia/tornado_f3.png", country: "Великобритания"},
    {name: "Tornado GR.4", image: "images/testImages/eng/avia/tornado_gr4.png", country: "Великобритания"},

    {name: "F-15J(M)", image: "images/testImages/jp/avia/f_15j_m.png", country: "Япония"},
    {name: "F-15J", image: "images/testImages/jp/avia/f_15j.png", country: "Япония"},
    {name: "F-16A OCU", image: "images/testImages/jp/avia/f_16a_ocu.png", country: "Япония"},
    {name: "F-16AJ", image: "images/testImages/jp/avia/f_16aj.png", country: "Япония"},
    {name: "F-4EJ ADTW", image: "images/testImages/jp/avia/f-4ej_adtw.png", country: "Япония"},
    {name: "F-4EJ", image: "images/testImages/jp/avia/f-4ej.png", country: "Япония"},
    {name: "F-5E FCU", image: "images/testImages/jp/avia/f-5e_fcu_jp.png", country: "Япония"},
    {name: "JAS39C (Japan)", image: "images/testImages/jp/avia/jas39c_jp.png", country: "Япония"},
    {name: "Ki-200", image: "images/testImages/jp/avia/ki-200.png", country: "Япония"},
    {name: "Kikka", image: "images/testImages/jp/avia/kikka.png", country: "Япония"},

    {name: "F-15A Baz", image: "images/testImages/isr/avia/f_15a_baz.png", country: "Израиль"},
    {name: "F-15C Baz Meshupar", image: "images/testImages/isr/avia/f_15c_baz.png", country: "Израиль"},
    {name: "F-16C Barak II", image: "images/testImages/isr/avia/f_16c_barak.png", country: "Израиль"},
    {name: "F-16D Barak II", image: "images/testImages/isr/avia/f_16d_barak.png", country: "Израиль"},
    {name: "Kfir C.7", image: "images/testImages/isr/avia/kfir_c7.png", country: "Израиль"},
    {name: "F-4E Kurnass 2000", image: "images/testImages/isr/avia/kurnass_2000.png", country: "Израиль"},
    {name: "Nesher", image: "images/testImages/isr/avia/nesher.png", country: "Израиль"},
    {name: "F-16A Netz", image: "images/testImages/isr/avia/netz.png", country: "Израиль"},
    {name: "Shahak", image: "images/testImages/isr/avia/shahak.png", country: "Израиль"},


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

function getSimilarOptions(allPlanes, correctPlane, count = 3) {
    const name = correctPlane.name;

    const baseMatch = name.match(/^([A-Za-zА-Яа-яёЁ0-9\-]+)(\s|\(|$)/);
    const baseName = baseMatch ? baseMatch[1] : name;

    const similar = allPlanes.filter(p => 
        p.name !== correctPlane.name &&
        (p.name.includes(baseName) || correctPlane.name.includes(p.name))
    );

    let options = similar;
    if (options.length < count) {
        const sameCountry = allPlanes.filter(p => 
            p.name !== correctPlane.name &&
            p.country === correctPlane.country &&
            !options.includes(p)
        );
        options = [...options, ...shuffle(sameCountry)].slice(0, count);
    } else {
        options = shuffle(options).slice(0, count);
    }

    return options;
}


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
        const similarOptions = getSimilarOptions(selectedPlanes, correctPlane, 3);
        const options = shuffle([correctPlane, ...similarOptions]);

        options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.name;
            button.onclick = () => checkAnswer(button, option.name);
            optionsDiv.appendChild(button);
        });
    } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Введите название техники';
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
            <h2 style="margin-top: 15px;">Тест завершён!</h2>
            <p style="margin-top: 15px;">Ваш счёт: ${score}</p>
            <p style="margin-top: 15px;">Время прохождения: ${totalTime} секунд</p>
            <button onclick="restartQuiz()" style="font-size: 20px; margin-top: 25px; width: 50vw; height: 6vh; border-radius: 7px; cursor: pointer; border: 1px solid black; background-color: rgba(0, 0, 0, 0.425); color: white;">
                Пройти снова
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