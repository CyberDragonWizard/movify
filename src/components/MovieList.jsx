import React from 'react';
import './MovieList.css';
import Zoom from 'react-reveal/Zoom';

const MovieList = (props) => {

  return (
    <>
      {(props.movies || []).map((movie) => (
        <Zoom duration={450}>
        <div className='movie-list'>
          <img className='images'
           src={movie.Poster === "N/A" ? 'https://i.postimg.cc/7P7D12mK/Movie-Poster-Template-Movie-Credits-Studio-Binder-jpg.webp' : movie.Poster}
           alt='movie'></img>
          <button
            className='overlay d-flex align-items-center justify-content-center'
            onClick={() => props.handleNominationsClick(movie)}
            disabled={(props || []).checkForBoth().includes(movie.imdbID) ? true : false}
          >
            <div>
              <span className='mr-2'>Add '{movie.Title}' to Nominations</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
          </button>
        </div>
        </Zoom>
      ))}
    </>
  );
};

export default MovieList;

