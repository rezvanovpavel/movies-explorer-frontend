import './NavAuthorization.css';
import { Link } from 'react-router-dom';

function NavAuthorization() {
  return (
    <nav className="menu-authorization">
      <ul className="menu-authorization__list">
        <li className="menu-authorization__list-item">
          <Link to="/signup" className="menu-authorization__link">Регистрация</Link>
        </li>
        <li className="menu-authorization__list-item">
          <Link to="/signin" className="menu-authorization__link menu-authorization__link_type_signin">Войти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavAuthorization;