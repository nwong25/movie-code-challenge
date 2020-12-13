import React from 'react'
import {shallow} from 'enzyme'
import MovieList from "./MovieList";
import getMovieDetails from "../../httpRequests/getMovieDetails";
import getMovieList from "../../httpRequests/getMovieList";
import MovieSearchResult from "../../models/MovieSearchResult";
import MovieDetails from "../../models/MovieDetails";

jest.mock('../../httpRequests/getMovieList', () => jest.fn())
jest.mock('../../httpRequests/getMovieDetails', () => jest.fn())

describe('<MovieList />', () => {
  let wrapper, props, data, error
  beforeEach(() => {
    wrapper = shallow(<MovieList/>)
  })

  describe('componentDidMount', () => {
    beforeEach(() => {
      wrapper.instance().componentDidMount()
    })

    it('should call getMovieList', () => {
      expect(getMovieList).toHaveBeenCalledWith({searchTerm: 'Coach', observer: wrapper.instance()})
    });
  });

  describe('Observer Callbacks for getMovieList', () => {

    describe('receiveMovieResults', () => {
      beforeEach(() => {
        wrapper.setState({
          movieResults: []
        })
        data = [
          new MovieSearchResult({
            title: "Coach Carter",
            year: "2005",
            imdbID: "tt0393162",
            type: "movie",
            poster: "https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
          }),
          new MovieSearchResult({
            title: "Balls Out: Gary the Tennis Coach",
            year: "2009",
            imdbID: "tt0787470",
            type: "movie",
            poster: "https://m.media-amazon.com/images/M/MV5BYmY3YmUxZDctMGE2MC00Nzk1LWFjOWMtYjM5ZTI0MTYyMjUxXkEyXkFqcGdeQXVyNTYyNDI4MzY@._V1_SX300.jpg"
          })
        ]
        wrapper.instance().receiveMovieResults(data)
      })
      it('should setState', () => {
        expect(wrapper.state().movieResults).toEqual(data)
      });
    });

    describe('errorReceivingMovieResults', () => {
      beforeEach(() => {
        wrapper.setState({
          error: null
        })
        error = {error: 'Error getting movie results'}
        wrapper.instance().errorReceivingMovieResults(error)
      })

      it('should set state with error message', () => {
        expect(wrapper.state().error).toEqual(error)
      });
    });
  });

  describe('Observer Callbacks for getMovieDetails', () => {

    describe('receiveMovieDetails', () => {
      beforeEach(() => {
        jest.spyOn(wrapper.instance(), 'setState')
        data = new MovieDetails({
          title: "Balls Out: Gary the Tennis Coach",
          year: "2009",
          rated: "R",
          released: "09 Apr 2009",
          runtime: "92 min",
          genre: "Comedy, Sport",
          director: "Danny Leiner"
        })
        wrapper.instance().receiveMovieDetails(data)
      })

      it('should setState', () => {
        expect(wrapper.state().selectedMovieDetails).toEqual(data)
      });
    });

    describe('errorReceivingMovieResults', () => {
      beforeEach(() => {
        wrapper.setState({
          error: null
        })
        error = {error: 'Error getting movie details'}
        wrapper.instance().errorReceivingMovieDetails(error)
      })

      it('should set state with error message', () => {
        expect(wrapper.state().error).toEqual(error)
      });
    });
  });

  describe('_getSelectedMovieDetails', () => {
    let movie
    beforeEach(() => {
      movie = new MovieSearchResult({
        title: "Coach Carter",
        year: "2005",
        imdbID: "tt0393162",
        type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      })
      wrapper.instance()._getSelectedMovieDetails({movie, observer: {}})
    })

    it('should call getMovieDetails', () => {
      expect(getMovieDetails).toHaveBeenCalledWith({imdbID: movie.getImdbID(), observer: {}})
    });
  });

  describe(' _showMovieDetailsModal', () => {
    beforeEach(() => {
      wrapper.instance().setState({
        showModal: false
      })
      wrapper.instance()._showMovieDetailsModal()
    })
    it('should set the showModal state to true', () => {
      expect(wrapper.state().showModal).toEqual(true)
    });
  });

  describe(' _closeMovieDetailsModal', () => {
    beforeEach(() => {
      wrapper.instance().setState({
        showModal: true
      })
      wrapper.instance()._closeMovieDetailsModal()
    })
    it('should set the showModal state to true', () => {
      expect(wrapper.state().showModal).toEqual(false)
    });
  });

  describe('on render with movie results and selected movie', () => {
    beforeEach(() => {
      wrapper.setState({
        movieResults: [
          new MovieSearchResult({
            title: "Coach Carter",
            year: "2005",
            imdbID: "tt0393162",
            type: "movie",
            poster: "https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
          }),
          new MovieSearchResult({
            title: "Balls Out: Gary the Tennis Coach",
            year: "2009",
            imdbID: "tt0787470",
            type: "movie",
            poster: "https://m.media-amazon.com/images/M/MV5BYmY3YmUxZDctMGE2MC00Nzk1LWFjOWMtYjM5ZTI0MTYyMjUxXkEyXkFqcGdeQXVyNTYyNDI4MzY@._V1_SX300.jpg"
          })
        ],
        selectedMovieDetails: new MovieDetails({
          title: "Balls Out: Gary the Tennis Coach",
          year: "2009",
          rated: "R",
          released: "09 Apr 2009",
          runtime: "92 min",
          genre: "Comedy, Sport",
          director: "Danny Leiner"
        })
      })
    })

    it('should display section header', () => {
      expect(wrapper.find('h2').text()).toEqual('Movie List')
    });
    it('should display 2 movie card containers ', () => {
      expect(wrapper.find('MovieResultsContainer').length).toEqual(2)
    });

    it('should display modal', () => {
      expect(wrapper.find('MovieDetailsModal').exists()).toEqual(true)
    });
  })
});


