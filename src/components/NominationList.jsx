import React from 'react';
import Fade from 'react-reveal/Fade';

const NominationList = (props) => {

  const AddNominations = props.nominations;

  return (
    <div className='nomination-list'>
      <Fade delay={1000}>
        <h3>Your Nominations</h3>
      </Fade>
      <>
        {(props.movies || []).map((movie) => (
          <div>
            <Fade left duration={400}>
              <li>{movie.Title}, {movie.Year}
                <div
                  onClick={() => props.handleNominationsClick(movie)}
                >
                  <AddNominations />
                </div>
              </li>
              </Fade>
          </div>
        ))}
      </>
      { 
      
      (props.movies.length <= 4)
        ? <div></div>
        : <div class='open-banner'> You have reached the minimum number of nominations needed. </div>
        
    }
    </div>
  );
};


export default NominationList
