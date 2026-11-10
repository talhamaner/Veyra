function getMoodRecommendations(mood, type = "all") {

    let results = movies.filter(movie => {

        const moodMatch =
            !mood ||
            movie.moods.includes(mood);

        const typeMatch =
            type === "all" ||
            movie.type === type;

        return moodMatch && typeMatch;
    });


    return results.sort((a, b) => {

        const ratingDifference =
            b.rating - a.rating;

        return ratingDifference;

    });
}


function getTrending() {

    return [...movies]
        .sort((a, b) => {

            const scoreA =
                a.rating +
                (a.year >= 2020 ? 1 : 0);

            const scoreB =
                b.rating +
                (b.year >= 2020 ? 1 : 0);

            return scoreB - scoreA;
        })
        .slice(0, 8);
}


function getHiddenGems() {

    return movies
        .filter(movie => movie.rating >= 7.5)
        .sort((a, b) => a.rating - b.rating)
        .slice(0, 8);
}


function getCollectionMovies(collection) {

    switch (collection) {

        case "feelgood":

            return movies.filter(movie =>
                movie.moods.includes("happy")
            );

        case "midnight":

            return movies.filter(movie =>
                movie.moods.includes("chill") ||
                movie.moods.includes("thrilled")
            );

        case "mind":

            return movies.filter(movie =>
                movie.moods.includes("thoughtful")
            );

        case "hidden":

            return getHiddenGems();

        default:

            return movies;
    }
}


function getSurpriseMovie(type = "all") {

    let pool = movies;

    if (type !== "all") {
        pool =
            movies.filter(movie =>
                movie.type === type
            );
    }

    return pool[
        Math.floor(
            Math.random() * pool.length
        )
    ];
}


function explainRecommendation(movie, mood) {

    if (!mood) {

        return `Veyra picked ${movie.title} because it has a ${movie.rating} rating and matches the kind of stories people often discover through Veyra.`;
    }


    const moodName =
        moods.find(m => m.id === mood)?.name || mood;


    return `You chose "${moodName}". ${movie.title} fits that feeling through its ${movie.genres.slice(0,2).join(" and ")} storytelling and ${movie.moods.slice(0,2).join(" / ")} atmosphere.`;
}
