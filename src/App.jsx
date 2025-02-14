import "./App.scss";

import Main from "./components/Header/Main/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
