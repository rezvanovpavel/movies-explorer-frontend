import React from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesCards from "../../utils/MoviesCards";
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList cards={moviesCards} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;