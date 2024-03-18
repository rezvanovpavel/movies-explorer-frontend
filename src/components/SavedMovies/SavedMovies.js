import "./SavedMovies.css";
import React from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import savedMoviesCards from "../../utils/SavedMoviesCards";
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <main className="savedmovies">
        <SearchForm />
        <MoviesCardList cards={savedMoviesCards} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;