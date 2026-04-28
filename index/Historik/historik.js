window.addEventListener("load", function() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "../index.html"; // 🔒 skickar tillbaka om ej inloggad
    }});
    