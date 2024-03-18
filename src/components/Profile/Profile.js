import "./Profile.css";
import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useState,useEffect} from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import useFormsValidation from "../../hook/UseFormsValidation";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormsValidation();
  const [isEdit, setIsEdit] = useState(false);
  const validation = isValid && (values.name !== currentUser.name || values.email !== currentUser.email);

  useEffect(() => {
    resetForm({
      name: currentUser.name,
      email: currentUser.email
    });
  }, [resetForm, currentUser, isEdit]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  function handleClick() {
    setIsEdit(!isEdit);
  }

  function handleLogoutClick() {
    props.onLogout();
  }
  
  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <div className="profile__item">
            <div className="profile__text-input">
              <p className="profile__text">Имя</p>
              <input className="profile__input" value={values.name || ""} onChange={handleChange} type="text" placeholder="Виталий" name="name" minLength="2" maxLength="30" required id="name" disabled={!isEdit}/>
            </div>
            <span className={`profile__error ${!isValid && errors.name ? "profile__error_active" : ""}`}>{errors.name}</span>
          </div>
          <div className="profile__item">
            <div className="profile__text-input">
              <p className="profile__text">Email</p>
              <input className="profile__input" value={values.email || ""} onChange={handleChange} type="email" placeholder="pochta@yandex.ru" name="email" required id="email" disabled={!isEdit}/>
            </div>
            <span className={`profile__error ${!isValid && errors.email ? "profile__error_active" : ""}`}>{errors.email}</span>
          </div>
          {isEdit ? (
            <div className="profile__save">
              {props.isError && <span className="profile__error profile__error_active profile__error_type_total">{props.isErrorProfile}</span>}
              <button className="profile__button-save" type="submit" onClick={handleClick} disabled={!validation}>Сохранить</button>
            </div>
          ) : (
          <>
            <div className="profile__container-button"> 
              <button className="profile__button-edit" type="submit" onClick={handleClick}>Редактировать</button>
              <Link to="/signin" className="profile__link" onClick={handleLogoutClick}>Выйти из аккаунта</Link>
            </div>
          </>
          )}
        </form>
      </section>
    </>
  );
}

export default Profile;