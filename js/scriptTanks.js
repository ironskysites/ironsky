const planes = [
    {name: "XM800T", image: "images/testImages/usa/xm800t.png", country: "США"},
    {name: "120S", image: "images/testImages/usa/120s.png", country: "США"},
    {name: "ADATS", image: "images/testImages/usa/adats.png", country: "США"},
    {name: "Cobra-King", image: "images/testImages/usa/cobra-king.png", country: "США"},
    {name: "HSTV-L", image: "images/testImages/usa/hstvl.png", country: "США"},
    {name: "LOSAT", image: "images/testImages/usa/losat.png", country: "США"},
    {name: "M1A1", image: "images/testImages/usa/m1a1.png", country: "США"},
    {name: "M3A1", image: "images/testImages/usa/m3a1.png", country: "США"},
    {name: "M3A3", image: "images/testImages/usa/m3a3.png", country: "США"},
    {name: "M4A1", image: "images/testImages/usa/m4a1.png", country: "США"},
    {name: "M4A2", image: "images/testImages/usa/m4a2.png", country: "США"},
    {name: "M4A3E2", image: "images/testImages/usa/m4a3e2.png", country: "США"},
    {name: "M4T26", image: "images/testImages/usa/m4t26.png", country: "США"},
    {name: "M18", image: "images/testImages/usa/m18.png", country: "США"},
    {name: "M46", image: "images/testImages/usa/m46.png", country: "США"},
    {name: "M50", image: "images/testImages/usa/m50.png", country: "США"},
    {name: "M163", image: "images/testImages/usa/m163.png", country: "США"},
    {name: "M728", image: "images/testImages/usa/m728.png", country: "США"},
    {name: "M1128", image: "images/testImages/usa/m1128.png", country: "США"},
    {name: "T26E5", image: "images/testImages/usa/t26e5.png", country: "США"},
    {name: "T34", image: "images/testImages/usa/t34.png", country: "США"},
    {name: "T92", image: "images/testImages/usa/t92.png", country: "США"},
    {name: "T95", image: "images/testImages/usa/t95.png", country: "США"},
    {name: "T114", image: "images/testImages/usa/t114.png", country: "США"},

    {name: "Tiger II (H)", image: "images/testImages/germ/tigerIIH.png", country: "Германия"},
    {name: "Leopard 2A4", image: "images/testImages/germ/leo2a4.png", country: "Германия"},
    {name: "Leopard 1A5", image: "images/testImages/germ/leo1a5.png", country: "Германия"},
    {name: "Leopard 2A5", image: "images/testImages/germ/leo2a5.png", country: "Германия"},
    {name: "Leopard 2A6", image: "images/testImages/germ/leo2a6.png", country: "Германия"},
    {name: "Leopard 2A7", image: "images/testImages/germ/leo2a7.png", country: "Германия"},
    {name: "Leopard 2K", image: "images/testImages/germ/leo2k.png", country: "Германия"},
    {name: "Leopard PSO", image: "images/testImages/germ/leoPSO.png", country: "Германия"},
    {name: "Leopard PL", image: "images/testImages/germ/leoPL.png", country: "Германия"},
    {name: "TAM", image: "images/testImages/germ/TAM.png", country: "Германия"},
    {name: "T-72M1", image: "images/testImages/germ/t72m1.png", country: "Германия"},
    {name: "TAM 2C", image: "images/testImages/germ/tam2c.png", country: "Германия"},

    {name: "T-90M", image: "images/testImages/sssr/t90m.png", country: "СССР"},
    {name: "T-90A", image: "images/testImages/sssr/t90a.png", country: "СССР"},
    {name: "T-80U", image: "images/testImages/sssr/t80u.png", country: "СССР"},
    {name: "T-80BVM", image: "images/testImages/sssr/t80bvm.png", country: "СССР"},
    {name: "T-80B", image: "images/testImages/sssr/t80b.png", country: "СССР"},
    {name: "T-72B (1989)", image: "images/testImages/sssr/t72b1989.png", country: "СССР"},
    {name: "T-72B3", image: "images/testImages/sssr/t72b3.png", country: "СССР"},
    {name: "T-72B", image: "images/testImages/sssr/t72b.png", country: "СССР"},
    {name: "T-72A", image: "images/testImages/sssr/t72a.png", country: "СССР"},
    {name: "T-64B", image: "images/testImages/sssr/t64B.png", country: "СССР"},
    {name: "T-64A", image: "images/testImages/sssr/t64a.png", country: "СССР"},
    {name: "T-62M1", image: "images/testImages/sssr/t62m1.png", country: "СССР"},
    {name: "T-62", image: "images/testImages/sssr/t62.png", country: "СССР"},
    {name: "Object 775", image: "images/testImages/sssr/ob775.png", country: "СССР"},
    {name: "Object 292", image: "images/testImages/sssr/ob292.png", country: "СССР"},
    {name: "BMP-3", image: "images/testImages/sssr/bmp3.png", country: "СССР"},
    {name: "2S25M", image: "images/testImages/sssr/2s25m.png", country: "СССР"},

    {name: "Challenger 2", image: "images/testImages/eng/chall_2.png", country: "Великобритания"},
    {name: "Challenger 2BN", image: "images/testImages/eng/chall_2bn.png", country: "Великобритания"},
    {name: "Challenger 2E", image: "images/testImages/eng/chall_2e.png", country: "Великобритания"},
    {name: "Challenger 2F", image: "images/testImages/eng/chall_2f.png", country: "Великобритания"},
    {name: "Challenger 2TES", image: "images/testImages/eng/chall_2tes.png", country: "Великобритания"},
    {name: "Challenger 3TD", image: "images/testImages/eng/chall_3td.png", country: "Великобритания"},
    {name: "Challenger Mk.2", image: "images/testImages/eng/chall_mk_2.png", country: "Великобритания"},
    {name: "Challenger Mk.3", image: "images/testImages/eng/chall_mk_3.png", country: "Великобритания"},
    {name: "Chieftain Mk.10", image: "images/testImages/eng/chief_mk_10.png", country: "Великобритания"},
    {name: "TTD", image: "images/testImages/eng/ttd.png", country: "Великобритания"},
    {name: "VFM5", image: "images/testImages/eng/vfm5.png", country: "Великобритания"},

    {name: "Ho-Ri Production", image: "images/testImages/jp/ho-ri_product.png", country: "Япония"},
    {name: "ICV (P)", image: "images/testImages/jp/icv_p.png", country: "Япония"},
    {name: "TKX (P)", image: "images/testImages/jp/tkx_p.png", country: "Япония"},
    {name: "TKX", image: "images/testImages/jp/tkx.png", country: "Япония"},
    {name: "Type 10", image: "images/testImages/jp/type_10.png", country: "Япония"},
    {name: "Type 16", image: "images/testImages/jp/type_16.png", country: "Япония"},
    {name: "Type 16 (P)", image: "images/testImages/jp/type_16p.png", country: "Япония"},
    {name: "Type 90", image: "images/testImages/jp/type_90.png", country: "Япония"},
    {name: "Type 90B", image: "images/testImages/jp/type_90b.png", country: "Япония"},
    {name: 'Type 90 (B) "Fuji"', image: "images/testImages/jp/type_90b(fuji).png", country: "Япония"},

    {name: "MBT-2000", image: "images/testImages/chi/mbt2000.png", country: "Китай"},
    {name: "VT4A1", image: "images/testImages/chi/vt4a1.png", country: "Китай"},
    {name: "WZ1001(E) LCT", image: "images/testImages/chi/wz_1001e_lct.png", country: "Китай"},
    {name: "ZTZ96A", image: "images/testImages/chi/ztz_96a.png", country: "Китай"},
    {name: "ZTZ99A", image: "images/testImages/chi/ztz_99a.png", country: "Китай"},
    {name: "ZTZ99-II", image: "images/testImages/chi/ztz99-II.png", country: "Китай"},
    {name: "ZTZ99-III", image: "images/testImages/chi/ztz99-III.png", country: "Китай"},

    {name: "Ariete AMV", image: "images/testImages/it/ariete_amv.png", country: "Италия"},
    {name: "Ariete (P)", image: "images/testImages/it/ariete_p.png", country: "Италия"},
    {name: "Ariete PSO", image: "images/testImages/it/ariete_pso.png", country: "Италия"},
    {name: "Ariete", image: "images/testImages/it/ariete.png", country: "Италия"},
    {name: "Centauro I 120", image: "images/testImages/it/centauro_I_120.png", country: "Италия"},
    {name: "Dardo", image: "images/testImages/it/dardo.png", country: "Италия"},
    {name: "Freccia", image: "images/testImages/it/freccia.png", country: "Италия"},

    {name: "Leclerc AZUR", image: "images/testImages/fr/leclerc_azur.png", country: "Франция"},
    {name: "Leclerc SXXI", image: "images/testImages/fr/leclerc_sxxi.png", country: "Франция"},
    {name: "Leclerc", image: "images/testImages/fr/leclerc.png", country: "Франция"},
    {name: "VCC-80/30", image: "images/testImages/fr/vcc-80-30.png", country: "Франция"},
    {name: "Vextra 105", image: "images/testImages/fr/vextra_105.png", country: "Франция"},

    {name: "CV 90 Mk.IV", image: "images/testImages/sw/cv_90_mk4.png", country: "Швеция"},
    {name: "CV 9012", image: "images/testImages/sw/cv_90120.png", country: "Швеция"},
    {name: "ItO 90M", image: "images/testImages/sw/ito_90m.png", country: "Швеция"},
    {name: "Strv 122", image: "images/testImages/sw/strv_122.png", country: "Швеция"},
    {name: "Strv 122B+", image: "images/testImages/sw/strv_122b_plus.png", country: "Швеция"},

    {name: "Giraf", image: "images/testImages/isr/giraf.png", country: "Израиль"},
    {name: "Merkava Mk.1B", image: "images/testImages/isr/merkava_mk_1b.png", country: "Израиль"},
    {name: "Merkava Mk.2B", image: "images/testImages/isr/merkava_mk_2b.png", country: "Израиль"},
    {name: "Merkava Mk.3B", image: "images/testImages/isr/merkava_mk_3b.png", country: "Израиль"},
    {name: "Merkava Mk.4M", image: "images/testImages/isr/merkava_mk_4m.png", country: "Израиль"},
    {name: "Namer 30", image: "images/testImages/isr/namer_30.png", country: "Израиль"},
    {name: "Namer Tsrikhon", image: "images/testImages/isr/namer_tsrikhon.png", country: "Израиль"},
    {name: "Sabra Mk.I", image: "images/testImages/isr/sabra_mk1.png", country: "Израиль"},

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
            <h2 style="margin-top: 15px;">Тест завершён!</h2>
            <p style="margin-top: 15px;">Ваш счёт: ${score}</p>
            <p style="margin-top: 15px;">Время прохождения: ${totalTime} секунд</p>
            <button onclick="restartQuiz()" style="font-size: 20px; margin-top: 25px; width: 20vw; height: 6vh; border-radius: 7px; cursor: pointer; border: 1px solid black; background-color: rgba(0, 0, 0, 0.425); color: white;">
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

document.querySelectorAll('.flag-option input[type=checkbox]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        updateFlagVisuals();
        saveSelectedCountries();
    });
});

loadSelectedCountries();
updateFlagVisuals();

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