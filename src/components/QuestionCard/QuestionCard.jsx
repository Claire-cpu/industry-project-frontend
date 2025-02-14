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
  const [answered, setAnswered] = useState(false); // Prevent multiple selections
  const [score, setScore] = useState(0); // Accumulate correct answers score

  // const handleFlip = () => setFlipped(true);

  const handleSelect = (index) => {
    if (answered) return; // Prevent multiple selections

    setSelected(index);
    setAnswered(true);

    // Check if the selected answer is correct
    if (shuffledAnswers[index] === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1); // Increase score for correct answers
    }
  };

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
    setAnswered(false); // Reset selection lock
    setFlipped(false);
  };

  return (
    <section className={`question-card ${flipped ? "flipped" : ""}`}>
      <div className="question-card__inner">
        {/* Display Score */}
        <div className="question-card__score">
          <strong>Score:</strong> {score}
        </div>

        {!flipped ? (
          <div className="question-card__front">
            <h2>Hint</h2>
            <h3 className="question-card__hint">{currentQuestion?.hint}</h3>
          </div>
        ) : (
          <div className="question-card__back">
            <Timer duration={30} onEnd={() => alert("Time's Up!")} />
            <p className="question-card__question">
              {currentQuestion?.question}
            </p>
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
                  } ${answered ? "question-card__item--disabled" : ""}`} // Add disabled styling
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
        <button className="question-card__next" onClick={handleNext}>
          {flipped ? "Next" : "Ready?"}
        </button>
      </div>
    </section>
  );
}

export default QuestionCard;
