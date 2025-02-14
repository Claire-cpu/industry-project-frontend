import "./Header.scss"; 

const Header = () => {
  return (
    <header className="header">

      <div className="logo-container">
        <img
          src="https://static.cdnlogo.com/logos/m/6/microsoft.svg"
          alt="Microsoft Logo"
          className="logo"
        />
      </div>

      <nav className="nav-links">
        <a href="/" className="nav-link">
          Play The Game
        </a>
        <span className="divider">|</span>
        <a href="/about" className="nav-link">
          Let Us Help
        </a>
      </nav>
    </header>
  );
};

export default Header;
