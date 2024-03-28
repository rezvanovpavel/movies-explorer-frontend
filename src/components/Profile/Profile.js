import "./Profile.css";
import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useEffect} from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import useValidation from "../../hook/useValidation";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useValidation();

  useEffect(() => {
    resetForm({
      name: currentUser.name,
      email: currentUser.email
    });
  }, [resetForm, currentUser, props.isEdit]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  function handleClick() {
    props.handleClickEdit();
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
              <input className="profile__input" value={values.name || ""} onChange={handleChange} type="text" placeholder="Виталий" name="name" minLength="2" maxLength="30" required id="name" disabled={!props.isEdit}/>
            </div>
            <span className={`profile__error ${!isValid && errors.name ? "profile__error_active" : ""}`}>{errors.name}</span>
          </div>
          <div className="profile__item">
            <div className="profile__text-input">
              <p className="profile__text">Email</p>
              <input className="profile__input" value={values.email || ""} onChange={handleChange} type="email" placeholder="pochta@yandex.ru" name="email" required id="email" disabled={!props.isEdit} pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$" />
            </div>
            <span className={`profile__error ${!isValid && errors.email ? "profile__error_active" : ""}`}>{errors.email}</span>
          </div>
          {props.isEdit ? (
            <div className="profile__save">
              {props.isError && <span className="profile__error profile__error_active profile__error_type_total">{props.isErrorProfile}</span>}
              <button className={`profile__button-save ${!isValid ? "profile__button-save_disabled" : ""}`} type="submit" disabled={!isValid && props.isError}>Сохранить</button>
            </div>
          ) : (
          <>
            {props.isSuccessful && <span className='profile__successful'> {props.successful()} Данные успешно сохранены</span>}
            <div className="profile__container-button"> 
              <button className="profile__button-edit" type="button" onClick={handleClick}>Редактировать</button>
            </div>
          </>
          )}
        </form>
        {!props.isEdit && (<Link to="/signin" className="profile__link" onClick={handleLogoutClick}>Выйти из аккаунта</Link>)}
      </section>
    </>
  );
}

export default Profile;