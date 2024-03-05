import "./Profile.css";
import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile() {

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <div className="profile__item">
            <p className="profile__text">Имя</p>
            <input className="profile__input" type="text" placeholder="Виталий" name="name" minLength="2" maxLength="30" required id="name"/>
          </div>
          <div className="profile__item">
            <p className="profile__text">Email</p>
            <input className="profile__input" type="email" placeholder="pochta@yandex.ru" name="email" required id="email"/>
          </div>
        </form>
        <div className="profile__container-button"> 
          <button className="profile__button-edit" type="submit">Редактировать</button>
          <Link to="/" className="profile__link">Выйти из аккаунта</Link>
        </div>
      </section>
    </>
  );
}

export default Profile;