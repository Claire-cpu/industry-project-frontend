import { Link } from "react-router-dom";
import trophy from "../../assets/icons/trophy.jpeg";
import "./FinishModal.scss";

function FinishModal() {
  return (
    <div className="finish-modal">
      <div className="finish-modal__content">
        <img src={trophy} alt="trophy" className={`finish-modal__trophy`} />
        <div className="finish-modal__body">
          <h2 className="finish-modal__header">
            🚀 Mission Complete: AI Business Strategist! 🎉
          </h2>
          <p className="finish-modal__text">
            You’ve successfully completed the{" "}
            <strong>Microsoft AI Trivia</strong>, earning{" "}
            <strong>50 points</strong> and unlocking the full potential of AI
            for businesses!
          </p>

          <h3 className="finish-modal__subheader">
            Key AI Business Insights You’ve Gained:
          </h3>
          <ul className="finish-modal__list">
            <li className="finish-modal__list-item">
              ✅ <strong>Microsoft Copilot</strong> enhances productivity in
              Microsoft 365
            </li>
            <li className="finish-modal__list-item">
              ✅ <strong>Azure</strong> powers AI solutions across industries
            </li>
            <li className="finish-modal__list-item">
              ✅ <strong>Power Automate</strong> streamlines workflows—no coding
              required
            </li>
            <li className="finish-modal__list-item">
              ✅ <strong>AI for Accessibility & AI for Earth</strong> drive
              social and environmental impact
            </li>
            <li className="finish-modal__list-item">
              ✅ <strong>Microsoft’s Philanthropic Efforts</strong> support
              nonprofits and digital skills training
            </li>
          </ul>

          <h3 className="finish-modal__subheader">What’s Next?</h3>
          <p className="finish-modal__text">
            Now that you’ve seen how{" "}
            <strong>Microsoft AI transforms businesses</strong>, will you take
            the next step?
          </p>
          <div className="finish-modal__button-container">
            <div className="finish-modal__button finish-modal__button--secondary">
              <Link to="/feedback" className="finish-modal__link">
                Any questions? Contact us
              </Link>
            </div>
            <div className="finish-modal__button finish-modal__button--primary">
              <a
                href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiep-Gc1cOLAxUgB3sHHej1IqAYABAAGgJ0bQ&ae=2&aspm=1&co=1&ase=5&gclid=CjwKCAiA8Lu9BhA8EiwAag16b04a6Se4Ku7Ct_jIfA8xTOlBwIhZOeqiIpjbZeatLxY5jyqPaKceSBoCQYcQAvD_BwE&ei=R3qvZ9-lHeGEw8cPjOnU0AU&ohost=www.google.com&cid=CAESVuD2L86MIeV4Dsu04eAFObamZiriZ0yK6saw32xihFzbZkJEcTcrm26-eqZvLoZVA3liu-Mnfh2vo8KG6-3WxJRkKgG3wtlzeqO4df00mUp0WUcxrQDh&sig=AOD64_0BAeAmR3HgpBiVUn9QqxbNKwOcpg&q&sqi=2&adurl&ved=2ahUKEwif5dSc1cOLAxVhwvACHYw0FVoQ0Qx6BAgNEAE"
                className="finish-modal__link"
              >
                🚀 Explore Microsoft AI for Business
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishModal;
