import React from 'react'
import {shallow} from 'enzyme'
import MovieResultsContainer from "./MovieResultContainer";
import MovieSearchResult from "../../models/MovieSearchResult";

describe('<MovieResultsContainer/>', () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      movie: new MovieSearchResult({
        title: 'Le coach',
        year: '2009',
        imdbID: 'tt1473389',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BZTEzYzUyMTUtMWRhYS00NThkLTgzNmItN2MxNGFkN2YxNzYyXkEyXkFqcGdeQXVyNjgzNTIwNDc@._V1_SX300.jpg'
      }),
      getSelectedMovieDetails: jest.fn(),
      observer: {},
      showMovieDetailsModal: jest.fn()
    }

    wrapper = shallow(<MovieResultsContainer {...props}/>)
  })

  it('should should render a container with title, movie year, and image', () => {
    expect(wrapper.find('.movie-result-container').exists()).toEqual(true)
    expect(wrapper.find('h3').text()).toEqual('Le coach')
    expect(wrapper.find('.movie-year').text()).toEqual('2009')
    expect(wrapper.find('.movie-image').prop('src')).toEqual('https://m.media-amazon.com/images/M/MV5BZTEzYzUyMTUtMWRhYS00NThkLTgzNmItN2MxNGFkN2YxNzYyXkEyXkFqcGdeQXVyNjgzNTIwNDc@._V1_SX300.jpg')
  });

  describe('when a movie gets clicked', () => {
    beforeEach(() => {
      wrapper.find('.movie-result-container').simulate('click')
    })

    it('should call getSelectedMovieDetails ', () => {
      expect(props.getSelectedMovieDetails).toHaveBeenCalledWith({movie: props.movie, observer: props.observer })
    });

    it('should call showMovieDetailsModal ', () => {
      expect(props.showMovieDetailsModal).toHaveBeenCalled()
    });
  });
});