import React, {useState} from 'react';
import './Search.css';
import Fade from 'react-reveal/Fade';

const Search = (props) => {

    const [movieTitle, setMovieTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setSearch(movieTitle);
        setMovieTitle("");
      };

    return (
        <div className='center-block' id='movies'>
            <Fade top>
            <form onSubmit={handleSubmit}>
                <input
                    className='search-bar'
                    placeholder='Search'
                    type="text"
                    value={props.value}
                    onChange={(e) => setMovieTitle(e.target.value)}
                >
                </input>
            </form>
            </Fade>
        </div>
    )
}

export default Search;