import "./Main.scss";
import Footer from "../Footer/Footer";
import Help from "../Help/Help";
import Play from "../Play/Play";
import CarouselComponent from "../Carousel/CarouselComponent";
function Main() {
  return (
    <>
      <CarouselComponent />
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
