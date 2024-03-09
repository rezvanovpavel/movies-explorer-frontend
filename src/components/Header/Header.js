import './Header.css';
import logo from '../../images/logo.svg';
import { Link, useLocation} from 'react-router-dom';
import NavAuthorization from '../NavAuthorization/NavAuthorization';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

function Header (props) {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <header className={`header ${location.pathname === '/' ? 'header_type_authorization' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__link">
          <img className="header__logo" src={logo} alt="Лого"></img>
        </Link>
        {loggedIn ? <Navigation /> : <NavAuthorization />}
      </div>
    </header>
  );
};
   
export default Header;





