import "./MoviesCard.css";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {

  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  const cardLikeButtonClassName = `moviesсard__button ${isLiked ? "moviesсard__button_active" : "moviesсard__button_disabled"}`;
    
  function handleLikeClick() {
    setIsLiked(!isLiked);
  }    
      
  return (
    <article className="moviesсard">
      <img className="moviesсard__image" src={props.image} alt={props.description} />
      <div className="moviesсard__container">
        <h2 className="moviesсard__title">{props.description}</h2>
        {location.pathname === "/movies" && (<button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>)}
        {location.pathname === "/saved-movies" && (<button className="moviesсard__button moviesсard__button_type_delete" type="button"></button>)}
      </div>
      <span className="moviesсard__duration">{props.duration}</span>
    </article>
  );
}

export default MoviesCard;
