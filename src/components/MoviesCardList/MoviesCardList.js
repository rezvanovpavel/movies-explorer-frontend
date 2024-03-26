import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from 'react';
import * as display from "../../utils/showing.js";


function MoviesCardList(props) {

  const location = useLocation();
  const [isCounting, setIsCounting] = useState('');
  const movies = props.filterArrayMovies.slice(0, isCounting);
  
  function handleAddButtonClick() {
    setIsCounting(isCounting + display.setdDsplayMovies().still);
  }

  useEffect(() => {
      if (location.pathname === "/movies") {
          setIsCounting(display.setdDsplayMovies().movies);

          function resizeDisplay() {
              if (window.innerWidth >= display.Maximum_Width) {
                  setIsCounting(display.setdDsplayMovies().movies)
              }
              if (window.innerWidth < display.Maximum_Width) {
                  setIsCounting(display.setdDsplayMovies().movies)
              }
              if (window.innerWidth < display.Medium_Width) {
                  setIsCounting(display.setdDsplayMovies().movies)
              }
              if (window.innerWidth < display.Minimum_Width) {
                  setIsCounting(display.setdDsplayMovies().movies)
              }
          }

          window.addEventListener("resize", resizeDisplay);
          return () => window.removeEventListener("resize", resizeDisplay);
      }
  }, [location.pathname, props.filterArrayMovies])

  return (
    <section className="moviescardlist">
      <div className = "moviescardlist__container">
        <div className="moviescardlist__cards">
          {props.isLoading ? <Preloader /> : (location.pathname === "/movies" && movies.length !== 0) ? movies.map((movie) => {
                    return (<MoviesCard movie={movie} key={movie.id} onMovieLike={props.onMovieLike} savedMovies={props.savedMovies}/>)           
                }) : props.filterArrayMovies.length !== 0 ? props.filterArrayMovies.map((movie) => {
                        return (<MoviesCard movie={movie} key={movie._id} onMovieDelete={props.onMovieDelete}/>)
                    }) : props.IsError ? <span className="moviescardlist__error">{props.isErrorSearch}</span> : location.pathname === "/movies" && <span className='moviescardlist__error'>Ничего не найдено</span>
          }
        </div>
        <div className="moviescardlist__button-container">
          {location.pathname === "/movies" && (<button className={`moviescardlist__button ${isCounting >= props.filterArrayMovies.length && "moviescardlist__button_hidden"}`} onClick={handleAddButtonClick} type="button">Ещё</button>)}
        </div>
      </div>
    </section>
  );
}

export default MoviesCardList;
