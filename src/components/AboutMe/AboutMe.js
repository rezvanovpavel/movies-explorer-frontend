import "./AboutMe.css";
import React from "react";
import avatar from "../../images/avatar.jpg";

function AboutMe() {
  return (
  <section className="aboutme">
    <h2 className="aboutme__title">Студент</h2>
    <div className="aboutme__container">
        <h3 className="aboutme__heading-name">Павел</h3>
        <h4 className="aboutme__heading-profession">Фронтенд-разработчик, 23 года</h4>
        <p className="aboutme__text">Я живу в Москве, заканчиваю факультет ИФ ПМГМУ. Женат. Я люблю программировать и писать стихи. Работаю в лаборатории биоинформатики и фармакологического моделирования, занимаюсь Data Science и Веб-разработкой. Мечтаю стать настоящим профессионалом своего дела.</p>
        <a className="aboutme__link" href="https://github.com/rezvanovpavel" target="_blank" rel="noreferrer">Github</a>
        <img className="aboutme__avatar" src={avatar} alt="Аватар"></img>
    </div>
  </section>
  );
}
  
export default AboutMe;