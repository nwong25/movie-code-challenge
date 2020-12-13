import MovieDetails from "./MovieDetails";

describe('entity - MovieDetails', () => {
  describe('when data is missing ', () => {
    let actual, expected
    beforeEach(() => {
      actual = new MovieDetails({
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

      expected = {
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
        language: undefined,
        country: undefined,
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
      }
    })

    it('should return undefined for missing items', () => {
      expect(actual.toObject()).toEqual(expected)
    });
  });

  describe('when all data fields are available ', () => {
    let actual, expected
    beforeEach(() => {
      actual = new MovieDetails({
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

      expected = {
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
      }
    })

    it('should return undefined for missing items', () => {
      expect(actual.toObject()).toEqual(expected)
    });
  });
});