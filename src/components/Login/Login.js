import "./Login.css";
import logo from '../../images/logo.svg';
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useValidation from "../../hook/useValidation";

function Login(props) {

  const { values, handleChange, errors, isValid, resetForm } = useValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit (e) {
    e.preventDefault();
    props.onSubmit({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <section className="login">
      <Link to="/" className="login__link-logo">
        <img className="login__logo" src={logo} alt="Лого"></img>
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit} noValidate>
          <div className="login__item">
            <p className="login__item-text">E-mail</p>
            <input className="login__input" type="email" placeholder="pochta@yandex.ru" name="email" required id="email" value={values.email || ""} onChange={handleChange} />
            <span className={`login__error ${!isValid && errors.email ? "login__error_active" : ""}`}>{errors.email || ""}</span>
          </div>
          <div className="login__item">
            <p className="login__item-text">Пароль</p>
            <input className="login__input" type="text" name="password" required id="password" placeholder="••••••••••••••" value={values.password || ""} onChange={handleChange} />
            <span className={`login__error ${!isValid && errors.password ? "login__error_active" : ""}`}>{errors.password || ""}</span>
          </div>
          <div className="login__button-error">
            {props.isError && <span className="login__error login__error_active login__error_type_total">{props.isErrorLogin}</span>}
            <button className={`login__button-login ${!isValid ? "login__button-login_disabled" : ""}`} type="submit" disabled={!isValid}>Войти</button>
          </div>
      </form>
      <div className="login__container"> 
          <div className="login__entrance">
            <p className="login__link-description">Ещё не зарегистрированы?</p>
            <Link to="/signup" onClick={props.handleClickLoginLink} className="login__link-signup">Регистрация</Link>
          </div>
      </div>
    </section>
  );
}

export default Login;