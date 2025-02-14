import { useState } from "react";
import Animation from "./components/Animation/Animation"; 
import "./App.scss";
import "./styles/_globals.scss"; 
import QuestionCard from "./components/QuestionCard/QuestionCard";

function App() {
  const [score, setScore] = useState(0); // Lifted score state

  const updateScore = (newScore) => {
    setScore(newScore); // Update score in the parent
  };

  return (
    <>
      <QuestionCard updateScore={updateScore} score={score} /> {/* Pass score and updateScore */}
      <Animation score={score} /> {/* Pass score to Animation */}
    </>
  );
}

export default App;
