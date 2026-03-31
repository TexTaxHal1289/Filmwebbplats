// LOGIN
const loginbtn = document.getElementById("loginbtn");

loginbtn.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.getElementById("movieList").style.display = "grid";
    } else {
        alert("Fel användarnamn eller lösenord");
    }
});


// DATA (Movies)
const Filmer = [
    {
        id: "1",
        title: "Stickyman - far from island",
        year: 2067,
        genre: "Island, epstein, romance",
        rating: 9.9,
        img: ""
    },
    {
        id: "2",
        title: "The Incredible Bulk",
        year: 1867,
        genre: "Fitness, goon",
        rating: 9.2,
        img: "Img/Incredible.webp"
    },
    {
        id: "3",
        title: "Frying nemo",
        year: 2008,
        genre: "Adventure, sexually explicit, fish gone wrong",
        rating: 8.9,
        img: "img/FryingNemo.png"
    },
    {
        id: "4",
        title: "The lubricator",
        year: 1994,
        genre: "Horror, rapeing, lube",
        rating: 6.7,
        img: "Img/Lubricator.png"
    },
    {
        id: "5",
        title: "Five Nights at Diddy's",
        year: 2023,
        genre: "Horror, babyoil",
        rating: 5.4,
        img: "Img/bild.jpg"
    }
];


// ELEMENTS
const movieList = document.getElementById("movieList");
const gallery = document.getElementById("gallery");
const detail = document.getElementById("detail");


// SHOW DETAIL PAGE
function showDetail(item) {
    movieList.style.display = "none";
    gallery.style.display = "none";
    detail.innerHTML = "";

    const box = document.createElement("div");
    box.className = "content-box";

    box.innerHTML = `
        <h1>${item.title}</h1>
        <img src="${item.img}">
        <p><strong>${item.year}</strong></p>
        <p>${item.genre}</p>
        <p>⭐ Rating: ${item.rating}</p>
    `;

    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    backBtn.className = "btn";

    backBtn.addEventListener("click", goBack);

    box.appendChild(backBtn);
    detail.appendChild(box);

    detail.style.display = "block";
}


// BACK BUTTON
function goBack() {
    detail.style.display = "none";
    detail.innerHTML = "";
    movieList.style.display = "grid";
}


// CREATE MOVIES
Filmer.forEach(function(movie) {
    const div = document.createElement("div");

    div.textContent = `${movie.title} (${movie.year})`;

    div.addEventListener("click", function() {
        showDetail(movie);
    });

    movieList.appendChild(div);
});