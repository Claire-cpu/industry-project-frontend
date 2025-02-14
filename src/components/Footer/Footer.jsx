import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Concerns About AI?</p>
      <Link to="/feedback" className="footer__link">
        Submit Feedback
      </Link>
    </footer>
  );
}

export default Footer;
