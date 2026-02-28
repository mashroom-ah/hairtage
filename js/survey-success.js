const loginBtn = document.getElementById("loginBtn");
const resultsBtn = document.getElementById("resultsBtn");
const user = JSON.parse(localStorage.getItem("user")) || {
  name: "",
  email: "",
  password: ""
};

// Вход / регистрация
loginBtn.addEventListener("click", () => {
    if (user.name !=="" && user.password !== "") {
        window.location.href = "results.html";
    }
    window.location.href = "login.html";
});

// Переход к результатам
resultsBtn.addEventListener("click", () => {
    window.location.href = "results.html";
});