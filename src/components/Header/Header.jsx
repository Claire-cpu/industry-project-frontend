import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" >
          <img
            src="https://static.cdnlogo.com/logos/m/6/microsoft.svg"
            alt="Microsoft Logo"
            className="logo"
          />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/play" className="header__link">
        <p className="nav-link">
          Play The Game
        </p>
        </Link>
        <span className="divider">|</span>
        <Link to="/feedback" className="header__link">
        <p className="nav-link">
          Let Us Help
        </p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
