import { useState, useEffect } from "react";
import "./QuestionCard.scss";
import Timer from "../Timer/Timer";
import axios from "axios";

const baseURL = "http://localhost:3000";

function QuestionCard() {
  const [selected, setSelected] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const handleFlip = () => setFlipped(true);
  const handleSelect = (index) => setSelected(index);

const handleNext = () => {
    if (flipped) {
      loadRandomQuestion(questions);
    } else {
      setFlipped(true);
    }
  };

  useEffect(() => {
    const getAllQuestions = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/questions`);
        setQuestions(response.data);
        loadRandomQuestion(response.data);
      } catch (error) {
        console.error("Error fetching all questions:", error);
      }
    };
    getAllQuestions();
  }, []);

  const loadRandomQuestion = (questions) => {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(randomQuestion);
    setShuffledAnswers(
      [randomQuestion.correct_answer, ...randomQuestion.incorrect_answers].sort(
        () => Math.random() - 0.5
      )
    );
    setSelected(null);
    setFlipped(false);
  };

  return (
    <section
      className={`question-card ${flipped ? "flipped" : ""}`}
    >
      <div className="question-card__inner">
        {!flipped ? (
          <div className="question-card__front">
            <h2>Hint</h2>
            <h3 className="question-card__hint">
              {currentQuestion?.hint}
            </h3>
          </div>
        ) : (
          <div className="question-card__back">
            <Timer duration={30} onEnd={() => alert("Time's Up!")} />
            <p className="question-card__question">{currentQuestion?.question}</p>
            <ul className="question-card__list">
              {shuffledAnswers.map((answer, index) => (
                <li
                  key={index}
                  className={`question-card__item ${
                    selected === index
                      ? answer === currentQuestion.correct_answer
                        ? "question-card__item--correct"
                        : "question-card__item--incorrect"
                      : ""
                  }`}
                  onClick={() => handleSelect(index)}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="question-card__next-wrapper">
      <button
        className="question-card__next"
        onClick={handleNext}
      >
        {flipped ? "Next" : "Ready?"}
      </button>
      </div>
    </section>
  );
}

export default QuestionCard;
