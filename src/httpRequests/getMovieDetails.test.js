import axios from 'axios'
import getMovieDetails from "./getMovieDetails";
import MovieDetails from "../models/MovieDetails";
jest.mock('axios')

describe('getMovieDetails', () => {
  let observer, actual, results, dataFromCall
  describe('when successful in retrieving data', () => {
    beforeEach(() => {
      observer = {
        receiveMovieDetails: jest.fn(),
        errorReceivingMovieDetails: jest.fn()
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
      results = new MovieDetails({
        title: "Balls Out: Gary the Tennis Coach",
        year: "2009",
        rated: "R",
        released: "09 Apr 2009",
        runtime: "92 min",
        genre: "Comedy, Sport",
        director: "Danny Leiner",
        writer: "Andy Stock, Rick Stempson",
        actors: "Seann William Scott, Randy Quaid, Brando Eaton, Emilee Wallace",
        plot: "A high school janitor has not recovered from his failed career as a tennis pro. He begins coaching his beloved sport to a group of misfits and leads them to the Nebraska State Championships.",
        language: "English",
        country: "USA",
        awards: "N/A",
        poster: "https://m.media-amazon.com/images/M/MV5BYmY3YmUxZDctMGE2MC00Nzk1LWFjOWMtYjM5ZTI0MTYyMjUxXkEyXkFqcGdeQXVyNTYyNDI4MzY@._V1_SX300.jpg",
        ratings: [{"Source": "Internet Movie Database", "Value": "5.5/10"}, {"Source": "Rotten Tomatoes", "Value": "27%"}],
        metascore: "N/A",
        imdbRating: "5.5",
        imdbVotes: "9,411",
        imdbID: "tt0787470",
        type: "movie",
        dvd: "N/A",
        boxOffice: "N/A",
        production: "N/A",
        website: "N/A",
      })
      actual = getMovieDetails({searchTerm: 'Coach', observer})
    })
    it('should call receiveMovieDetails with data', () => {
      expect(observer.receiveMovieDetails).toHaveBeenCalled()
    });
  });

  describe('when there is an error retrieving data', () => {
    beforeEach(() => {
      observer = {
        receiveMovieDetails: jest.fn(),
        errorReceivingMovieDetails: jest.fn()
      }

      axios.get.mockRejectedValue({error:"some error"});
      actual = getMovieDetails({searchTerm: 'Coach', observer})
    })

    it('should call receiveMovieDetails with data', () => {
      expect(observer.errorReceivingMovieDetails).toHaveBeenCalledWith({error:"some error"})
    });
  });
});
