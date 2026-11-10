const moods = [

    {
        id: "happy",
        icon: "☀",
        name: "Happy",
        description: "Make me smile"
    },

    {
        id: "romantic",
        icon: "♡",
        name: "Romantic",
        description: "Give me butterflies"
    },

    {
        id: "sad",
        icon: "☂",
        name: "Melancholic",
        description: "Let me feel"
    },

    {
        id: "chill",
        icon: "☁",
        name: "Chill",
        description: "Slow it down"
    },

    {
        id: "excited",
        icon: "ϟ",
        name: "Excited",
        description: "Keep me hooked"
    },

    {
        id: "thrilled",
        icon: "◉",
        name: "Thrilled",
        description: "Give me chills"
    },

    {
        id: "thoughtful",
        icon: "☾",
        name: "Thoughtful",
        description: "Make me think"
    },

    {
        id: "nostalgic",
        icon: "✦",
        name: "Nostalgic",
        description: "Take me back"
    }

];


const movies = [

    {
        id: 1,
        title: "La La Land",
        type: "movie",
        year: 2016,
        rating: 8.0,
        runtime: 128,

        genres: [
            "Romance",
            "Drama",
            "Musical"
        ],

        moods: [
            "romantic",
            "happy",
            "nostalgic"
        ],

        description:
            "Two ambitious artists fall in love while chasing their dreams in Los Angeles.",

        cast: [
            "Ryan Gosling",
            "Emma Stone",
            "John Legend"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",

        trailer:
            "https://www.youtube.com/watch?v=0pdqf4P9MB8",

        platforms: [
            {
                name: "Prime Video",
                type: "Rent / Buy"
            },
            {
                name: "Apple TV",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 2,
        title: "Interstellar",
        type: "movie",
        year: 2014,
        rating: 8.7,
        runtime: 169,

        genres: [
            "Sci-Fi",
            "Drama",
            "Adventure"
        ],

        moods: [
            "thoughtful",
            "emotional",
            "excited"
        ],

        description:
            "A team of explorers travels through a wormhole in search of a future for humanity.",

        cast: [
            "Matthew McConaughey",
            "Anne Hathaway",
            "Jessica Chastain"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",

        trailer:
            "https://www.youtube.com/watch?v=zSWdZVtXT7E",

        platforms: [
            {
                name: "Prime Video",
                type: "Rent / Buy"
            },
            {
                name: "Apple TV",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 3,
        title: "The Grand Budapest Hotel",
        type: "movie",
        year: 2014,
        rating: 8.1,
        runtime: 99,

        genres: [
            "Comedy",
            "Drama",
            "Adventure"
        ],

        moods: [
            "happy",
            "chill",
            "nostalgic"
        ],

        description:
            "A legendary concierge and his young lobby boy become involved in a mysterious inheritance.",

        cast: [
            "Ralph Fiennes",
            "Tony Revolori",
            "Saoirse Ronan"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",

        trailer:
            "https://www.youtube.com/watch?v=1Fg5iWmQjwk",

        platforms: [
            {
                name: "Disney+",
                type: "Check availability"
            },
            {
                name: "Apple TV",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 4,
        title: "Her",
        type: "movie",
        year: 2013,
        rating: 8.0,
        runtime: 126,

        genres: [
            "Romance",
            "Drama",
            "Sci-Fi"
        ],

        moods: [
            "romantic",
            "sad",
            "thoughtful"
        ],

        description:
            "A lonely writer develops an unusual relationship with an advanced operating system.",

        cast: [
            "Joaquin Phoenix",
            "Scarlett Johansson",
            "Amy Adams"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/lEIaL12hSkqqe83kgd0aTaPjG4E.jpg",

        trailer:
            "https://www.youtube.com/watch?v=ne6p6MfLBxc",

        platforms: [
            {
                name: "Prime Video",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 5,
        title: "Inception",
        type: "movie",
        year: 2010,
        rating: 8.8,
        runtime: 148,

        genres: [
            "Sci-Fi",
            "Action",
            "Thriller"
        ],

        moods: [
            "thrilled",
            "thoughtful",
            "excited"
        ],

        description:
            "A skilled thief enters people's dreams to steal secrets and attempts an impossible final job.",

        cast: [
            "Leonardo DiCaprio",
            "Joseph Gordon-Levitt",
            "Tom Hardy"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",

        trailer:
            "https://www.youtube.com/watch?v=YoHD9XEInc0",

        platforms: [
            {
                name: "Prime Video",
                type: "Rent / Buy"
            },
            {
                name: "Apple TV",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 6,
        title: "Before Sunrise",
        type: "movie",
        year: 1995,
        rating: 8.1,
        runtime: 101,

        genres: [
            "Romance",
            "Drama"
        ],

        moods: [
            "romantic",
            "chill",
            "nostalgic"
        ],

        description:
            "Two strangers meet on a train and spend one unforgettable night wandering through Vienna.",

        cast: [
            "Ethan Hawke",
            "Julie Delpy"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/kfWjD5Dq0b6B4d6N8B0B4n4M4h.jpg",

        trailer:
            "https://www.youtube.com/watch?v=6MUcuqbGTxc",

        platforms: [
            {
                name: "MUBI",
                type: "Check availability"
            }
        ]
    },


    {
        id: 7,
        title: "The Secret Life of Walter Mitty",
        type: "movie",
        year: 2013,
        rating: 7.3,
        runtime: 114,

        genres: [
            "Adventure",
            "Comedy",
            "Drama"
        ],

        moods: [
            "happy",
            "excited",
            "thoughtful"
        ],

        description:
            "A daydreaming office worker escapes his ordinary life and embarks on an extraordinary journey.",

        cast: [
            "Ben Stiller",
            "Kristen Wiig",
            "Sean Penn"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/6te4z2Dq8n0M4VxY8M6M8p0w9n.jpg",

        trailer:
            "https://www.youtube.com/watch?v=Hddk8Ag5j5E",

        platforms: [
            {
                name: "Disney+",
                type: "Check availability"
            }
        ]
    },


    {
        id: 8,
        title: "Get Out",
        type: "movie",
        year: 2017,
        rating: 7.8,
        runtime: 104,

        genres: [
            "Horror",
            "Mystery",
            "Thriller"
        ],

        moods: [
            "thrilled",
            "thoughtful"
        ],

        description:
            "A young man discovers disturbing secrets during a visit to his girlfriend's family.",

        cast: [
            "Daniel Kaluuya",
            "Allison Williams",
            "Bradley Whitford"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfY3v9Jz5r4J.jpg",

        trailer:
            "https://www.youtube.com/watch?v=DzfpyUB60YY",

        platforms: [
            {
                name: "Prime Video",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 9,
        title: "The Truman Show",
        type: "movie",
        year: 1998,
        rating: 8.2,
        runtime: 103,

        genres: [
            "Drama",
            "Comedy",
            "Sci-Fi"
        ],

        moods: [
            "thoughtful",
            "nostalgic",
            "chill"
        ],

        description:
            "A man slowly discovers that his entire life is actually a television show.",

        cast: [
            "Jim Carrey",
            "Ed Harris",
            "Laura Linney"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg",

        trailer:
            "https://www.youtube.com/watch?v=dlnmQbPGuls",

        platforms: [
            {
                name: "Apple TV",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 10,
        title: "The Perks of Being a Wallflower",
        type: "movie",
        year: 2012,
        rating: 7.9,
        runtime: 103,

        genres: [
            "Drama",
            "Romance"
        ],

        moods: [
            "sad",
            "nostalgic",
            "thoughtful"
        ],

        description:
            "An introverted teenager finds friendship, love and belonging during his first year of high school.",

        cast: [
            "Logan Lerman",
            "Emma Watson",
            "Ezra Miller"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/aKCvdFFF5n80d2Vh6UQ7Z7Jp9.jpg",

        trailer:
            "https://www.youtube.com/watch?v=n5rh7O4IDc0",

        platforms: [
            {
                name: "Prime Video",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 11,
        title: "Whiplash",
        type: "movie",
        year: 2014,
        rating: 8.5,
        runtime: 107,

        genres: [
            "Drama",
            "Music"
        ],

        moods: [
            "excited",
            "thrilled",
            "thoughtful"
        ],

        description:
            "A young drummer pushes himself to the limit under the direction of an ruthless instructor.",

        cast: [
            "Miles Teller",
            "J.K. Simmons",
            "Paul Reiser"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeNOVIE.jpg",

        trailer:
            "https://www.youtube.com/watch?v=7d_jQycdQGo",

        platforms: [
            {
                name: "SonyLIV",
                type: "Check availability"
            }
        ]
    },


    {
        id: 12,
        title: "The Conjuring",
        type: "movie",
        year: 2013,
        rating: 7.5,
        runtime: 112,

        genres: [
            "Horror",
            "Mystery",
            "Thriller"
        ],

        moods: [
            "thrilled"
        ],

        description:
            "Paranormal investigators help a family terrorized by a dark presence in their farmhouse.",

        cast: [
            "Vera Farmiga",
            "Patrick Wilson",
            "Lili Taylor"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxuFKWB8o5Z6n4.jpg",

        trailer:
            "https://www.youtube.com/watch?v=k10ETZ41q5o",

        platforms: [
            {
                name: "Prime Video",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 13,
        title: "About Time",
        type: "movie",
        year: 2013,
        rating: 7.8,
        runtime: 123,

        genres: [
            "Romance",
            "Comedy",
            "Drama"
        ],

        moods: [
            "romantic",
            "happy",
            "sad"
        ],

        description:
            "A young man discovers he can travel through time and uses his ability to improve his life and love.",

        cast: [
            "Domhnall Gleeson",
            "Rachel McAdams",
            "Bill Nighy"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/iP9V6B9r2Y7M6Q6H0x8X0h0M7.jpg",

        trailer:
            "https://www.youtube.com/watch?v=T7A810duHvw",

        platforms: [
            {
                name: "Prime Video",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 14,
        title: "Everything Everywhere All at Once",
        type: "movie",
        year: 2022,
        rating: 7.8,
        runtime: 139,

        genres: [
            "Action",
            "Comedy",
            "Sci-Fi"
        ],

        moods: [
            "excited",
            "thoughtful",
            "happy"
        ],

        description:
            "A woman discovers that she can access the lives of alternate versions of herself across the multiverse.",

        cast: [
            "Michelle Yeoh",
            "Ke Huy Quan",
            "Stephanie Hsu"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",

        trailer:
            "https://www.youtube.com/watch?v=wxN1T1uxQ2g",

        platforms: [
            {
                name: "Prime Video",
                type: "Rent / Buy"
            }
        ]
    },


    {
        id: 15,
        title: "Lost in Translation",
        type: "movie",
        year: 2003,
        rating: 7.7,
        runtime: 102,

        genres: [
            "Drama",
            "Romance"
        ],

        moods: [
            "sad",
            "chill",
            "nostalgic"
        ],

        description:
            "Two lonely strangers form an unexpected connection while staying in Tokyo.",

        cast: [
            "Bill Murray",
            "Scarlett Johansson",
            "Giovanni Ribisi"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/3jCLJ9u7p0p9M5P4p2h6k6.jpg",

        trailer:
            "https://www.youtube.com/watch?v=W6uUqH9uK0I",

        platforms: [
            {
                name: "MUBI",
                type: "Check availability"
            }
        ]
    },


    {
        id: 16,
        title: "Mad Max: Fury Road",
        type: "movie",
        year: 2015,
        rating: 8.1,
        runtime: 120,

        genres: [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],

        moods: [
            "excited",
            "thrilled"
        ],

        description:
            "In a brutal wasteland, a group of rebels races toward freedom while pursued by a tyrant.",

        cast: [
            "Tom Hardy",
            "Charlize Theron",
            "Nicholas Hoult"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",

        trailer:
            "https://www.youtube.com/watch?v=hEJnMQG9ev8",

        platforms: [
            {
                name: "Prime Video",
                type: "Rent / Buy"
            }
        ]
    },


    /* =========================
       SERIES
    ========================= */


    {
        id: 101,
        title: "Dark",
        type: "series",
        year: 2017,
        rating: 8.7,

        seasons: 3,
        episodes: 26,

        genres: [
            "Sci-Fi",
            "Mystery",
            "Thriller"
        ],

        moods: [
            "thoughtful",
            "thrilled",
            "nostalgic"
        ],

        description:
            "Four families search for answers when two children disappear in a small German town.",

        cast: [
            "Louis Hofmann",
            "Lisa Vicari",
            "Maja Schöne"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",

        trailer:
            "https://www.youtube.com/watch?v=ESEUoa-mz2c",

        platforms: [
            {
                name: "Netflix",
                type: "Subscription"
            }
        ]
    },


    {
        id: 102,
        title: "Stranger Things",
        type: "series",
        year: 2016,
        rating: 8.6,

        seasons: 4,
        episodes: 34,

        genres: [
            "Sci-Fi",
            "Horror",
            "Drama"
        ],

        moods: [
            "thrilled",
            "nostalgic",
            "excited"
        ],

        description:
            "A group of friends uncover supernatural mysteries in their small town.",

        cast: [
            "Millie Bobby Brown",
            "Finn Wolfhard",
            "David Harbour"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",

        trailer:
            "https://www.youtube.com/watch?v=b9EkMc79ZSU",

        platforms: [
            {
                name: "Netflix",
                type: "Subscription"
            }
        ]
    },


    {
        id: 103,
        title: "The Office",
        type: "series",
        year: 2005,
        rating: 8.5,

        seasons: 9,
        episodes: 201,

        genres: [
            "Comedy",
            "Drama"
        ],

        moods: [
            "happy",
            "chill",
            "nostalgic"
        ],

        description:
            "A mockumentary following the strange and hilarious employees of a paper company.",

        cast: [
            "Steve Carell",
            "Rainn Wilson",
            "John Krasinski"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",

        trailer:
            "https://www.youtube.com/watch?v=LHOtME2DL4g",

        platforms: [
            {
                name: "Prime Video",
                type: "Subscription"
            }
        ]
    },


    {
        id: 104,
        title: "Breaking Bad",
        type: "series",
        year: 2008,
        rating: 9.5,

        seasons: 5,
        episodes: 62,

        genres: [
            "Crime",
            "Drama",
            "Thriller"
        ],

        moods: [
            "thrilled",
            "thoughtful",
            "excited"
        ],

        description:
            "A chemistry teacher enters the world of crime after receiving a devastating diagnosis.",

        cast: [
            "Bryan Cranston",
            "Aaron Paul",
            "Anna Gunn"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/ztkUQFLlC6Cj5s4cJx2L0Hj5.jpg",

        trailer:
            "https://www.youtube.com/watch?v=HhesaQXLuRY",

        platforms: [
            {
                name: "Netflix",
                type: "Subscription"
            }
        ]
    },


    {
        id: 105,
        title: "The Bear",
        type: "series",
        year: 2022,
        rating: 8.5,

        seasons: 3,
        episodes: 28,

        genres: [
            "Drama",
            "Comedy"
        ],

        moods: [
            "excited",
            "thoughtful",
            "emotional"
        ],

        description:
            "A talented young chef returns to Chicago to run his family's struggling sandwich shop.",

        cast: [
            "Jeremy Allen White",
            "Ayo Edebiri",
            "Ebon Moss-Bachrach"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9tHEZVs4.jpg",

        trailer:
            "https://www.youtube.com/watch?v=y-cqqAJIXhs",

        platforms: [
            {
                name: "Disney+",
                type: "Subscription"
            }
        ]
    },


    {
        id: 106,
        title: "Peaky Blinders",
        type: "series",
        year: 2013,
        rating: 8.7,

        seasons: 6,
        episodes: 36,

        genres: [
            "Crime",
            "Drama"
        ],

        moods: [
            "thrilled",
            "excited",
            "thoughtful"
        ],

        description:
            "A powerful gangster family builds an empire in post-war Birmingham.",

        cast: [
            "Cillian Murphy",
            "Paul Anderson",
            "Helen McCrory"
        ],

        poster:
            "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",

        trailer:
            "https://www.youtube.com/watch?v=oVzVdvGIC7U",

        platforms: [
            {
                name: "Netflix",
                type: "Subscription"
            }
        ]
    }

];
