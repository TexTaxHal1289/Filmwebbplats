window.addEventListener("load", function() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "../index.html"; // 🔒 skickar tillbaka om ej inloggad
    }});

    const reviewContainer = document.getElementById("reviewHistory");

    let reviews= JSON.parse(localStorage.getItem("reviews")) || [];

    if (reviews.length === 0) {
        reviewContainer.innerHTML="<p>Inga sparade reviews ännu</p>"
    } else {
        reviews.forEach(function(review) {
            const div = document.createElement("div");
            div.className ="review-card";

            div.innerHTML =  `
            <h3>${review.movieTitle}</h3>
            <p>⭐${review.rating}/10</p>
            <p>${review.text}</p>

            `;

            reviewContainer.appendChild(div);
        });
    }

    const clearBtn = document.getElementById("clearReviews");
                 clearBtn.addEventListener ("click", function() {
                
                 localStorage.removeItem("reviews");

                 document.getElementById("reviewHistory").innerHTML =
                 "<p>Alla reviews har raderats.</p>";

                });
    