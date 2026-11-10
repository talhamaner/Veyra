/* ==================================================
   VEYRA
   Mood-Based Movie Recommendation System
   No API Required
================================================== */


/* ==================================================
   MOVIE DATABASE
================================================== */

const movies = [

    {
        id: 1,
        title: "La La Land",
        year: 2016,
        genre: "Romance • Musical • Drama",
        rating: 8.0,
        mood: ["romantic", "happy", "nostalgic"],
        description:
            "Two dreamers chase their ambitions while falling in love in the city of stars.",
        poster:
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 2,
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi • Drama • Adventure",
        rating: 8.7,
        mood: ["thoughtful", "nostalgic", "excited"],
        description:
            "A journey beyond the stars exploring love, time, sacrifice and humanity.",
        poster:
            "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 3,
        title: "The Grand Budapest Hotel",
        year: 2014,
        genre: "Comedy • Adventure",
        rating: 8.1,
        mood: ["happy", "chill", "nostalgic"],
        description:
            "A beautifully eccentric adventure filled with friendship, elegance and chaos.",
        poster:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 4,
        title: "Her",
        year: 2013,
        genre: "Romance • Sci-Fi • Drama",
        rating: 8.0,
        mood: ["sad", "romantic", "thoughtful"],
        description:
            "A lonely writer develops an unexpected relationship with an artificial intelligence.",
        poster:
            "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 5,
        title: "Inception",
        year: 2010,
        genre: "Action • Sci-Fi • Thriller",
        rating: 8.8,
        mood: ["excited", "thoughtful", "thrilled"],
        description:
            "A skilled thief enters the dreams of others in a mind-bending mission.",
        poster:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 6,
        title: "Before Sunrise",
        year: 1995,
        genre: "Romance • Drama",
        rating: 8.1,
        mood: ["romantic", "chill", "nostalgic"],
        description:
            "Two strangers meet on a train and spend one unforgettable night together.",
        poster:
            "https://images.unsplash.com/photo-1518893883800-45cd0954574b?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 7,
        title: "The Secret Life of Walter Mitty",
        year: 2013,
        genre: "Adventure • Comedy • Drama",
        rating: 7.3,
        mood: ["happy", "chill", "thoughtful"],
        description:
            "A quiet man leaves his ordinary life behind and begins an extraordinary adventure.",
        poster:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 8,
        title: "Get Out",
        year: 2017,
        genre: "Horror • Mystery • Thriller",
        rating: 7.8,
        mood: ["thrilled", "thoughtful"],
        description:
            "A weekend visit turns into a terrifying discovery.",
        poster:
            "https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 9,
        title: "The Truman Show",
        year: 1998,
        genre: "Drama • Comedy • Sci-Fi",
        rating: 8.2,
        mood: ["thoughtful", "nostalgic", "happy"],
        description:
            "A man slowly discovers that his entire life may be an elaborate television show.",
        poster:
            "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 10,
        title: "The Perks of Being a Wallflower",
        year: 2012,
        genre: "Drama • Romance",
        rating: 7.9,
        mood: ["sad", "nostalgic", "romantic"],
        description:
            "A shy teenager finds friendship, love and a sense of belonging.",
        poster:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 11,
        title: "Whiplash",
        year: 2014,
        genre: "Drama • Music",
        rating: 8.5,
        mood: ["excited", "thoughtful"],
        description:
            "A young drummer pushes himself beyond his limits to become extraordinary.",
        poster:
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 12,
        title: "The Conjuring",
        year: 2013,
        genre: "Horror • Mystery",
        rating: 7.5,
        mood: ["thrilled"],
        description:
            "A family encounters a terrifying supernatural presence in their new home.",
        poster:
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 13,
        title: "About Time",
        year: 2013,
        genre: "Romance • Comedy • Drama",
        rating: 7.8,
        mood: ["romantic", "happy", "nostalgic"],
        description:
            "A young man discovers he can travel through time and uses it to improve his life.",
        poster:
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 14,
        title: "Everything Everywhere All at Once",
        year: 2022,
        genre: "Action • Comedy • Sci-Fi",
        rating: 7.8,
        mood: ["excited", "thoughtful", "happy"],
        description:
            "A woman discovers countless versions of herself across an infinite multiverse.",
        poster:
            "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 15,
        title: "Lost in Translation",
        year: 2003,
        genre: "Drama • Romance",
        rating: 7.7,
        mood: ["chill", "sad", "thoughtful"],
        description:
            "Two strangers form a quiet connection while feeling lost in Tokyo.",
        poster:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 16,
        title: "Mad Max: Fury Road",
        year: 2015,
        genre: "Action • Adventure • Sci-Fi",
        rating: 8.1,
        mood: ["excited", "thrilled"],
        description:
            "A spectacular chase across a post-apocalyptic wasteland.",
        poster:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80"
    }

];


