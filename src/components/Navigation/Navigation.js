import './Navigation.css';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Navigation () {

  const [menu, setMenu] = useState(false);

  const location = useLocation();;

  function handleSwitchMenu () {
    setMenu(!menu)
  };

  return (
    <nav className="navigation">
      <button className={`navigation__menu-button ${(location.pathname === '/movies') || (location.pathname === '/saved-movies') || (location.pathname === '/profile')? 'navigation__menu-button_type_not-main' : ''}`} type="button" onClick={handleSwitchMenu}></button>
      <div className={`navigation__container ${menu ? 'navigation__container_active' : ''}`}>
        <div className="navigation__bar">
          <div className="navigation__list-container">
            <button className="navigation__close-button" type="button" onClick={handleSwitchMenu}></button>
            <ul className="navigation__list">
              <li className="navigation__list-item navigation__list-item_type_main">
                <NavLink to="/" className={({isActive}) => `${isActive ? "navigation__link navigation__link_active" : "navigation__link"}`}>Главная</NavLink>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/movies" className={({isActive}) => `${isActive ? "navigation__link navigation__link_active" : `${(location.pathname === '/') ? 'navigation__link navigation__link_type_authorization' : 'navigation__link'}`}`}>Фильмы</NavLink>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/saved-movies" className={({isActive}) => `${isActive ? "navigation__link navigation__link_active" : `${(location.pathname === '/') ? 'navigation__link navigation__link_type_authorization' : 'navigation__link'}`}`}>Сохранённые фильмы</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/profile" className={`navigation__link navigation__link_type_account ${(location.pathname === '/movies') || (location.pathname === '/saved-movies') || (location.pathname === '/profile')? 'navigation__link_type_not-main' : ''}`}>
            <p className="navigation__text-account">Аккаунт</p>
            <div className="navigation__profile">
                <div className="navigation__profile-icon"></div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;