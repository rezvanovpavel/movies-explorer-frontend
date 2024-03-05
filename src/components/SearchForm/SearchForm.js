import "./SearchForm.css";
import React from "react";

function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform__form">
        <div className="searchform__container">
          <input className="searchform__input" type="text" minLength="1" placeholder="Фильм" required/>
          <button className="searchform__submit-button" type="submit">Найти</button>
        </div>    
        <div className="searchform__checkbox">
          <input className="searchform__checkbox-input" type="checkbox" id="checkbox" name="checkbox"></input>
          <span className="searchform__checkbox-text">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
