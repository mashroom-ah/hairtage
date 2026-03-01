function goToHome() {
    window.location.href = "index.html";
};
function goToAccount() {
    let user = null;
    try {
        user = JSON.parse(localStorage.getItem("user"));
    } catch (e) {
        user = null;
    }

    // Проверка
    if (user?.name && user?.email) {
        window.location.href = "account.html";
    } else {
        window.location.href = "login.html";
    }
};

function goToResults() {
    const surveys = JSON.parse(localStorage.getItem("surveys")) || [];

    if (!Array.isArray(surveys) || surveys.length === 0) {
        alert("Опрос еще не был пройден");
    }
    else {
        window.location.href = "results.html";
    }
};

function toggleMenu() {
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('.header').classList.toggle('open');
};