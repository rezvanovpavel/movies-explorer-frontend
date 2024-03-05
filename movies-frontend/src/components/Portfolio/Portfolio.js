import './Portfolio.css';
import React from "react";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com/rezvanovpavel/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт
            <img className="portfolio__arrow" src={arrow} alt="Стрелка"></img>
          </a>
        </li>    
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com/rezvanovpavel/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт
            <img className="portfolio__arrow" src={arrow} alt="Стрелка"></img>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com/rezvanovpavel/react-mesto-api-full-gha" target="_blank" rel="noreferrer">Одностраничное приложение
            <img className="portfolio__arrow" src={arrow} alt="Стрелка"></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;     
            
            
          
            
          
        
             
            
            
            
          
            
          
          
          
            
          
        
        