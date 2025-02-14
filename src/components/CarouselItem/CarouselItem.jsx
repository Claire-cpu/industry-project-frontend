import "./CarouselItem.scss";
// import magnolia from "../../assets/images/photos/magnolia.png";
function CarouselItem({ story }) {
  console.log("pop story photo: ", story.photo);
  const API_URL = import.meta.env.VITE_API_URL;
  return (
    <article className="carousel-item">
      <img className="carousel-item__img" src={`${API_URL}${story.photo}`} />
      <section className="carousel-item__wrapper">
        <div className="carousel-item__content-wrapper">
          <h2 className="carousel-item__title">{story.company}y Title</h2>
          <p className="carousel-item__content">{story.story}</p>
        </div>
        <a href={story.url}>
          {" "}
          <button className="carousel-item__button">learn more</button>{" "}
        </a>
      </section>
    </article>
  );
}

export default CarouselItem;
