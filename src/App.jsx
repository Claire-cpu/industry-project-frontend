import { useState } from "react";
import Animation from "./components/Animation/Animation";
import "./App.scss";
import "./styles/partials/_globals.scss";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import Header from "./components/Header/Header"; 

function App() {
  const [score, setScore] = useState(0); // Lifted score state

  const updateScore = (newScore) => {
    setScore(newScore); // Update score in the parent
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route
            path="/play"
            element={<QuestionCard updateScore={updateScore} score={score} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