/* ==================================================
   VARIABLES
================================================== */

let selectedMood = null;


/* ==================================================
   SELECT MOOD
================================================== */

function selectMood(mood, element) {

    selectedMood = mood;

    document
        .querySelectorAll(".mood-card")
        .forEach(card => {
            card.classList.remove("active");
        });

    element.classList.add("active");

    const moodNames = {

        happy: "Happy ☀",
        romantic: "Romantic ♡",
        sad: "Melancholic ☂",
        chill: "Chill ☁",
        excited: "Excited ϟ",
        thrilled: "Thrilled ◉",
        thoughtful: "Thoughtful ☾",
        nostalgic: "Nostalgic ✦"

    };

    document.getElementById("moodResult").innerHTML =

        `Because you're feeling <strong>${moodNames[mood]}</strong>`;

    displayRecommendations(mood);

    setTimeout(() => {

        document
            .getElementById("discover")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 150);

}


/* ==================================================
   RECOMMENDATION ENGINE
================================================== */

function getRecommendations(mood) {

    let results = movies.filter(movie =>
        movie.mood.includes(mood)
    );

    /*
        Sort movies by rating.
        Highest-rated matching movies appear first.
    */

    results.sort((a, b) =>
        b.rating - a.rating
    );

    return results;

}


/* ==================================================
   DISPLAY RECOMMENDATIONS
================================================== */

function displayRecommendations(mood) {

    const results =
        getRecommendations(mood);

    renderMovies(results);

}


/* ==================================================
   RENDER MOVIES
================================================== */

function renderMovies(movieList) {

    const grid =
        document.getElementById("movieGrid");

    grid.innerHTML = "";

    if (movieList.length === 0) {

        grid.innerHTML = `

            <div class="empty-result">

                <div class="empty-star">
                    ✦
                </div>

                <h3>
                    Nothing found.
                </h3>

                <p>
                    Try another mood or search.
                </p>

            </div>

        `;

        return;
    }


    movieList.forEach(movie => {

        const card =
            document.createElement("article");

        card.className = "movie-card";


        const favorite =
            isFavorite(movie.id);


        card.innerHTML = `

            <div class="movie-rating">
                ★ ${movie.rating}
            </div>

            <img
                src="${movie.poster}"
                class="movie-poster"
                alt="${movie.title}"
            >

            <button
                class="movie-heart"
                onclick="toggleFavorite(${movie.id})"
            >
                ${favorite ? "♥" : "♡"}
            </button>

            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>

                <div class="movie-meta">
                    ${movie.year} • ${movie.genre}
                </div>

                <p class="movie-description">
                    ${movie.description}
                </p>

                <button
                    class="movie-open"
                    onclick="openMovie(${movie.id})"
                >
                    View details →
                </button>

            </div>

        `;

        grid.appendChild(card);

    });

}


/* ==================================================
   SEARCH
================================================== */

function searchMovies() {

    const query =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    if (query === "") {

        if (selectedMood) {

            displayRecommendations(
                selectedMood
            );

        } else {

            document.getElementById(
                "movieGrid"
            ).innerHTML = `

                <div class="empty-result">

                    <div class="empty-star">
                        ✦
                    </div>

                    <h3>
                        Your next favorite movie
                        is waiting.
                    </h3>

                    <p>
                        Choose a mood above.
                    </p>

                </div>

            `;

        }

        return;
    }


    const results =
        movies.filter(movie =>

            movie.title
                .toLowerCase()
                .includes(query)

            ||

            movie.genre
                .toLowerCase()
                .includes(query)

    );


    renderMovies(results);

}


/* ==================================================
   FAVORITES
================================================== */

function getFavorites() {

    return JSON.parse(
        localStorage.getItem("veyraFavorites")
    ) || [];

}


function isFavorite(id) {

    return getFavorites()
        .includes(id);

}


function toggleFavorite(id) {

    let favorites =
        getFavorites();


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                movieId => movieId !== id
            );

    } else {

        favorites.push(id);

    }


    localStorage.setItem(
        "veyraFavorites",
        JSON.stringify(favorites)
    );


    if (selectedMood) {

        displayRecommendations(
            selectedMood
        );

    }

}


