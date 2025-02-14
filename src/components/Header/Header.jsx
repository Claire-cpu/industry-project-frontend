import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <a href="https://www.microsoft.com/en-ca/" target={"_blank"}>
        <img
          className="header__logo"
          src="https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png"
        />
      </a>
    </header>
  );
}

export default Header;
