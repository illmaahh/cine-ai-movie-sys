export interface Movie {
  id: string;
  title: string;
  year: number;
  rating: number;
  runtime: string;
  genres: string[];
  description: string;
  poster: string;
  backdrop: string;
  trailer: string;
  matchPercentage: number;
  aiReason?: string;
  director: string;
  cast: string[];
  language: string;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    year: 2010,
    rating: 8.8,
    runtime: "2h 28m",
    genres: ["Sci-Fi", "Action", "Thriller"],
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    matchPercentage: 98,
    aiReason: "Christopher Nolan is one of your favorite directors",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    language: "English"
  },
  {
    id: "2",
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    runtime: "2h 49m",
    genres: ["Sci-Fi", "Drama", "Adventure"],
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    matchPercentage: 97,
    aiReason: "You love epic space adventures with emotional depth",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    language: "English"
  },
  {
    id: "3",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    runtime: "2h 32m",
    genres: ["Action", "Crime", "Drama"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    matchPercentage: 96,
    aiReason: "Dark superhero films are in your top genres",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    language: "English"
  },
  {
    id: "4",
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    runtime: "2h 44m",
    genres: ["Sci-Fi", "Drama", "Mystery"],
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/gCcx85zbxz4",
    matchPercentage: 94,
    aiReason: "Neo-noir sci-fi matches your taste profile",
    director: "Denis Villeneuve",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
    language: "English"
  },
  {
    id: "5",
    title: "Dune",
    year: 2021,
    rating: 8.0,
    runtime: "2h 35m",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
    poster: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/8g18jFHCLXk",
    matchPercentage: 95,
    aiReason: "Epic sci-fi with stunning visuals is your style",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    language: "English"
  },
  {
    id: "6",
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    runtime: "2h 12m",
    genres: ["Thriller", "Drama", "Comedy"],
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
    matchPercentage: 92,
    aiReason: "Award-winning international cinema you'll love",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    language: "Korean"
  },
  {
    id: "7",
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    runtime: "2h 16m",
    genres: ["Sci-Fi", "Action"],
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    matchPercentage: 93,
    aiReason: "A classic that defined the sci-fi genre you love",
    director: "The Wachowskis",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    language: "English"
  },
  {
    id: "8",
    title: "Joker",
    year: 2019,
    rating: 8.4,
    runtime: "2h 2m",
    genres: ["Crime", "Drama", "Thriller"],
    description: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    poster: "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
    matchPercentage: 91,
    aiReason: "Character-driven psychological dramas suit you",
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    language: "English"
  },
  {
    id: "9",
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    runtime: "2h",
    genres: ["Action", "Adventure", "Sci-Fi"],
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.",
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
    matchPercentage: 89,
    aiReason: "High-octane action with stunning cinematography",
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    language: "English"
  },
  {
    id: "10",
    title: "Arrival",
    year: 2016,
    rating: 7.9,
    runtime: "1h 56m",
    genres: ["Sci-Fi", "Drama", "Mystery"],
    description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/tFMo3UJ4B4g",
    matchPercentage: 94,
    aiReason: "Thoughtful sci-fi with emotional core",
    director: "Denis Villeneuve",
    cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
    language: "English"
  },
  {
    id: "11",
    title: "Get Out",
    year: 2017,
    rating: 7.7,
    runtime: "1h 44m",
    genres: ["Horror", "Mystery", "Thriller"],
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509248961725-aec71f0d4f54?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/DzfpyUB60YY",
    matchPercentage: 88,
    aiReason: "Intelligent horror with social commentary",
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    language: "English"
  },
  {
    id: "12",
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    runtime: "2h 22m",
    genres: ["Drama"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    matchPercentage: 96,
    aiReason: "A timeless classic with profound emotional impact",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    language: "English"
  },
  {
    id: "13",
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    runtime: "1h 46m",
    genres: ["Drama", "Music"],
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    poster: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/7d_jQycdQGo",
    matchPercentage: 90,
    aiReason: "Intense character study with gripping tension",
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
    language: "English"
  },
  {
    id: "14",
    title: "La La Land",
    year: 2016,
    rating: 8.0,
    runtime: "2h 8m",
    genres: ["Romance", "Drama", "Music"],
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    poster: "https://images.unsplash.com/photo-1514533212735-5df27d970db0?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/0pdqf4P9MB8",
    matchPercentage: 85,
    aiReason: "Beautiful cinematography and emotional storytelling",
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
    language: "English"
  },
  {
    id: "15",
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    runtime: "2h 55m",
    genres: ["Crime", "Drama"],
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/sY1S34973zA",
    matchPercentage: 94,
    aiReason: "The definitive crime saga masterpiece",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    language: "English"
  },
  {
    id: "16",
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    runtime: "2h 34m",
    genres: ["Crime", "Drama"],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920&h=1080&fit=crop",
    trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY",
    matchPercentage: 92,
    aiReason: "Tarantino's iconic nonlinear storytelling",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    language: "English"
  }
];

export const genres = [
  { id: "action", name: "Action", icon: "⚡", color: "from-orange-500 to-red-600" },
  { id: "sci-fi", name: "Sci-Fi", icon: "🚀", color: "from-cyan-500 to-blue-600" },
  { id: "thriller", name: "Thriller", icon: "🔥", color: "from-red-500 to-pink-600" },
  { id: "drama", name: "Drama", icon: "🎭", color: "from-purple-500 to-violet-600" },
  { id: "horror", name: "Horror", icon: "👻", color: "from-gray-600 to-gray-900" },
  { id: "romance", name: "Romance", icon: "💕", color: "from-pink-400 to-rose-600" },
  { id: "comedy", name: "Comedy", icon: "😂", color: "from-yellow-400 to-orange-500" },
  { id: "adventure", name: "Adventure", icon: "🗺️", color: "from-green-500 to-emerald-600" },
];

export const getMoviesByGenre = (genre: string): Movie[] => {
  return movies.filter(movie => 
    movie.genres.some(g => g.toLowerCase() === genre.toLowerCase())
  );
};

export const getTrendingMovies = (): Movie[] => {
  return movies.slice(0, 8);
};

export const getRecommendedMovies = (): Movie[] => {
  return movies.sort((a, b) => b.matchPercentage - a.matchPercentage).slice(0, 10);
};

export const getNewReleases = (): Movie[] => {
  return movies.filter(m => m.year >= 2019).slice(0, 6);
};

export const getHiddenGems = (): Movie[] => {
  return movies.filter(m => m.rating >= 7.5 && m.matchPercentage >= 85).slice(0, 6);
};
