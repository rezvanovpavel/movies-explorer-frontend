import "./MoviesCard.css";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {

  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const movieLikeButtonClassName = `moviesсard__button ${isLiked ? "moviesсard__button_active" : "moviesсard__button_disabled"}`;
    
  useEffect(() => {
      if (location.pathname === "/movies")
          setIsLiked(props.savedMovies.some(m => props.movie.id === m.movieId))
  }, [props.savedMovies, props.movie.id, setIsLiked, location.pathname]);

  function duration(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return (hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`);
  };

  function handleLikeClick() {
      if (props.savedMovies.some(m => props.movie.id === m.movieId)) {
          setIsLiked(false);
          props.onMovieLike(props.movie)
      } else {
          setIsLiked(true)
          props.onMovieLike(props.movie)
      }
  }
      
  return (
    <article className="moviesсard">
      <a href={props.movie.trailerLink} rel="noreferrer" target='_blank'><img className="moviesсard__image" src={location.pathname === "/movies" ? `https://api.nomoreparties.co${props.movie.image.url}` : props.movie.image} alt={props.movie.nameRU}/></a>        
      <div className="moviesсard__container">
        <h2 className="moviesсard__title">{props.movie.nameRU}</h2>
        {location.pathname === "/movies" && (<button className={movieLikeButtonClassName} type="button" onClick={handleLikeClick}></button>)}
        {location.pathname === "/saved-movies" && (<button className="moviesсard__button moviesсard__button_type_delete" onClick={() => props.onMovieDelete(props.movie)} type="button"></button>)}
      </div>
      <span className="moviesсard__duration">{duration(props.movie.duration)}</span>
    </article>
  );
}

export default MoviesCard;
