/* ================================
   VEYRA MOVIE DATABASE
================================ */

const movies = {

    happy: [
        {
            title: "The Intern",
            year: "2015",
            genre: "Comedy • Drama",
            poster: "https://image.tmdb.org/t/p/w500/9y9yM9R6zG2Z5sYk9c4m3pXzQz.jpg",
            description: "A warm and uplifting story about friendship, work and new beginnings."
        },
        {
            title: "Paddington 2",
            year: "2017",
            genre: "Family • Comedy",
            poster: "https://image.tmdb.org/t/p/w500/1OJ9vkD5x2hZ5N0r1X4v1.jpg",
            description: "A charming adventure filled with kindness, humor and warmth."
        },
        {
            title: "About Time",
            year: "2013",
            genre: "Romance • Comedy",
            poster: "https://image.tmdb.org/t/p/w500/iR1bVfURbN7r1C46oIFd.jpg",
            description: "A beautiful reminder to appreciate the ordinary moments of life."
        }
    ],

    sad: [
        {
            title: "Eternal Sunshine of the Spotless Mind",
            year: "2004",
            genre: "Romance • Drama",
            poster: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5Y.jpg",
            description: "A deeply emotional journey through love, memory and loss."
        },
        {
            title: "The Perks of Being a Wallflower",
            year: "2012",
            genre: "Drama",
            poster: "https://image.tmdb.org/t/p/w500/aKCvdFFF5n80P2O6d.jpg",
            description: "A coming-of-age story about friendship, healing and belonging."
        },
        {
            title: "Her",
            year: "2013",
            genre: "Romance • Sci-Fi",
            poster: "https://image.tmdb.org/t/p/w500/lEIaL12hSkqqe.jpg",
            description: "A quiet and emotional exploration of love and loneliness."
        }
    ],

    romantic: [
        {
            title: "La La Land",
            year: "2016",
            genre: "Romance • Musical",
            poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
            description: "Dreams, music and a love story beneath the Los Angeles lights."
        },
        {
            title: "Before Sunrise",
            year: "1995",
            genre: "Romance • Drama",
            poster: "https://image.tmdb.org/t/p/w500/kf2wONrY5c1.jpg",
            description: "Two strangers meet and spend one unforgettable night together."
        },
        {
            title: "10 Things I Hate About You",
            year: "1999",
            genre: "Romance • Comedy",
            poster: "https://image.tmdb.org/t/p/w500/ujERk3aKABXU.jpg",
            description: "A fun and iconic romantic comedy full of chemistry and charm."
        }
    ],

    chill: [
        {
            title: "Lost in Translation",
            year: "2003",
            genre: "Drama • Romance",
            poster: "https://image.tmdb.org/t/p/w500/wkSzx.jpg",
            description: "A slow, atmospheric story about two strangers finding connection."
        },
        {
            title: "The Secret Life of Walter Mitty",
            year: "2013",
            genre: "Adventure • Comedy",
            poster: "https://image.tmdb.org/t/p/w500/8Qsr8pvDL3s1j3.jpg",
            description: "A beautiful escape into adventure, imagination and self-discovery."
        }
    ],

    excited: [
        {
            title: "Inception",
            year: "2010",
            genre: "Action • Sci-Fi",
            poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            description: "A mind-bending journey through dreams within dreams."
        },
        {
            title: "Mad Max: Fury Road",
            year: "2015",
            genre: "Action • Adventure",
            poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
            description: "A relentless cinematic ride through a post-apocalyptic wasteland."
        }
    ],

    scared: [
        {
            title: "Get Out",
            year: "2017",
            genre: "Horror • Thriller",
            poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhf.jpg",
            description: "A psychological thriller that becomes increasingly unsettling."
        },
        {
            title: "The Conjuring",
            year: "2013",
            genre: "Horror",
            poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxu9k.jpg",
            description: "A chilling supernatural investigation."
        }
    ],

    thoughtful: [
        {
            title: "Interstellar",
            year: "2014",
            genre: "Sci-Fi • Drama",
            poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            description: "An emotional journey through space, time and humanity."
        },
        {
            title: "Arrival",
            year: "2016",
            genre: "Sci-Fi • Drama",
            poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3.jpg",
            description: "A thoughtful exploration of language, time and connection."
        }
    ],

    nostalgic: [
        {
            title: "Stand by Me",
            year: "1986",
            genre: "Adventure • Drama",
            poster: "https://image.tmdb.org/t/p/w500/3j.jpg",
            description: "A nostalgic journey through friendship and childhood."
        },
        {
            title: "The Truman Show",
            year: "1998",
            genre: "Drama • Comedy",
            poster: "https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJ.jpg",
            description: "A timeless story about identity, freedom and discovering reality."
        }
    ]

};


