import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import NominationList from './components/NominationList';
import RemoveNomination from './components/RemoveNomination'
import Header from './components/Header';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [nominations, setNominations] = useState([]);

  const movieRequest = async (search) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=98e3fb1f`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  }

  useEffect(() => {
    movieRequest(search);
  }, [search]);

  useEffect(() => {
    const movieNomanies = JSON.parse(
      localStorage.getItem('react-movify-nomanies'));
      setNominations(movieNomanies);
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movify-nomanies', JSON.stringify(items));
  }

  const addNominatedMovie = (movie) => {
    const newNominationList = [...nominations, movie];
    setNominations(newNominationList);
    saveToLocalStorage(newNominationList);
  }

  const removeNominatedMovie = (movie) => {
		const newNominationList = nominations.filter(
			(nomination) => nomination.imdbID !== movie.imdbID
		);

		setNominations(newNominationList);
    saveToLocalStorage(newNominationList);

	};

  const checkForBoth = () => {
    return nominations.map(o => o.imdbID);
   
  }


  return (
    <div>
        <Hero/>
      <div className='movies'>
      <Search
          search={search}
          setSearch={setSearch}
        />
        <MovieList
          checkForBoth={checkForBoth}
          nominations={nominations}
          movies={movies}
          handleNominationsClick={addNominatedMovie}
        />
        <div className='nominations'>
        <NominationList
        nominations={RemoveNomination} 
        movies={nominations}
        handleNominationsClick={removeNominatedMovie}
        />
      </div>
      </div>
    </div>
  );
}

export default App;
