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
        <p className="aboutme__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <a className="aboutme__link" href="https://github.com/rezvanovpavel" target="_blank" rel="noreferrer">Github</a>
    </div>
    <img className="aboutme__avatar" src={avatar} alt="Аватар"></img>
  </section>
  );
}
  
export default AboutMe;