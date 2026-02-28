const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Заполните все поля");
    return;
  }

  if (password.length < 8) {
    alert("Пароль минимум 8 символов");
    return;
  }

  localStorage.setItem('userData', JSON.stringify({
        name: "banana-mama",
        email: email,
        password: password
    }));

  // Имитируем вход
  console.log("Вход:", { email, password });

  // Переход на страницу подборки
  window.location.href = "results.html";
});