import { useState, useEffect } from "react";
import closeWindow from "../../assets/icons/close-24px.svg";
import rocket from "../../assets/icons/rocket.svg";
import landing from "../../assets/icons/landing.svg";
import correct from "../../data/correct.json";
import incorrect from "../../data/incorrect.json";

import "./AnswerModal.scss";

function AnswerModal({ isCorrect }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const messages = isCorrect
      ? correct.correct_messages
      : incorrect.incorrect_messages;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  }, [isCorrect]);

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close">
          <img
            src={closeWindow}
            alt="close window"
            className="modal__close-icon"
          />
        </button>
        <img
          src={isCorrect ? rocket : landing}
          alt="animation"
          className={`modal__rocket ${
            isCorrect ? "modal__rocket--correct" : "modal__rocket--incorrect"
          }`}
        />
        <h3 className="modal__body">{message}</h3>
      </div>
    </div>
  );
}

export default AnswerModal;
