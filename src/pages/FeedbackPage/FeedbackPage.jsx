import "./FeedbackPage.scss";
import { useNavigate } from "react-router";
import axios from "axios";

function FeedbackPage() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  console.log(baseURL);
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/");
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const industry = form.industry.value;
    const feedback = form.feedback.value;
    const data = { name, email, industry, feedback };
    console.log(data);
    try {
      const response = await axios.post(`${baseURL}/feedback`, data);
      console.log(response);
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="form__wrapper">
      <form onSubmit={handleFormSubmit}>
        <section className="feedback__form">
          <img
            className="feedback__logo"
            src="https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png"
          />

          <div className="feedback__box">
            <label htmlFor="name" className="feedback__label">
              Name
            </label>
            <input
              className="feedback__input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="feedback__box">
            <label htmlFor="email" className="feedback__label">
              Email
            </label>
            <input
              className="feedback__input"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="feedback__box">
            <label htmlFor="industry" className="feedback__label">
              What industry are you in?
            </label>
            <input
              className="feedback__input"
              type="text"
              name="industry"
              id="industry"
              placeholder="Enter your industry name"
            />
          </div>
          <div className="feedback__box">
            <label htmlFor="feedback" className="feedback__label">
              Please explain the concerns you have about using AI
            </label>
            <textarea
              className="feedback__text"
              type="text"
              name="feedback"
              id="concerns"
            ></textarea>
          </div>

          <div className="feedback__buttons">
            <button
              type="button"
              className="feedback__button feedback__button--cancel"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              className="feedback__button feedback__button--submit "
              type="submit"
            >
              Submit
            </button>
          </div>
        </section>
      </form>
    </main>
  );
}

export default FeedbackPage;
