import "./SearchForm.css";
import React from "react";
import { useLocation } from 'react-router-dom';
import useValidation from '../../hook/useValidation';
import { useEffect } from 'react';

function SearchForm(props) {

  const location = useLocation();
  const { values, handleChange, resetForm, errors } = useValidation();

  function handleSubmit(evt) {
      evt.preventDefault();
      props.handleMoviesSearch(evt.target.search.value);
  };

  useEffect(() => {
      if ((location.pathname === "/saved-movies" && props.savedMovies.length === 0)) {
          resetForm({ search: '' });
      } else {
          resetForm({ search: props.searchInputData });
      }
  }, [props.searchInputData, resetForm, location.pathname, props.savedMovies]);

  return (
    <section className="searchform">
      <form className="searchform__form" onSubmit={handleSubmit} noValidate>
        <div className="searchform__container">
          <input className="searchform__input" type="text" minLength="1" placeholder="Фильм" required value={values.search || ''} onChange={(evt) => {handleChange(evt)}} name='search'/>
          <span className="searchform__error">{errors.search || ''}</span>
          <button className={`searchform__submit-button ${props.savedMovies ? (location.pathname === "/saved-movies" && props.savedMovies.length === 0) : ''}`} type="submit">Найти</button>
        </div>    
        <div className="searchform__checkbox">
          <input className="searchform__checkbox-input" onChange={props.switchShort} type="checkbox" id="checkbox" name="checkbox" checked={props.isShortMovie}></input>
          <span className="searchform__checkbox-text">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
