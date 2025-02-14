import "./App.scss";
import AnswerModal from "./components/AnswerModal/AnswerModal";

function App() {
  let isCorrect = false;
  return (
    <>
      <AnswerModal isCorrect={isCorrect} />
    </>
  );
}

export default App;
