import "./Play.scss";
import play from "../../assets/icons8-xbox-50.png";
import { Link } from "react-router-dom";

function Play() {
  return (
    <section className="play">
      <div className="play__content">
        <div className="play__text">
          <h3>Test your AI knowledge!</h3>
          <p>Learn about AI in an ineractive way and earn badges!!!</p>
        </div>
        <div className="play__button">
          <Link className="play__link" to="/play">
            Lets Play
          </Link>
        </div>
      </div>
      <div className="play__logo">
        <img src={play} />
      </div>
    </section>
  );
}

export default Play;
