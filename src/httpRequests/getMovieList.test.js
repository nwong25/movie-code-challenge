import axios from 'axios'
import getMovieList from "./getMovieList";
import MovieSearchResult from "../models/MovieSearchResult";
jest.mock('axios')

describe('getMovieList', () => {
  let observer, actual, results, dataFromCall
  describe('when successful in retrieving data', () => {
    beforeEach(() => {
      observer = {
        receiveMovieResults: jest.fn(),
        errorReceivingMovieResults: jest.fn()
      }

      dataFromCall = {
        Search: [{
          "Title": "Coach Carter",
          "Year": "2005",
          "imdbID": "tt0393162",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
          {
            "Title": "Balls Out: Gary the Tennis Coach",
            "Year": "2009",
            "imdbID": "tt0787470",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmY3YmUxZDctMGE2MC00Nzk1LWFjOWMtYjM5ZTI0MTYyMjUxXkEyXkFqcGdeQXVyNTYyNDI4MzY@._V1_SX300.jpg"
          }
        ]
      }
      axios.get.mockResolvedValue({data: dataFromCall})
      results = dataFromCall.Search.map((movie) => new MovieSearchResult({
        title: movie.Title,
        year: movie.Year,
        imdbID: movie.imdbID,
        type: movie.Type,
        poster: movie.Poster
      }))
      actual = getMovieList({searchTerm: 'Coach', observer})
    })
    it('should call receiveMovieResults with data', () => {
      expect(observer.receiveMovieResults).toHaveBeenCalled()
    });
  });
  
  describe('when there is an error retrieving data', () => {
    beforeEach(() => {
      observer = {
        receiveMovieResults: jest.fn(),
        errorReceivingMovieResults: jest.fn()
      }

      axios.get.mockRejectedValue({error:"some error"});
      actual = getMovieList({searchTerm: 'Coach', observer})
    })

    it('should call receiveMovieResults with data', () => {
      expect(observer.errorReceivingMovieResults).toHaveBeenCalledWith({error:"some error"})
    });
  });
});
