import "./Main.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import QuestionCard from "../QuestionCard/QuestionCard";

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <QuestionCard />
      </main>
      <Footer />
    </>
  );
}

export default Main;
