import "./Main.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import QuestionCard from "../QuestionCard/QuestionCard";
import Help from "../Help/Help";
import Play from "../Play/Play";

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        {/*  <QuestionCard /> */}
        <Play />
        <Help />
      </main>
      <Footer />
    </>
  );
}

export default Main;
