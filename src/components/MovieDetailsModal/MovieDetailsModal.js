import React from 'react'

const MovieDetailsModal = ({selectedMovieDetails, showModal, closeMovieDetailsModal}) => {
  return (
    <div className={`modal fade ${showModal ? 'show' : ''}`} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" onClick={closeMovieDetailsModal}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <img className='movie-image-modal' src={selectedMovieDetails.getPoster()} alt={`${selectedMovieDetails.getTitle()}`} />
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeMovieDetailsModal}>
              <span aria-hidden="true">&times;</span>

            </button>
          </div>
          <section className="modal-body" aria-label={`Movie Details`}>
            <div className='title'>{selectedMovieDetails.getTitle()}</div>
            <div className='year'>{selectedMovieDetails.getYear()}</div>
            <div className='movie-details'>
              <div className={`details rated ${selectedMovieDetails.getRated() !== 'N/A' ? '' : 'd-none'}`}>Rated: {selectedMovieDetails.getRated()}</div>
              <div className={`details released ${selectedMovieDetails.getReleased() !== 'N/A' ? '' : 'd-none'}`}>Released: {selectedMovieDetails.getReleased()}</div>
              <div className={`details runtime ${selectedMovieDetails.getRuntime() !== 'N/A' ? '' : 'd-none'}`}>Runtime: {selectedMovieDetails.getRuntime()}</div>
              <div className={`details genre ${selectedMovieDetails.getGenre() !== 'N/A' ? '' : 'd-none'}`}>Genre: {selectedMovieDetails.getGenre()}</div>
              <div className={`details director ${selectedMovieDetails.getDirector() !== 'N/A' ? '' : 'd-none'}`}>Director: {selectedMovieDetails.getDirector()}</div>
              <div className={`details writer ${selectedMovieDetails.getWriter() !== 'N/A' ? '' : 'd-none'}`}>Writer: {selectedMovieDetails.getWriter()}</div>
              <div className={`details actors ${selectedMovieDetails.getActors() !== 'N/A' ? '' : 'd-none'}`}>Actors: {selectedMovieDetails.getActors()}</div>
              <div className={`details plot ${selectedMovieDetails.getPlot() !== 'N/A' ? '' : 'd-none'}`}>Plot: {selectedMovieDetails.getPlot()}</div>
              <div className={`details language ${selectedMovieDetails.getLanguage() !== 'N/A' ? '' : 'd-none'}`}>Language: {selectedMovieDetails.getLanguage()}</div>
              <div className={`details country ${selectedMovieDetails.getCountry() !== 'N/A' ? '' : 'd-none'}`}>Country: {selectedMovieDetails.getCountry()}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )

}

export default MovieDetailsModal