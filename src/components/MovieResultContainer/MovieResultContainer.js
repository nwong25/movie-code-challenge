const MovieResultsContainer = ({movie, getSelectedMovieDetails, observer, showMovieDetailsModal }) => {
  return (
    <button className='movie-result-container' onClick={() => {
      getSelectedMovieDetails({movie, observer})
      showMovieDetailsModal()
    }}>
      <h3>{movie.getTitle()}</h3>
      <div className='movie-year'>{movie.getYear()}</div>
      <div className='image-container'>
        <img className='movie-image' src={movie.getPoster()} alt={`${movie.getTitle()}`} />
      </div>
    </button>
  )
}

export default MovieResultsContainer