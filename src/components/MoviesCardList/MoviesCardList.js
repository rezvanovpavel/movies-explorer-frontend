import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {

  const location = useLocation();

  return (
    <section className="moviescardlist">
      <div className = "moviescardlist__container">
        <div className="moviescardlist__cards">
          {props.cards.map((card) => (<MoviesCard key={card.id} image={card.image} description={card.description} duration={card.duration}/>))}
        </div>
        <div className="moviescardlist__button-container">
          {location.pathname === "/movies" && (<button className="moviescardlist__button" type="button">Ещё</button>)}
        </div>
      </div>
    </section>        
  );
}

export default MoviesCardList;
