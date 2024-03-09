import "./AboutProject.css";
import React from "react";

function AboutProject() {
  return (
  <section className="aboutproject" id="aboutproject">
    <div className="aboutproject__container">
      <h2 className="aboutproject__title">О проекте</h2>
      <ul className="matrix">
        <li className="matrix__cell">
          <h3 className="matrix__heading">Дипломный проект включал 5 этапов</h3>
          <p className="matrix__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="matrix__cell">
          <h3 className="matrix__heading">На выполнение диплома ушло 5 недель</h3>
          <p className="matrix__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="schedule">
        <div className="schedule__back">
          <h4 className="schedule__title schedule__title_type_one-week">1 неделя</h4>
          <p className="schedule__text">Back-end</p>
        </div>
        <div className="schedule__front">
          <h4 className="schedule__title schedule__title_type_four-week">4 недели</h4>
          <p className="schedule__text">Front-end</p>
        </div>
      </div>
    </div>
  </section>
  );
}
  
export default AboutProject;