import React from 'react'
import {shallow} from 'enzyme'
import MovieDetailsModal from "./MovieDetailsModal";
import MovieDetails from "../../models/MovieDetails";

describe('<MovieDetailsModal />', () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      selectedMovieDetails: new MovieDetails({
        title: "Balls Out: Gary the Tennis Coach",
        year: "2009",
        rated: "R",
        released: "09 Apr 2009",
        runtime: "N/A",
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
      }),
      showModal: false,
      closeMovieDetailsModal: jest.fn()
    }

    wrapper = shallow (<MovieDetailsModal {...props}/>)
  })

  it('should display the following information', () => {
    expect(wrapper.find('.title').text()).toEqual('Balls Out: Gary the Tennis Coach')
    expect(wrapper.find('.year').text()).toEqual('2009')
    expect(wrapper.find('.rated').text()).toEqual('Rated: R')
    expect(wrapper.find('.released').text()).toEqual('Released: 09 Apr 2009')
    expect(wrapper.find('.genre').text()).toEqual('Genre: Comedy, Sport')
    expect(wrapper.find('.director').text()).toEqual('Director: Danny Leiner')
    expect(wrapper.find('.writer').text()).toEqual('Writer: Andy Stock, Rick Stempson')
    expect(wrapper.find('.actors').text()).toEqual('Actors: Seann William Scott, Randy Quaid, Brando Eaton, Emilee Wallace')
    expect(wrapper.find('.plot').text()).toEqual('Plot: A high school janitor has not recovered from his failed career as a tennis pro. He begins coaching his beloved sport to a group of misfits and leads them to the Nebraska State Championships.')
    expect(wrapper.find('.language').text()).toEqual('Language: English')
    expect(wrapper.find('.country').text()).toEqual('Country: USA')
  });

  it('does not display runtime since it is N/A', () => {
    expect(wrapper.find('.runtime').hasClass('d-none')).toEqual(true)
  });

  describe('when close button is clicked', () => {
    beforeEach(() => {
      wrapper.find('button').simulate('click')
    })
    it('should should call closeMovieDetailsModal', () => {
      expect(props.closeMovieDetailsModal).toHaveBeenCalled()
    });
  });
});







