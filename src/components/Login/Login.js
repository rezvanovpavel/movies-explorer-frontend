import "./Login.css";
import logo from '../../images/logo.svg';
import React from "react";
import { Link } from "react-router-dom";

function Login() {

  return (
    <section className="login">
      <Link to="/" className="login__link-logo">
        <img className="login__logo" src={logo} alt="Лого"></img>
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
          <div className="login__item">
            <p className="login__item-text">E-mail</p>
            <input className="login__input" type="email" placeholder="pochta@yandex.ru" name="email" required id="email"/>
            <span className="login__error login__error_active">Что-то пошло не так...</span>
          </div>
          <div className="login__item">
            <p className="login__item-text">Пароль</p>
            <input className="login__input" type="text" name="password" required id="password" placeholder="••••••••••••••"/>
            <span className="login__error register__error_active">Что-то пошло не так...</span>
          </div>
      </form>
      <div className="login__container-button"> 
          <button className="login__button-register" type="submit">Войти</button>
          <div className="login__entrance">
            <p className="login__link-description">Ещё не зарегистрированы?</p>
            <Link to="/signin" className="login__link-signup">Регистрация</Link>
          </div>
      </div>
    </section>
  );
}

export default Login;