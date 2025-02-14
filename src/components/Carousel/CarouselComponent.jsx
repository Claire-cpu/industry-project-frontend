import { Carousel } from "antd";
import CarouselItem from "../CarouselItem/CarouselItem";
import { useEffect, useState } from "react";
import axios from "axios";

function CarouselComponent() {
  const [stories, setStories] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  async function fetchStories() {
    try {
      const response = await axios.get(`${API_URL}/api/success`);
      setStories(response.data);
      console.log("fetche stories are: ", response.data);
    } catch (error) {
      console.error("Error fetching inventories:", error);
    }
  }

  useEffect(() => {
    fetchStories();
  }, []);

  if (!stories) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel autoplay>
      {stories.map((story) => {
        return (
          <div key={story.id}>
            {" "}
            <CarouselItem story={story} />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
