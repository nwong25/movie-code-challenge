import axios from 'axios'
import MovieDetails from "../models/MovieDetails";

const getMovieDetails = async ({imdbID, observer}) => {
  try {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=a4d98298`
    const {data} = await axios.get(url)
    const movieDetails = new MovieDetails({
      title: data.Title,
      year: data.Year,
      rated: data.Rated,
      released: data.Released,
      runtime: data.Runtime,
      genre: data.Genre,
      director: data.Director,
      writer: data.Writer,
      actors: data.Actors,
      plot: data.Plot,
      language: data.Language,
      country: data.Country,
      awards: data.Awards,
      poster: data.Poster,
      ratings: data.Ratings,
      metascore: data.Metascore,
      imdbRating: data.imdbRating,
      imdbVotes: data.imdbVotes,
      imdbID: data.imdbID,
      type: data.Type,
      dvd: data.DVD,
      boxOffice: data.BoxOffice,
      production: data.Production,
      website: data.Website,
    })
    observer.receiveMovieDetails(movieDetails)
  } catch (error) {
    observer.errorReceivingMovieDetails(error)
  }
}

export default getMovieDetails