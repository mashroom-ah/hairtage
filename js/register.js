const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password || !name) {
        alert("Заполните все поля");
        return;
    }

    if (password.length < 8) {
        alert("Пароль минимум 8 символов");
        return;
    }

    localStorage.setItem('user', JSON.stringify({
        name: name,
        email: email,
        password: password
    }));

    // Имитируем регистрацию
    console.log("Регистрация:", { name, email, password });

    const surveys = JSON.parse(localStorage.getItem("surveys")) || [];

    if (!Array.isArray(surveys) || surveys.length === 0) {
        window.location.href = "account.html";
    }
    else {
        window.location.href = "results.html";
    }
});