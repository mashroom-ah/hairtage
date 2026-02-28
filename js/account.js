/* ---------- Пользователь ---------- */
const user = JSON.parse(localStorage.getItem("user")) || {
  name: "Имя не указано",
  email: "Email не указан"
};

document.getElementById("userName").textContent = user.name;
document.getElementById("userEmail").textContent = user.email;

/* ---------- Опросы ---------- */
const surveys = JSON.parse(localStorage.getItem("surveys")) || [];
let currentIndex = 0;

const card = document.getElementById("surveyCard");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function logout() {
  localStorage.clear();
  window.location.href = 'index.html';
}

function renderSurvey() {
  if (surveys.length === 0) {
    const today = new Date().toLocaleDateString("ru-RU");

    card.innerHTML = `
      <h3>${today}</h3>
      <p>Данных о прохождении опроса нет</p>
      <button class="btn-secondary" onclick="location.href='survey.html'">
      Пройти опрос
    </button>
    `;
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }

  const survey = surveys[currentIndex];

  card.innerHTML = `
    <h3>${survey.date}</h3>
    <ul>
      ${survey.summary.map(item => `<li> ${item}</li>`).join("")}
    </ul>

    <button class="btn-secondary" onclick="location.href='results.html'">
      Посмотреть подбор
    </button>

    <button class="btn-secondary" onclick="location.href='survey.html'">
      Перепройти опрос
    </button>
  `;

  prevBtn.style.display = surveys.length > 1 ? "block" : "none";
  nextBtn.style.display = surveys.length > 1 ? "block" : "none";
}

function goToSettings() {
  window.location.href = 'settings.html';
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + surveys.length) % surveys.length;
  renderSurvey();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % surveys.length;
  renderSurvey();
});

renderSurvey();