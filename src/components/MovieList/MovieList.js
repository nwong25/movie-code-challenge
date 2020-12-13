import React, {Component} from 'react';
import {getMovieList, getMovieDetails } from '../../httpRequests'
import MovieResultsContainer from "../MovieResultContainer/MovieResultContainer";
import MovieDetailsModal from "../MovieDetailsModal/MovieDetailsModal";


class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieResults: [],
      selectedMovieDetails: null,
      error: null,
      showModal: false
    }
  }

  async componentDidMount() {
    await getMovieList({searchTerm:'Coach', observer: this})
  }

 /*------------- Observer Callbacks for getMovieList -------------*/
  receiveMovieResults(movieResults){
    this.setState({
      movieResults
    })
  }
  errorReceivingMovieResults(error){
    this.setState({
      error
    })
  }

  /*------------- Callbacks for getMovieDetails -------------*/
  receiveMovieDetails(movieDetails){
    this.setState({
      selectedMovieDetails: movieDetails
    })
  }

  errorReceivingMovieDetails(error){
    this.setState({
      error
    })
  }

  /*------------- Private -------------*/
  async _getSelectedMovieDetails({movie, observer}){
    await getMovieDetails({imdbID: movie.getImdbID(), observer})
  }

  _showMovieDetailsModal = () => {
    this.setState({
      showModal: true
    })
  }

  _closeMovieDetailsModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    const {movieResults, selectedMovieDetails, showModal} = this.state
    return (
      <div className='movie-list-section'>
        <h2>Movie List</h2>
        <div className='search-results-container'>
          {
            movieResults.map((movie) =>
              <MovieResultsContainer
                key={movie.getImdbID()}
                movie={movie}
                getSelectedMovieDetails={this._getSelectedMovieDetails}
                showMovieDetailsModal={this._showMovieDetailsModal}
                observer={this}
              />
            )
          }
        </div>
        {selectedMovieDetails &&
          <MovieDetailsModal
            selectedMovieDetails={selectedMovieDetails}
            showModal={showModal}
            closeMovieDetailsModal={this._closeMovieDetailsModal}
          />
        }
      </div>
    );
  }
}

export default MovieList;
