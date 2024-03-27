import React from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';
import moviesApi from "../../utils/MoviesApi";
import { useState,useEffect, useCallback } from 'react';
import LIMIT_DURATION_MOVIE from "../../utils/constants.js";

function Movies(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [arrayMovies, setArrayMovies] = useState([]);
  const [searchInputData, setSearchInputData] = useState('');
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [filterArrayMovies, setFilterArrayMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isErrorSearch, setIsErrorSearch] = useState('');

  const filterMoviesLength = useCallback((search, isShortMovie, movies) => {
    setSearchInputData(search);
    localStorage.setItem("text", JSON.stringify(search));
    localStorage.setItem("shorts", JSON.stringify(isShortMovie));
    localStorage.setItem("movies", JSON.stringify(movies));

    setFilterArrayMovies(movies.filter((movie) => {
      const searchInputText = movie.nameRU.toLowerCase().includes(search.toLowerCase());
      return isShortMovie ? (searchInputText && movie.duration <= LIMIT_DURATION_MOVIE) : searchInputText
    }));
  }, []);

  function handleMoviesSearch(search) {
    if (arrayMovies.length === 0) {
      setIsLoading(true);
      
      moviesApi.getMovies()
        .then((res) => {
          setArrayMovies(res);
          setIsShortMovie(false);
          setIsError(false);
          setIsErrorSearch("");
          filterMoviesLength(search, isShortMovie, res);
        })
        .catch((err) => {
          setIsError(true);
          if (Number(err.substr(err.length - 3)) === 500) {
            setIsErrorSearch("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
          };
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      filterMoviesLength(search, isShortMovie, arrayMovies);
    };
  };

  function switchShort() {
    if (isShortMovie) {
      setIsShortMovie(false);
      filterMoviesLength(searchInputData, false, arrayMovies);
    } else {
      setIsShortMovie(true);
      filterMoviesLength(searchInputData, true, arrayMovies);
    };
  };

  useEffect(() => {
    if (localStorage.movies && localStorage.shorts && localStorage.text) {
      const movies = JSON.parse(localStorage.movies);
      const search = JSON.parse(localStorage.text);
      const isShortMovie = JSON.parse(localStorage.shorts);

      setIsError(false);
      setIsErrorSearch("");
      setArrayMovies(movies);
      setSearchInputData(search);
      setIsShortMovie(isShortMovie);
      filterMoviesLength(search, isShortMovie, movies);
    }
  }, [filterMoviesLength]);

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <main className="movies">
        <SearchForm handleMoviesSearch={handleMoviesSearch} switchShort={switchShort} searchInputData={searchInputData} isShortMovie={isShortMovie} /> 
        <MoviesCardList savedMovies={props.savedMovies} onMovieLike={props.onMovieLike} isLoading={isLoading} filterArrayMovies={filterArrayMovies} isError={isError} isErrorSearch={isErrorSearch} /> 
      </main>
      <Footer />
    </>
  );
}

export default Movies;