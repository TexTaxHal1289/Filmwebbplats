// ELEMENT
const loginbtn = document.getElementById("loginbtn");
const movieList = document.getElementById("movieList");
const gallery = document.getElementById("gallery");
const detail = document.getElementById("detail");
const nav = document.getElementById("nav");

// LOGIN
loginbtn.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedIn", "true");

        document.getElementById("login-section").style.display = "none";
        document.getElementById("content").style.display = "block";
        movieList.style.display = "grid";
        nav.style.display = "flex";
    } else {
        alert("Fel användarnamn eller lösenord");
    }

});


window.addEventListener("load", function () {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn === "true") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("content").style.display = "block";
        movieList.style.display = "grid";
        nav.style.display = "flex";
    }

    //logga ut
    
    document.getElementById("logoutbtn").addEventListener("click", function () {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";
        
    });
});

// DATA (Movies)
const Filmer = [
    {
        id: "1",
        title: "Stickyman - Far From Island",
        year: 2067,
        genre: "Island, romance",
        rating: 9.9,
        img: "Img/Stickyman.jpg",
        description: "En episk kärlekshistoria mellan Stickyman och en mystisk ö, där de måste övervinna faror och utmaningar för att vara tillsammans."
    },
    {
        id: "2",
        title: "The Incredible Bulk",
        year: 1867,
        genre: "Fitness",
        rating: 9.2,
        img: "Img/Incredible.webp",
        description: "En actionfylld film som följer en vetenskapsman som genom en olycka förvandlastill en enorm stor grön man. Han måste lära sig att kontrollera sin nya kraft och använda den för att käka mat och bekämpa brott och rädda världen från en ond skurk som försöker äta upp planeten."
    },
    {
        id: "3",
        title: "Frying Nemo",
        year: 2008,
        genre: "Adventure",
        rating: 8.9,
        img: "Img/FryingNemo.png",
        description: "En spännande äventyrsfilm som följer en liten fisk vid namn Nemo, som blir fångad av en girig kock och hamnar i en stekpanna, där han måste använda sin list och mod för att överleva och hitta vägen tillbaka till havet."
    },
    {
        id: "4",
        title: "The Lubricator",
        year: 1994,
        genre: "Horror",
        rating: 6.7,
        img: "Img/Lubricator.png",
        description: "En skrämmande historia om en mystisk maskin som kan smörja allt den rör vid, men som också har en mörk hemlighet som hotar att förstöra världen."
    },
    {
        id: "5",
        title: "Five Nights at Diddy's",
        year: 2023,
        genre: "Horror",
        rating: 5.4,
        img: "Img/bild.jpg",
        description: "En skräckfilm som utspelar sig på en nedlagd nöjespark där besökarna blir jagade av flera olika Barnälskare, där en mörk hemlighet ligger bakom deras agerande, och hur de ska lösa denna hemlighet."
    },
    {
        id: "6",
        title: "The Last Goon",
        year: 2193,
        genre: "Adventure",
        rating: 9.5,
        img: "Img/Lastgoon.webp",
        description: "En spännande äventyrsfilm som följer den sista överlevande medlemmen av en mäktig maffiafamilj, när han navigerar genom en farlig värld av rivaliserande gäng och korrupta myndigheter för att hämnas sin familj och återställa sin ära."
    },
    {
        id: "7",
        title: "The Goonfather",
        year: 1972,
        genre: "Crime",
        rating: 7.6,
        img: "Img/Goonfather.jpg",
        description: "En episk kriminaldrama som följer en mäktig maffiafamilj genom flera generationer, där lojalitet, makt och svek är centrala teman."

    },
    {
        id: "8",
        title: "JFK Colorized",
        year: 2020,
        genre: "History",
        rating: 8.3,
        img: "Img/Jfk.jpg",
        description: "En dokumentär som utforskar den kontroversiella teorin om att John F. Kennedy inte mördades, utan istället kidnappades av utomjordingar och ersattes med en klon, och hur denna teori har påverkat historien och samhället."
    },
    {
        id: "9",
        title: "Long Schlong",
        year: 2024,
        genre: "Dogshit",
        rating: 4.2,
        img: "Img/Longsch.jpg",
        description: "en dokumentär som utforskar den ökande trenden av överdrivna och orealistiska förväntningar på manlig anatomi, och hur detta påverkar självkänslan och relationer i samhället."
    },
    {
        id: "10",
        title: "The Towers Incident",
        year: 2001,
        genre: "horror" + "terrorism",
        rating: 7.8,
        img: "Img/Towers.jpg",
        description: "En actionfylld thriller som följer en grupp överlevande under en terroristattack mot två ikoniska skyskrapor, där de måste samarbeta för att överleva och avslöja sanningen bakom attacken."
    },
    {
        id: "11",
        title: "baking bread",
        year: 2009,
        genre: "bread" + "baking",
        rating: 6.9,
        img: "Img/BakingBread.png",
        description: "En gammal man som bakar bröd för att tjäna pengar för sin familj vilket leder att han blir spårad av brödpolisen"
    },
    {
        id: "11",
        title: "Assper the oiled",
        year: 2016,
        genre: "oil",
        rating: 1.3,
        img: "Img/Assper.png",
        description: "en pedofil som blev överkörd av en bil jagar nu småbarn i sin spökform för att få möjligheten att smörja dem med massa babyoil"
    },
    {
        id: "12",
        title: "The charlie kirk theory",
        year: 2024,
        genre: "Kirking it",
        rating: 5.0,
        img: "Img/Charliehorror.jpg",
        description: "En dokumentär som utforskar den kontroversiella teorin om att Charlie Kirk är en ondskefull varelse som manipulerar människor för att sprida hat och förvirring, och hur denna teori har påverkat samhället och politiken."
    },
    {
        id: "13",
        title: "Thipderman",
        year: 2023,
        genre: "superhero",
        rating: 2.5,
        img: "Img/THPIDERMAN.jpg",
        description: "En actionfylld superhjältefilm som följer autistisk man som får spindel krafter och måste lära sig att kontrollera sina nya förmågor samtidigt som han bekämpar sin egen idioti medan en ond skurk försöker goona sönder hela hans familj och vänner."
    },
    {
        id: "14",
        title: "DISCORD: The Movie",
        year: 2022,
        genre: "Linus",
        rating: 3.4,
        img: "Img/DISCORD.jpg",
        description: "En komedifilm som följer en grupp vänner som spenderar all sin tid på Discord, där de hamnar i en serie galna och absurda äventyr när de försöker navigera genom den digitala världen och hantera fienden job applikation som ständigt försöker sabotera deras online-liv."
    },
    {
        id: "15",
        title: "Rise of the PP",
        year: 2025,
        genre: "PP",
        rating: 6.1,
        img: "Img/Riseofthe.webp",
        description: "En dokumentär som utforskar den ökande trenden   av överdrivna apor och orealistiska förväntningar på manlig anatomi, och hur detta påverkar samhället."
    },
    {
        id: "16",
        title: "down", 
        year: 2024,
        genre: "House",
        rating: 5.5,
        img: "Img/Down.jpg",
        description: "En dramatisk film som följer en grupp människor som kämpar för att överleva i en svår situation, där de måste ta svåra beslut och lär sig om hus, djur och fallande hus."
    },
    {
        id: "17",
        title: "JOHN THICC",
        year: 2023,
        genre: "Thicc",
        rating: 9.0,
        img: "Img/John.webp",
        description: "En actionfylld film som följer en man som tränar sin rumpa till att bli så tjock att den kan användas som ett vapen, och hur han måste använda sin nya förmåga för att bekämpa brott och rädda världen från alla onda rumpor som hotar att ta över världen."
     },
     {
        id: "18",
        title: "The Edibles",
        year: 2024,
        genre: "Comedy",
        rating: 7.2,
        img: "Img/Edibles.webp",
        description: "En komedifilm som följer en familj som har superkrafter men de är alla väldigt stora och klumpiga, och hur de måste lära sig att hantera sina krafter samtidigt som de försöker leva ett normalt liv och försöker gå ner i vikt men det går ej så bra."
     },
     {
        id: "19",
        title: "Breathe 2",
        year: 2184,
        genre: "Sci-Fi",
        rating: 8.5,
        img: "Img/Breathe2.jpg",
        description: "En science fiction-film som följer en man och en polis som ständigt försöker få varandra att sluta andas."
     },
     {
        id: "20",
        title: "findingosama",
        year: 2024,
        genre: "Documentary",
        rating: 6.7,
        img: "Img/FindingOsama.jpg",
        description: "En dokumentär som följer en grupp människor som försöker hitta en mysteriös person i en exotisk värld."
     },
     {
        id: "21",
        title: "Five Nights at Diddy's 2",
        year: 2025,
        genre: "Horror",
        rating: 4.8,
        img: "Img/Fivenights2.jpg",
        description: "En skräckfilm som utspelar sig på en nedlagd nöjespark där besökarna blir jagade av animatroniska figurer som har blivit besatta av onda andar, och där en grupp ungdomar måste överleva natten för att avslöja parkens mörka hemligheter."
     },
     {
        id: "22",
        title: "Slow and curious",
        year: 2024,
        genre: "Comedy",
        rating: 7.0,
        img: "Img/SlowCurious.jpg",
        description: "En komedifilm som följer två personer som är väldigt långsamma och nyfikna, och hur de hamnar i en serie galna och absurda äventyr när de försöker navigera genom livet och hantera alla utmaningar som kommer i deras väg, och hur de ska använda sina bilars autopilot för att ta sig fram i världen."
     },
     {
        id: "23",
        title: "Klux",
        year: 2024,
        genre: "Horror",
        rating: 3.2,
        img: "Img/Klux.jpg",
        description: "Ngl vete fan om denna film är en skräckfilm eller en dokumentär hahaha lmao"
     }


];

