function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("show");
  }
// Redirect to the questionnaire page
function redirectToQuestionnaire() {
    window.location.href = 'questionnaire.html';
}
//
document.addEventListener("DOMContentLoaded", function () {
    const formSteps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");

    let currentStep = 0;
    formSteps[currentStep].classList.add("active");

    function showStep(step) {
        formSteps.forEach((stepDiv, index) => {
            stepDiv.classList.toggle("active", index === step);
        });
    }

    nextBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
            currentStep++;
            showStep(currentStep);
        });
    });

    prevBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
            currentStep--;
            showStep(currentStep);
        });
    });
});




// Function to collect user preferences and validate inputs
function submitPreferences() {
    // Get user inputs
    const mood = document.querySelector('input[name="mood"]:checked')?.value;
    const occasion = document.querySelector('input[name="occasion"]:checked')?.value;

    const language = document.querySelector('input[name="language"]:checked')?.value;

    const industry = Array.from(document.querySelectorAll('input[name="industry"]:checked')).map(input => input.value);
    const genres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(input => input.value);

    // Validate if all required fields are answered
    if (!mood || !occasion || !language || industry.length === 0 || genres.length === 0) {
        alert("Please answer all questions!");
        return;
    }

    // Save user preferences in localStorage
    const preferences = { mood, occasion, language, industry, genres };
    localStorage.setItem('userPreferences', JSON.stringify(preferences));

    // Redirect to recommendations page
    window.location.href = 'recommendations.html';
}

// Function to fetch and display recommended movies based on preferences
async function fetchMovies() {
    const preferences = JSON.parse(localStorage.getItem('userPreferences'));

    if (!preferences) {
        alert("No preferences found! Please complete the questionnaire first.");
        window.location.href = 'questionnaire.html';
        return;
    }

    const { language, genres } = preferences;

    // TMDB API settings
    const API_KEY = 'YOUR_API_KEY_HERE';//enter your API key here
    const BASE_URL = 'https://api.themoviedb.org/3';

    // Language mapping for API
    const languageMap = { "english": "en", "hindi": "hi", "marathi": "mr", "tamil": "ta" };
    const languageCode = languageMap[language] || "en";

    const genreIds = genres.join(',');

    try {
        // Fetch movies from TMDB API
        const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&with_original_language=${lang}&sort_by=popularity.desc`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            displayMovies(data.results);
        } else {
            document.getElementById('movie-list').innerHTML = '<p>No matches found. Try adjusting your preferences.</p>';
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        document.getElementById('movie-list').innerHTML = '<p>Failed to load recommendations. Please try again later.</p>';
    }
}

// Function to display movies dynamically
function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const posterUrl = movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : 'https://via.placeholder.com/200x300?text=No+Image';

        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        movieCard.innerHTML = `
            <img src="${posterUrl}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Rating: ${movie.vote_average}</p>
        `;

        movieList.appendChild(movieCard);
    });
}

// Fetch movies when recommendations page loads
if (window.location.pathname.includes('recommendations.html')) {
    fetchMovies();
}






// Function to fetch and display recommended movies based on user preferences
async function fetchMovies() {
    const preferences = JSON.parse(localStorage.getItem('userPreferences'));

    if (!preferences) {
        document.getElementById('recommendation-message').innerText = "No preferences found! Please complete the questionnaire first.";
        return;
    }

    const { language, genres } = preferences;
    const API_KEY = 'YOUR_API_KEY_HERE';
    const BASE_URL = 'https://api.themoviedb.org/3';

    const languageMap = { "english": "en", "hindi": "hi", "marathi": "mr", "tamil": "ta" };
    const languageCode = languageMap[language] || "en";

    const genreIds = genres.join(',');

    try {
        const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreIds}&with_original_language=${languageCode}&sort_by=popularity.desc`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            displayMovies(data.results);
        } else {
            document.getElementById('recommendation-message').innerText = "No matches found. Try adjusting your preferences.";
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        document.getElementById('recommendation-message').innerText = "Failed to load recommendations. Please try again later.";
    }
}

// Function to display movies dynamically
function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const posterUrl = movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : 'https://via.placeholder.com/200x300?text=No+Image';

        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        movieCard.innerHTML = `
            <img src="${posterUrl}" alt="${movie.title}">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-rating">⭐ ${movie.vote_average}</p>
            <button class="watch-btn" onclick="window.open('https://www.themoviedb.org/movie/${movie.id}', '_blank')">View Details</button>
        `;

        movieList.appendChild(movieCard);
    });
}

// Fetch movies when recommendations page loads
if (window.location.pathname.includes('recommendations.html')) {
    fetchMovies();
}
