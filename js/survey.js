let currentIndex = 0;
let answers = JSON.parse(localStorage.getItem("surveyAnswers")) || {};

const card = document.getElementById("surveyCard");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

renderQuestion();

function renderQuestion() {
  const q = surveyQuestions[currentIndex];

  counter.textContent = `${currentIndex + 1}/${surveyQuestions.length}`;

  card.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options.map((opt, i) => `
      <label class="option">
        <input type="radio" name="answer" value="${opt}"
          ${answers[q.id] === opt ? "checked" : ""}>
        ${opt}
      </label>
    `).join("")}
  `;

  warning.style.display = "none";

  nextBtn.innerHTML = currentIndex === surveyQuestions.length - 1
    ? "Конец"
    : `<img src="assets/icons/arrow-right.svg">`;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector("input[name='answer']:checked");
  const q = surveyQuestions[currentIndex];

  if (!selected) {
    warning.style.display = "block";
    return;
  }

  answers[q.id] = selected.value;
  localStorage.setItem("surveyAnswers", JSON.stringify(answers));

  if (currentIndex === surveyQuestions.length - 1) {
    // сегодняшняя дата
    const today = new Date().toLocaleDateString("ru-RU");

    // фейковые данные (имитация backend)
    const newSurvey = {
      date: today,
      summary: [
        "Жирная кожа головы",
        "Сухие кончики",
        "Окрашенные"
      ]
    };

    // получаем существующие опросы или пустой массив
    const surveys = JSON.parse(localStorage.getItem("surveys")) || [];

    // добавляем новый
    surveys.push(newSurvey);

    // сохраняем обратно
    localStorage.setItem("surveys", JSON.stringify(surveys));

    // очищаем временные ответы
    localStorage.removeItem("surveyAnswers");

    // переход на страницу результатов
    window.location.href = "results.html";
  } else {
    currentIndex++;
    renderQuestion();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});