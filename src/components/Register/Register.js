import "./Register.css";
import logo from '../../images/logo.svg';
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useFormsValidation from "../../hook/UseFormsValidation";


function Register(props) {

  const { values, handleChange, errors, isValid, resetForm } = useFormsValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return (
    <section className="register">
      <Link to="/" className="register__link-logo">
        <img className="register__logo" src={logo} alt="Лого"></img>
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit} noValidate>
          <div className="register__item">
            <p className="register__item-text">Имя</p>
            <input className="register__input" type="text" placeholder="Виталий" name="name" minLength="2" maxLength="30" required id="name" value={values.name || ""} onChange={handleChange} autoComplete="off"/>
            <span className={`register__error ${!isValid && errors.name ? "register__error_active" : ""}`}>{errors.name}</span>
          </div>
          <div className="register__item">
            <p className="register__item-text">E-mail</p>
            <input className="register__input" type="email" placeholder="pochta@yandex.ru" name="email" required id="email" value={values.email || ""} onChange={handleChange} autoComplete="off"/>
            <span className={`register__error ${!isValid && errors.email ? "register__error_active" : ""}`}>{errors.email}</span>
          </div>
          <div className="register__item">
            <p className="register__item-text">Пароль</p>
            <input className="register__input" type="text" placeholder="••••••••••••••" name="password" required id="password" value={values.password || ""} onChange={handleChange} autoComplete="off" />
            <span className={`register__error ${!isValid && errors.password ? "register__error_active" : ""}`}>{errors.password}</span>
          </div>
          <div className="register__button-error">
            {props.isError && <span className="register__error register__error_active register__error_type_total">{props.isErrorRegister}</span>}
            <button className="register__button-register" type="submit" disabled={!isValid}>Зарегистрироваться </button>
          </div>
      </form>
      <div className="register__container"> 
          <div className="register__entrance">
            <p className="register__link-description">Уже зарегистрированы?</p>
            <Link to="/signin" className="register__link-signin">Войти</Link>
          </div>
      </div>
    </section>
  );
}

export default Register;