import "./Register.css";
import logo from '../../images/logo.svg';
import React from "react";
import { Link } from "react-router-dom";

function Register() {

  return (
    <section className="register">
      <Link to="/" className="register__link-logo">
        <img className="register__logo" src={logo} alt="Лого"></img>
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
          <div className="register__item">
            <p className="register__item-text">Имя</p>
            <input className="register__input" type="text" placeholder="Виталий" name="name" minLength="2" maxLength="30" required id="name"/>
            <span className="register__error register__error_active">Что-то пошло не так...</span>
          </div>
          <div className="register__item">
            <p className="register__item-text">E-mail</p>
            <input className="register__input" type="email" placeholder="pochta@yandex.ru" name="email" required id="email"/>
            <span className="register__error register__error_active">Что-то пошло не так...</span>
          </div>
          <div className="register__item">
            <p className="register__item-text">Пароль</p>
            <input className="register__input" type="text" name="password" required id="password"/>
            <span className="register__error register__error_active">Что-то пошло не так...</span>
          </div>
      </form>
      <div className="register__container-button"> 
          <button className="register__button-register" type="submit">Зарегистрироваться</button>
          <div className="register__entrance">
            <p className="register__link-description">Уже зарегистрированы?</p>
            <Link to="/signin" className="register__link-signin">Войти</Link>
          </div>
      </div>
    </section>
  );
}

export default Register;