/* ==================================================
   FAVORITES MODAL
================================================== */

function openFavorites() {

    const modal =
        document.getElementById(
            "favoritesModal"
        );

    const grid =
        document.getElementById(
            "favoritesGrid"
        );


    const favorites =
        getFavorites();


    grid.innerHTML = "";


    if (favorites.length === 0) {

        grid.innerHTML = `

            <div class="empty-result">

                <div class="empty-star">
                    ♡
                </div>

                <h3>
                    Your collection is empty.
                </h3>

                <p>
                    Save movies you want to watch.
                </p>

            </div>

        `;

    } else {

        const savedMovies =
            movies.filter(movie =>
                favorites.includes(movie.id)
            );


        savedMovies.forEach(movie => {

            const card =
                document.createElement("article");

            card.className =
                "movie-card";


            card.innerHTML = `

                <img
                    src="${movie.poster}"
                    class="movie-poster"
                    alt="${movie.title}"
                >

                <div class="movie-info">

                    <h3>
                        ${movie.title}
                    </h3>

                    <div class="movie-meta">
                        ${movie.year} • ${movie.genre}
                    </div>

                    <button
                        class="movie-open"
                        onclick="openMovie(${movie.id})"
                    >
                        View details →
                    </button>

                </div>

            `;

            grid.appendChild(card);

        });

    }


    modal.classList.add("show");

}


/* ==================================================
   CLOSE FAVORITES
================================================== */

function closeFavorites() {

    document
        .getElementById("favoritesModal")
        .classList.remove("show");

}


/* ==================================================
   MOVIE DETAILS
================================================== */

function openMovie(id) {

    const movie =
        movies.find(
            movie => movie.id === id
        );


    if (!movie) return;


    const details =
        document.getElementById(
            "movieDetails"
        );


    details.innerHTML = `

        <button
            class="close-button"
            onclick="closeMovie()"
        >
            ×
        </button>

        <div class="details-layout">

            <div>

                <img
                    src="${movie.poster}"
                    class="details-poster"
                    alt="${movie.title}"
                >

            </div>


            <div class="details-content">

                <div class="eyebrow">

                    <span></span>

                    MOVIE DETAILS

                </div>


                <h2>
                    ${movie.title}
                </h2>


                <div class="details-rating">

                    ★ ${movie.rating}/10

                </div>


                <div class="movie-meta">

                    ${movie.year}

                    •
                    
                    ${movie.genre}

                </div>


                <p class="details-overview">

                    ${movie.description}

                </p>


                <button
                    class="primary-button"
                    onclick="toggleFavorite(${movie.id})"
                >

                    ${isFavorite(movie.id)
                        ? "♥ Saved"
                        : "♡ Save movie"}

                </button>

            </div>

        </div>

    `;


    document
        .getElementById("movieModal")
        .classList.add("show");

}


/* ==================================================
   CLOSE MOVIE
================================================== */

function closeMovie() {

    document
        .getElementById("movieModal")
        .classList.remove("show");

}


/* ==================================================
   SURPRISE ME
================================================== */

function surpriseMe() {

    const randomIndex =
        Math.floor(
            Math.random() * movies.length
        );


    const movie =
        movies[randomIndex];


    openMovie(movie.id);

}


/* ==================================================
   GO TO MOODS
================================================== */

function goToMoods() {

    document
        .getElementById("moods")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ==================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
================================================== */

window.addEventListener(
    "click",
    function(event) {

        const favorites =
            document.getElementById(
                "favoritesModal"
            );

        const movie =
            document.getElementById(
                "movieModal"
            );


        if (event.target === favorites) {

            closeFavorites();

        }


        if (event.target === movie) {

            closeMovie();

        }

    }
);


/* ==================================================
   ESCAPE KEY
================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeFavorites();
            closeMovie();

        }

    }
);
