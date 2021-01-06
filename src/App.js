
import './App.css';
import MovieList from './components/MovieList';
import { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import Movie from './components/Movie';


function App() {
  const [movies, setMovies] = useState([]);
  const [SearchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovies = async (SearchValue) => {

    const url = `http://www.omdbapi.com/?s=${SearchValue}&apikey=f441d06c`;

    const response = await fetch(url);
    const responseJson = await response.json();
    // console.log(responseJson);
    if (responseJson.Search)
      setMovies(responseJson.Search);




  }

  useEffect(() => {

    return () => {
      getMovies(SearchValue);
    }
  }, [SearchValue]);

  useEffect(() => {
    const favouriteMovies = JSON.parse(localStorage.getItem('favourite-movie'));
    setFavourites(favouriteMovies);
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favourite-movie', JSON.stringify(items));
  }
  const addFavoriteMovie = (movie) => {
    if (!favourites.includes(movie)) {
      const newFavoriteList = [...favourites, movie];
      setFavourites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    }

  }
  const removeFavouriteMovie = (movie) => {
    const newFavourteList = favourites.filter((favorite) => favorite.imdbID !== movie.imdbID);
    setFavourites(newFavourteList);
    saveToLocalStorage(newFavourteList);
  }
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies"></MovieListHeading>
        <SearchBox SearchValue={SearchValue} setSearchValue={setSearchValue}></SearchBox>
      </div>
      <div className="row">
        <MovieList movies={movies} handleFavouriteClick={addFavoriteMovie} fav={true} ></MovieList>
        {/* <Movie></Movie> */}
      </div>

      <div className="row d-flex align-items-center">
        <MovieListHeading heading="Favourites"></MovieListHeading>

      </div>
      <div className="row">
        <MovieList movies={favourites} handleremoveFavouriteClick={removeFavouriteMovie} fav={false} ></MovieList>
      </div>

    </div>
  );
}

export default App;
