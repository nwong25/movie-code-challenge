import MovieSearchResult from "./MovieSearchResult";

describe('entity - MovieSearchResult', () => {
  describe('when data is missing ', () => {
    let actual, expected
    beforeEach(() => {
      actual = new MovieSearchResult({
        title: 'Coach Carter',
        imdbID: 'tt0393162',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      })

      expected = {
        title: 'Coach Carter',
        imdbID: 'tt0393162',
        year: undefined,
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      }
    })

    it('should return undefined for missing items', () => {
      expect(actual.toObject()).toEqual(expected)
    });
  });

  describe('when all data fields are available ', () => {
    let actual, expected
    beforeEach(() => {
      actual = new MovieSearchResult({
        title: 'Coach Carter',
        imdbID: 'tt0393162',
        year: '2005',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      })

      expected = {
        title: 'Coach Carter',
        imdbID: 'tt0393162',
        year: '2005',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      }
    })

    it('should return undefined for missing items', () => {
      expect(actual.toObject()).toEqual(expected)
    });
  });
});