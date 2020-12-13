import axios from 'axios'
import MovieSearchResult from "../models/MovieSearchResult";

const getMovieList = async ({searchTerm, observer}) => {
  try {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=a4d98298`
    const {data} = await axios.get(url)
    const movieResults = data.Search.map((movie) => new MovieSearchResult({
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster
    }))
    observer.receiveMovieResults(movieResults)
  } catch (error) {
    observer.errorReceivingMovieResults(error)
  }
}

export default getMovieList