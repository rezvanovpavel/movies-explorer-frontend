import "./Promo.css";
import React from "react";
import logo from "../../images/landing.svg";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
  <section className="promo">
    <div className="promo__container">
      <h1 className="promo__title">Учебный проект студента факультета <br className="promo__indent"/> Веб-разработки.</h1>
      <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <NavTab />
      <img className="promo__logo" src={logo} alt="Логотип лендинга" />
    </div>
    
  </section>
  );
}
  
export default Promo;