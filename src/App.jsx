import "./App.scss";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/play" element={<QuestionCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
