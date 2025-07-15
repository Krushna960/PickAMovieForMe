// netlify/functions/fetchMovies.js

exports.handler = async function (event, context) {
  const apiKey = process.env.TMDB_API_KEY;

  const genreId = event.queryStringParameters.genre;
  const lang = event.queryStringParameters.lang || 'en';

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&with_original_language=${lang}&sort_by=popularity.desc`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch movies' })
    };
  }
};
