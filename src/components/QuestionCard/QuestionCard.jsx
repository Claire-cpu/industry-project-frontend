import { useEffect, useState } from "react";
import axios from "axios";
import Timer from "../Timer/Timer";
import "./QuestionCard.scss";
import AnswerModal from "../../components/AnswerModal/AnswerModal";
import Animation from "../Animation/Animation";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const baseURL = import.meta.env.VITE_API_URL;

function QuestionCard({ score, updateScore }) {

  const [selected, setSelected] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);
  // const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSelect = (index) => {
    if (answered) return;

    setSelected(index);
    setAnswered(true);

    const correct = shuffledAnswers[index] === currentQuestion.correct_answer;
    setIsCorrect(correct);
    setCorrectAnswer(currentQuestion.correct_answer);

    if (correct) {
      updateScore(score + 1); // 부모 컴포넌트(App)에서 상태 업데이트
    }
  };

  const handleNext = () => {
    if (flipped) {
      loadRandomQuestion(questions); // Load next question
    } else {
      setFlipped(true); // Flip the card
    }
    setIsCorrect(null);
    setCorrectAnswer("");
  };

  useEffect(() => {
    const getAllQuestions = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/questions`);
        setQuestions(response.data);
        loadRandomQuestion(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
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
    setAnswered(false);
    setFlipped(false);
  };

  const handleCloseModal = () => {
    setIsCorrect(null);
    handleNext();
  };

  return (
    <>
      <Header /> 
      <div className="question-wrapper">
    <section className={`question-card ${flipped ? "flipped" : ""}`}>
      <div className="question-card__inner">
        {!flipped ? (
          <div className="question-card__front">
            <div className="question-card__score">
              <strong>Score: {score}</strong>
            </div>
            <h2 className="question-card__hint-title">Hint</h2>
            <h3 className="question-card__hint">{currentQuestion?.hint}</h3>
          </div>
        ) : (
          <div className="question-card__back">
            <div className="question-card__score">
              <strong>Score: {score}</strong>
            </div>
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
                  } ${answered ? "question-card__item--disabled" : ""}`}
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
        {isCorrect !== null && (
          <AnswerModal
            isCorrect={isCorrect}
            correctAnswer={correctAnswer}
            onClose={handleCloseModal}
          />
        )}
      </section>
      <Animation score={score} />
      </div>
      <Footer />
    </>
  );
}

export default QuestionCard;
