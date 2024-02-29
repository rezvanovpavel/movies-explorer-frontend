import './Footer.css';
import React from 'react';

function Footer() {
  return (
  <footer className="footer">
    <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
    <div className="footer__container">
      <p className="footer__copyright">&copy; 2023</p>
        <nav className="footer__menu">
          <ul className="footer__list">
            <li className="footer__list-item">
              <a className="footer__list-link" href="https://practicum.yandex.ru/web" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link" href="https://github.com/rezvanovpavel" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </nav>
    </div>
  </footer>
  );
}
  
export default Footer;