/* ================================
   SELECT MOOD
================================ */

function selectMood(mood) {

    const cards = document.querySelectorAll(".mood-card");

    cards.forEach(card => {
        card.classList.remove("selected");
    });

    event.currentTarget.classList.add("selected");

    const moodNames = {
        happy: "Happy ☀️",
        sad: "Melancholic 🌧️",
        romantic: "Romantic ♡",
        chill: "Chill ☁️",
        excited: "Excited ⚡",
        scared: "Thrilled ◉",
        thoughtful: "Thoughtful ☾",
        nostalgic: "Nostalgic ✦"
    };

    document.getElementById("selectedMood").innerHTML =
        `Because you're feeling <strong>${moodNames[mood]}</strong>`;

    displayMovies(mood);

    document.getElementById("recommendations")
        .scrollIntoView({ behavior: "smooth" });
}


/* ================================
   DISPLAY MOVIES
================================ */

function displayMovies(mood) {

    const grid = document.getElementById("movieGrid");

    grid.innerHTML = "";

    movies[mood].forEach(movie => {

        const card = document.createElement("div");

        card.className = "movie-card";

        card.innerHTML = `

            <img
                class="movie-poster"
                src="${movie.poster}"
                alt="${movie.title}"
                onerror="this.src='https://via.placeholder.com/500x750/151515/d6b574?text=${encodeURIComponent(movie.title)}'"
            >

            <button
                class="favorite"
                onclick="addFavorite('${movie.title}')"
            >
                ♡
            </button>

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <div class="movie-meta">
                    ${movie.year} • ${movie.genre}
                </div>

                <p class="movie-description">
                    ${movie.description}
                </p>

            </div>
        `;

        grid.appendChild(card);
    });
}


/* ================================
   FAVORITES
================================ */

function addFavorite(title) {

    let favorites =
        JSON.parse(localStorage.getItem("veyraFavorites")) || [];

    if (!favorites.includes(title)) {

        favorites.push(title);

        localStorage.setItem(
            "veyraFavorites",
            JSON.stringify(favorites)
        );

        alert(`${title} added to your favorites ♡`);

    } else {

        alert("Already in your favorites.");

    }
}


function showFavorites() {

    const section = document.getElementById("favorites");

    const grid = document.getElementById("favoritesGrid");

    const favorites =
        JSON.parse(localStorage.getItem("veyraFavorites")) || [];

    grid.innerHTML = "";

    if (favorites.length === 0) {

        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">♡</div>
                <h3>No saved movies yet.</h3>
                <p>Save a movie and it will appear here.</p>
            </div>
        `;

    } else {

        favorites.forEach(title => {

            let movie = null;

            for (let mood in movies) {

                const found =
                    movies[mood].find(m => m.title === title);

                if (found) {
                    movie = found;
                    break;
                }

            }

            if (!movie) return;

            grid.innerHTML += `

                <div class="movie-card">

                    <img
                        class="movie-poster"
                        src="${movie.poster}"
                        alt="${movie.title}"
                    >

                    <div class="movie-info">

                        <h3>${movie.title}</h3>

                        <div class="movie-meta">
                            ${movie.year} • ${movie.genre}
                        </div>

                    </div>

                </div>
            `;
        });

    }

    section.scrollIntoView({
        behavior: "smooth"
    });
}


/* ================================
   SCROLL TO MOODS
================================ */

function scrollToMoods() {

    document.getElementById("moods")
        .scrollIntoView({
            behavior: "smooth"
        });

}
