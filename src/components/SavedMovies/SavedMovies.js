import "./SavedMovies.css";
import React from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';
import { useState, useCallback,useEffect } from "react";

function SavedMovies(props) {

  const [isShortMovie, setIsShortMovie] = useState(false);
  const [searchInputData, setSearchInputData] = useState('');
  const [filterArrayMovies, setFilterArrayMovies] = useState([]);

  const filterMoviesLength = useCallback((search, isShortMovie, movies) => {
    setSearchInputData(search);
    setFilterArrayMovies(movies.filter((movie) => {
      const searchInputText = movie.nameRU.toLowerCase().includes(search.toLowerCase());
      return isShortMovie ? (searchInputText && movie.duration <= 40) : searchInputText
    }));
  }, []);

  function handleMoviesSearch(search) {
    filterMoviesLength(search, isShortMovie, props.savedMovies);
  };

  function switchShort() {
    if (isShortMovie) {
      setIsShortMovie(false);
      filterMoviesLength(searchInputData, false, props.savedMovies);
    } else {
      setIsShortMovie(true);
      filterMoviesLength(searchInputData, true, props.savedMovies);
    };
  };

  useEffect(() => {
    filterMoviesLength(searchInputData, isShortMovie, props.savedMovies);
  }, [filterMoviesLength, props.savedMovies, isShortMovie, searchInputData]);

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <main className="savedmovies">
        <SearchForm handleMoviesSearch={handleMoviesSearch} switchShort={switchShort} savedMovies={props.savedMovies} isShortMovie={isShortMovie} searchInputData={searchInputData}/>
        <MoviesCardList filterArrayMovies={filterArrayMovies} onMovieDelete={props.onMovieDelete}/>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;