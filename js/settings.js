// ---------- Получаем пользователя ----------
const user = JSON.parse(localStorage.getItem("user")) || {
  name: "",
  email: "",
  password: ""
};

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// ---------- Заполняем поля ----------
nameInput.value = user.name || "";
emailInput.value = user.email || "";

// ---------- Сохранение ----------
document.getElementById("settingsForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // проверка обязательных полей
  if (!name || !email) {
    alert("Заполните имя и email");
    return;
  }

  // проверка пароля ТОЛЬКО если он введён
  if (password && password.length < 8) {
    alert("Пароль должен быть минимум 8 символов");
    return;
  }

  const updatedUser = {
    name,
    email,
    password: password ? password : user.password
  };

  localStorage.setItem("user", JSON.stringify(updatedUser));

  window.location.href = "account.html";
});

// ---------- Отмена ----------
document.getElementById("cancelBtn").addEventListener("click", () => {
  window.location.href = "account.html";
});