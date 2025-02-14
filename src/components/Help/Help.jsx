import "./Help.scss";
import help from "../../assets/icons8-get-help-48.png";
import { Link } from "react-router-dom";

function Help() {
  return (
    <section className="help">
      <div className="help__logo">
        <img src={help} />
      </div>
      <div className="help__content">
        <div className="help__text">
          <h3>Let us help!</h3>
          <p>Our team is here to help you embrace AI with your business.</p>
        </div>
        <div className="help__button">
          <Link className="help__link" to="/feedback">
            Connect today
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Help;