// SHOW DETAIL PAGE
function showDetail(item) {
    movieList.style.display = "none";
    gallery.style.display = "none";
    detail.innerHTML = "";

    const box = document.createElement("div");
    box.className = "content-box";

    box.innerHTML = `
    <h1>${item.title}</h1>
    <img src="${item.img}" alt="${item.title}">
    <p><strong>Genre:</strong> ${item.genre}</p>
    <p><strong>${item.year}</strong></p>
    <p>⭐ Rating: ${item.rating}</p>
   
    <button id="toggleDesc" class="btn">Visa beskrivning</button>

<p id="descText" style="font-size: 28px; display:none;">
    ${item.description || "No description available."}
</p>

    <h3>Lämna en review</h3>
    <input id="ratingInput" type="number" min="1" max="10" placeholder="Rating (1-10)">
    <textarea id="reviewInput" placeholder="Skriv din review här..."></textarea>
    <button id="saveReview" class="btn">Send review</button>

    <div id="reviewList"></div>
`;
  
const toggleBtn = box.querySelector("#toggleDesc");
const descText = box.querySelector("#descText");

toggleBtn.addEventListener("click", function () {
    if (descText.style.display === "none") {
        descText.style.display = "block";
        toggleBtn.textContent = "Dölj beskrivning";
    } else {
        descText.style.display = "none";
        toggleBtn.textContent = "Visa beskrivning";
    }
});
   // back knapp
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    backBtn.className = "btn";

    backBtn.addEventListener("click", goBack);

    box.appendChild(backBtn);
    detail.appendChild(box);

    detail.style.display = "flex";

    // SAVE REVIEW
    const saveBtn = box.querySelector("#saveReview");
    const reviewInput = box.querySelector("#reviewInput");
    const ratingInput = box.querySelector("#ratingInput");
    const reviewList = box.querySelector("#reviewList")

    loadReviews();

    saveBtn.addEventListener("click", function () {
        const reviewText = reviewInput.value;
        const rating = ratingInput.value;
        
        if (reviewText==="" || rating ==="") {
            alert("Fyll i review och rating");
            return;
        }
        const review = {
            movieId: item.id,
            movieTitle: item.title,
            text: reviewText,
            rating: rating
        };
        let reviews =JSON.parse(localStorage.getItem("reviews"))  || [];
        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));

        reviewInput.value = "";
        ratingInput.value = "";
        
        loadReviews();

    });

        function loadReviews() {
            let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

            reviewList.innerHTML = "";

            const movieReviews = reviews.filter(r => r.movieId === item.id);
            movieReviews.forEach(function(review) {
                const div = document.createElement("div");
                div.className ="review-card";

                div.innerHTML = `
                <p>⭐${review.rating}/10</p>
                <p>${review.text}</p>
                 `;
                 reviewList.appendChild(div);
            });
        }}
// BACK BUTTON FUNCTION
function goBack() {
    detail.style.display = "none";
    detail.innerHTML = "";
    movieList.style.display = "grid";
}

// CREATE MOVIES
Filmer.forEach(function (movie) {
    const div = document.createElement("div");
    div.className = "movie-card";

    div.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
    `;

    div.addEventListener("click", function () {
        showDetail(movie);
    });

    movieList.appendChild(div);
});
